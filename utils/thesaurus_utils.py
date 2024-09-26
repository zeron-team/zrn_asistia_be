from pymongo import MongoClient

# Conexión a la base de datos de MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['thesaurus_db']
thesaurus_collection = db['thesaurus']

def get_thesaurus_by_level_and_subject(level, cycle, grade, area):
    """
    Obtiene el thesauro para un nivel, ciclo, grado y área específicos.
    """
    query = {
        "nivel": level,
        "ciclo": cycle,
        "grado": grade,
        "area": area
    }
    return thesaurus_collection.find_one(query)
