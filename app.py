from flask import Flask, jsonify
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from pymongo import MongoClient

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

# Conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['thesaurus_db']

# Inicialización de Bcrypt para encriptar contraseñas
bcrypt = Bcrypt(app)

# Inicialización de JWT
jwt = JWTManager(app)

# Importar rutas
from routes.auth_routes import auth_bp
from routes.user_routes import user_bp

# Registro de rutas
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(user_bp, url_prefix='/api/users')

if __name__ == '__main__':
    app.run(debug=True)
