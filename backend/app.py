from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generative.ai as genai
import os 
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize Gemini API
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-pro')

SYSTEM_PROMPT = """You are a knowledgeable medical assistant powered by The Gale Encyclopedia of Medicine. 
Your responses should be:
- Professional and accurate
- Based on verified medical information
- Clear and easy to understand
- Include appropriate disclaimers when necessary

Always remind users to consult healthcare professionals for personal medical advice."""

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        message = data.get('message')
        
        if not message:
            return jsonify({'error': 'Message is required'}), 400

        chat = model.start_chat(history=[
            {'role': 'user', 'parts': [SYSTEM_PROMPT]},
            {'role': 'model', 'parts': ['I understand. I will act as a medical information assistant while maintaining professional standards and providing appropriate disclaimers.']}
        ])
        
        response = chat.send_message(message)
        return jsonify({'response': response.text})
    
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Failed to get response from Gemini API'}), 500

if __name__ == '__main__':
    app.run(debug=True)