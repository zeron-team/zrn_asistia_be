#backend/routes/openai_routes.py

from flask import Blueprint, request, jsonify
import openai
import os

# Crear el blueprint para las rutas de OpenAI
openai_bp = Blueprint('openai', __name__)

# Configurar la clave API de OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')

# Ruta para obtener explicaciones usando la API de OpenAI
@openai_bp.route('/explicacion', methods=['POST'])
def obtener_explicacion():
    data = request.get_json()

    # Verifica que todos los datos necesarios estén presentes
    if not all(key in data for key in ['tema', 'disciplina', 'nivel', 'grado', 'area', 'tokens']):
        return jsonify({'error': 'Faltan datos para generar la explicación.'}), 400

    # Crear el mensaje basado en los datos enviados desde el frontend
    messages = [
        {"role": "system", "content": "Eres un asistente educativo en la REPUBLICA ARGENTINA muy paciente que ayuda a los estudiantes a entender conceptos de manera clara y sencilla aplicando los modismos de comunicacion de ARGENTINA como por ejemplo: vos, tenes, decis. NO UTILIZAR CHE"},
        {"role": "user", "content": f"Por favor, explica de manera simple y detallada el tema '{data['tema']}' en la disciplina '{data['disciplina']}' para estudiantes de {data['nivel']} del grado {data['grado']} en el área de {data['area']}. Usa ejemplos prácticos y un lenguaje fácil de entender para que los estudiantes puedan aprender mejor."}
    ]

    try:
        # Llamar a la API de OpenAI con la cantidad de tokens seleccionada
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=messages,
            max_tokens=data['tokens'],  # Usar el valor de tokens seleccionado por el alumno
            n=1,
            temperature=0.7,
        )

        explanation_part = response['choices'][0]['message']['content'].strip()
        
        # Formatear la explicación y eliminar la frase final
        formatted_explanation = explanation_part.replace("Por ejemplo:", "<br/><strong>Por ejemplo:</strong><br/>").replace("¿Tienes alguna otra pregunta sobre este tema?", "").strip()
        
        return jsonify({'explicacion': formatted_explanation})

    except openai.error.OpenAIError as e:
        print(f"Error de OpenAI: {str(e)}")
        return jsonify({'error': f'Error de OpenAI: {str(e)}'}), 500
    except Exception as e:
        print(f"Error interno del servidor: {str(e)}")
        return jsonify({'error': f'Error interno del servidor: {str(e)}'}), 500

# Ruta para generar el cuestionario
@openai_bp.route('/cuestionario', methods=['POST'])
def generar_cuestionario():
    data = request.get_json()

    if not all(key in data for key in ['tema', 'disciplina', 'nivel', 'grado', 'area']):
        return jsonify({'error': 'Faltan datos para generar el cuestionario.'}), 400

    # Crear el mensaje basado en los datos enviados desde el frontend
    messages = [
        {"role": "system", "content": "Eres un asistente educativo muy paciente que ayuda a los estudiantes a aprender conceptos de manera clara."},
        {"role": "user", "content": f"Genera un cuestionario de 5 preguntas sobre el tema '{data['tema']}' en la disciplina '{data['disciplina']}' para estudiantes de {data['nivel']} del grado {data['grado']} en el área de {data['area']}. Cada pregunta debe tener 4 opciones, y una de ellas debe ser la correcta. No repitas la respuesta correcta después de las opciones."}
    ]

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=1500,  # Ajustado para generar un cuestionario
            n=1,
            temperature=0.7,
        )

        quiz_content = response['choices'][0]['message']['content'].strip()

        # Formatear el cuestionario para agregar saltos de línea después de la última respuesta y eliminar la frase final
        formatted_quiz = (
            quiz_content
            .replace("1.", "<br/><strong>1.</strong>")
            .replace("2.", "<br/><strong>2.</strong>")
            .replace("3.", "<br/><strong>3.</strong>")
            .replace("4.", "<br/><strong>4.</strong>")
            .replace("5.", "<br/><strong>5.</strong>")
            .replace("a)", "<br/>a)")
            .replace("b)", "<br/>b)")
            .replace("c)", "<br/>c)")
            .replace("d)", "<br/>d)")
            .replace("A)", "<br/>a)")
            .replace("B)", "<br/>b)")
            .replace("C)", "<br/>c)")
            .replace("D)", "<br/>d)")
            .replace("Respuesta correcta:", "")
            .replace("(Respuesta correcta:)", "")  # Eliminar el texto de la respuesta correcta
            .strip()  # Eliminar espacios en blanco innecesarios
        )

        # Separar la última respuesta y el mensaje final en líneas nuevas, y eliminar la frase innecesaria
        formatted_quiz = formatted_quiz.replace(
            "¡Déjame saber si necesitas ayuda con algo más!", "").strip() + "<br/><br/>Espero que estas preguntas sean útiles para que los estudiantes practiquen sus conocimientos.<br/>"

        return jsonify({'cuestionario': formatted_quiz})

    except openai.error.OpenAIError as e:
        print(f"Error de OpenAI: {str(e)}")
        return jsonify({'error': f'Error de OpenAI: {str(e)}'}), 500
    except Exception as e:
        print(f"Error interno del servidor: {str(e)}")
        return jsonify({'error': f'Error interno del servidor: {str(e)}'}), 500

# Ruta para generar la planificación o actividad
@openai_bp.route('/planificacion', methods=['POST'])
def generar_planificacion():
    data = request.get_json()

    if not all(key in data for key in ['tema', 'disciplina', 'nivel', 'grado', 'area', 'selectedOption', 'duracion']):
        return jsonify({'error': 'Faltan datos para generar la planificación.'}), 400

    # Crear el mensaje basado en los datos enviados desde el frontend
    option = data['selectedOption']
    duracion = data['duracion']  # Capturamos la duración
    
    if option == 'actividades':
        prompt = f"Genera una actividad detallada sobre el tema '{data['tema']}' en la disciplina '{data['disciplina']}' para el nivel {data['nivel']} del grado {data['grado']} en el área de {data['area']}, con una duración total de {duracion} minutos, dividida en momentos/modulos con un cronograma."
    elif option == 'planificacion':
        prompt = f"Genera una planificación completa de una clase sobre el tema '{data['tema']}' en la disciplina '{data['disciplina']}' para el nivel {data['nivel']} del grado {data['grado']} en el área de {data['area']}. La clase debe tener una duración total de {duracion} minutos. Incluir objetivos, materiales, duración, momentos de la clase, actividades y evaluación."
    elif option == 'actos_escolares':
        prompt = f"Genera un guion para un acto escolar sobre el tema '{data['tema']}' para estudiantes de {data['nivel']} del grado {data['grado']}. Incluir roles, discurso y actividades."

    try:
        # Llamada a OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Eres un asistente educativo en Argentina, enfocado en ayudar a docentes a generar actividades y planificación escolar."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=4000,
            n=1,
            temperature=0.7,
        )

        planificacion = response['choices'][0]['message']['content'].strip()
        return jsonify({'planificacion': planificacion})

    except openai.error.OpenAIError as e:
        return jsonify({'error': f'Error de OpenAI: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Error interno del servidor: {str(e)}'}), 500
