from pymongo import MongoClient
from datetime import datetime  # Asegúrate de importar datetime

client = MongoClient('mongodb://localhost:27017/')
db = client['thesaurus_db']

class User:
    collection = db['users']

    @staticmethod
    def find_by_username(username):
        return User.collection.find_one({'username': username})

    @staticmethod
    def create_user(username, password, role):
        return User.collection.insert_one({
            'username': username,
            'password': password,
            'role': role,
            'login_history': []
        })

    @staticmethod
    def log_login(username):
        User.collection.update_one(
            {'username': username},
            {'$push': {'login_history': {'timestamp': datetime.utcnow()}}}
        )
