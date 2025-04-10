from flask import Flask, render_template, request, jsonify
import os
from dotenv import load_dotenv
from functions.chatbot_handler import get_gemini_response


app = Flask(__name__, static_folder='../frontend/assets', template_folder='../frontend')
load_dotenv()

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/chatbot', methods=['GET'])
def chatbot():
    return render_template("chatbot.html")

@app.route('/chat', methods=['POST'])
def gemini_responses():
    """
        This function retrieves the gemini response through the get_gemini_response()
    """ 
    message = request.json.get("message")
    response = get_gemini_response(message)
    return jsonify({'response': response})
    
if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host='0.0.0.0', port=81)