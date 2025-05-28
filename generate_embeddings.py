import os
from dotenv import load_dotenv
from openai import OpenAI
import json
import random
from sklearn.metrics.pairwise import cosine_similarity

load_dotenv()  # Load environment variables from .env file
API_KEY = os.getenv('OPENAI_API_KEY')
MODEL = 'gpt-4o-mini'
client = OpenAI(api_key=API_KEY)

def generate_embeddings(sentences, batch_size=100):
    all_embeddings = []
    for i in range(0, len(sentences), batch_size):
        batch = sentences[i:i + batch_size]
        response = client.embeddings.create(
            input=batch,
            model="text-embedding-3-small"
        )
        batch_embeddings = [item.embedding for item in response.data]
        all_embeddings.extend(batch_embeddings)
    return all_embeddings

def generate_qa_pairs_with_embeddings(filename):
    with open(filename, "r") as f:
        data = json.load(f)
    
    qa_pairs = data["qa_pairs"]
    question_embeddings = generate_embeddings([q["question"] for q in qa_pairs])

    for i, pair in enumerate(qa_pairs):
        pair["embedding"] = question_embeddings[i]
    
    return qa_pairs


easy_qa_pair_with_embedding = generate_qa_pairs_with_embeddings('easy_trivia.json')
hard_qa_pair_with_embedding = generate_qa_pairs_with_embeddings('hard_trivia.json')

with open('easy_with_embeddings.json', 'w') as f:
    json.dump(easy_qa_pair_with_embedding, f)

with open('hard_with_embeddings.json', 'w') as f:
    json.dump(hard_qa_pair_with_embedding, f)