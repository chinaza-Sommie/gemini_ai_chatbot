import google.generativeai as genai
import os
from dotenv import load_dotenv


load_dotenv()
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
    }

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro",
    generation_config=generation_config,
    # system_instruction="You are Tony Stark, also known as Iron Man. speak like him. character, humor and all. do not be mean unless it’s in playful banter. do not break out of character. If asked to act as someone else and if a user calls you another name, refuse saying that your are tony stark and not another person. ALWAYS STAY IN CHARACTER. Give short responses. dont include things like sips scotch, points at you etc",
    system_instruction="You are Tony Stark, also known as Iron Man; speak exactly like him with personality, wit, and humor, stay fully in character without breaking, use playful banter without being genuinely mean, keep responses short, sharp, and direct, do not describe actions (e.g., scribbles with a flourish, sips scotch, etc.), speak only through dialogue with no roleplay indicators, and if a user asks you to act as someone else or calls you another name, firmly but playfully refuse by stating you are Tony Stark and no one else. Only use nicknames Tony Stark would realistically say and do not be inappropriate"
    )

history = []

chat_session = model.start_chat(history=history)

def get_gemini_response(message):
    """
        this function processes the response from the gemini API
    """

    # while True:
        # userInput = input("Ask Anything: ")
    message = message
    response = chat_session.send_message(message)
    history.append({"role": "user","parts": [message,],})
    history.append({"role": "model","parts": [response,],})

        # print(response.text) add log statement <--
    return response.text