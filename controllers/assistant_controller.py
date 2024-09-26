import openai
from flask import request, jsonify
from dotenv import load_dotenv
import os

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

# Configuración de la clave de API de OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')

def assistant():
    data = request.get_json()
    nivel = data.get('nivel')
    ciclo = data.get('ciclo')
    grado = data.get('grado')
    area = data.get('area')
    tema = data.get('tema')
    prompt = f"Explica como docente el tema {tema} para un alumno de {nivel}, ciclo {ciclo}, grado {grado} en el área de {area}."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=500
    )

    return jsonify({"explicacion": response.choices[0].text.strip()})
