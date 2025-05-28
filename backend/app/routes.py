# app/routes.py
import os
import json
from flask import Blueprint, request, jsonify
from app.openai_utils import (
    find_nearest_question,
    grade_response
    )

import random
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE_DIR, 'questions_embeddings/easy_with_embeddings.json'), 'r') as f:
    easy_questions = json.load(f)

with open(os.path.join(BASE_DIR, 'questions_embeddings/hard_with_embeddings.json'), 'r') as f:
    hard_questions = json.load(f)

router = Blueprint("api", __name__)

@router.route("/similar-question", methods=["POST"])
def get_trivia():
    data = request.get_json()
    user_question = data.get("question", "").strip().lower()
    mode = data.get("mode")
    question_set = easy_questions if mode == "easy" else hard_questions


    if user_question == "random":
        return jsonify(random.choice(question_set))
    

    result = find_nearest_question(user_question, question_set)
    return jsonify(result)

@router.route("/grade", methods=["POST"])
def grade():
    data = request.get_json()
    question = data.get("question", "")
    mode = data.get("mode")
    question_set = easy_questions if mode == "easy" else hard_questions

    correct_answer = correct_answer = next(
        (q["answer"] for q in question_set if q["question"] == question),
        None
    )
    
    user_answer = data.get("user_answer", "")
    
    result = grade_response(correct_answer, user_answer)
    return jsonify({"result": result, "userAnswer": user_answer, "correctAnswer": correct_answer})
