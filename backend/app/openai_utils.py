# app/openai_utils.py
import os
import json
import numpy as np
from dotenv import load_dotenv
from openai import OpenAI
from sklearn.metrics.pairwise import cosine_similarity

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_embedding(sentence):
    response = client.embeddings.create(
        input=sentence,
        model="text-embedding-3-small"
    )
    return response.data[0].embedding

def find_nearest_question(user_question, qa_pairs):
    user_embedding = generate_embedding(user_question)

    best_score = -1
    best_pair = None

    for pair in qa_pairs:
        score = cosine_similarity(
            [user_embedding],
            [pair["embedding"]]
        )[0][0]

        if score > best_score:
            best_score = score
            best_pair = pair

    return {
        "question": best_pair["question"],
        "answer": best_pair["answer"]
    }

def grade_response(correct_answer, user_answer):
    if user_answer.lower() in correct_answer.lower():
        return "Great answer! (Matched by name)"

    correct_embedding = generate_embedding(correct_answer)
    user_embedding = generate_embedding(user_answer)
    score = cosine_similarity([correct_embedding], [user_embedding])[0][0]

    if score >= 0.9:
        return f"Perfect answer! (Score: {score:.2f})"
    elif score >= 0.7:
        return f"Pretty good, but not perfect. (Score: {score:.2f})"
    elif score >= 0.5:
        return f"Close but no cigar. (Score: {score:.2f})"
    else:
        return f"Not that close. Try again! (Score: {score:.2f})"