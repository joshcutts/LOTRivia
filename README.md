# LOTRivia

A full-stack Lord of the Rings trivia game for Middle-earth fans. The app uses OpenAI text embeddings and cosine similarity to retrieve related questions and to grade free‑form answers.


![App screenshot](docs/screenshot_lotrivia.png)

## Features

- Semantic question search against embedded trivia banks (easy and hard modes)
- Free‑form answer grading using embedding similarity
- React + Vite frontend with Material UI
- Flask API backend

## Prerequisites

- Python 3.11+
- Node.js 18+
- An OpenAI API key with access to embeddings

## Quick Start

### 1) Backend setup

```bash
cd backend

# (Recommended) Create & activate a virtual environment
python3.11 -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt

# If you encounter missing packages, install these runtime deps used by the app
pip install openai python-dotenv numpy scikit-learn

# Configure OpenAI credentials (required)
echo "OPENAI_API_KEY=your_api_key_here" > .env

# Run the API (listens on http://localhost:3000)
python run.py
```

### 2) Frontend setup

```bash
cd frontend
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

The Vite dev server proxies API requests from `/api/*` to `http://localhost:3000` (see `frontend/vite.config.ts`). Ensure the backend is running before using the app.

## Environment

- `OPENAI_API_KEY` (required, set in `backend/.env`) — used by the backend to create embeddings via the `text-embedding-3-small` model.

## API Endpoints

- `POST /api/similar-question`
  - Body: `{ "question": string, "mode": "easy" | "hard" }`
  - Special case: set `question: "random"` to get a random item from the selected set
- `POST /api/grade`
  - Body: `{ "question": string, "mode": "easy" | "hard", "user_answer": string }`

## Notes

- Embedded question sets live in `backend/app/questions_embeddings/` and are loaded at API startup.
- To extend or regenerate embeddings, ensure your API key has access and follow your own data generation flow (e.g., via a custom script like `generate_embeddings.py`).
