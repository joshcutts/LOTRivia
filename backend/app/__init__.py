# app/__init__.py
from flask import Flask
from app.routes import router
# from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.register_blueprint(router, url_prefix="/api")
    # CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
    return app
