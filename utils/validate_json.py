# utils/validate_json.py

from functools import wraps
from flask import request, jsonify

def validate_json(required_keys):
    def wrapper(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            data = request.json
            if not data:
                return jsonify({"msg": "Faltan datos JSON en la solicitud"}), 400

            missing_keys = [key for key in required_keys if key not in data]
            if missing_keys:
                return jsonify({"msg": f"Faltan los siguientes campos en el JSON: {', '.join(missing_keys)}"}), 400

            return f(*args, **kwargs)
        return decorated_function
    return wrapper
