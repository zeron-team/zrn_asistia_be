from flask import Flask
from flask_cors import CORS  # Asegúrate de importar CORS
from flask_jwt_extended import JWTManager
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os

# Importar las extensiones
from extensions import bcrypt, jwt
from routes.thesaurus_routes import thesaurus_bp
from routes.openai_routes import openai_bp  # Importar el blueprint de OpenAI

# Cargar variables de entorno
load_dotenv()

def create_app():
    app = Flask(__name__)

    # Configuración de claves secretas y JWT
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

    # Configuración de CORS: Permitir solicitudes desde el frontend específico
    CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3001"]}}, supports_credentials=True)

    # Inicialización de MongoDB
    client = MongoClient(os.getenv('MONGO_URI'))
    app.db = client['thesaurus_db']

    # Inicialización de extensiones
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Importar y registrar rutas
    from routes.auth_routes import auth_bp
    from routes.user_routes import user_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(user_bp, url_prefix='/api/users')
    app.register_blueprint(thesaurus_bp, url_prefix='/api/thesaurus')
    app.register_blueprint(openai_bp, url_prefix='/api/openai')

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=3355)
