from flask import Blueprint, jsonify, request, current_app

# Definir el Blueprint para el tesauro
thesaurus_bp = Blueprint('thesaurus', __name__)

# Ruta para obtener áreas
@thesaurus_bp.route('/areas', methods=['GET'])
def get_areas():
    nivel = request.args.get('nivel')
    tipo = request.args.get('tipo')
    grado = request.args.get('grado')
    
    if not (nivel and tipo and grado):
        return jsonify([])  # Devolver una lista vacía si faltan parámetros
    
    try:
        thesaurus = current_app.db['thesaurus']
        query = {
            f"{nivel}.{tipo}.grados.{grado}.areas": {"$exists": True}
        }
        result = thesaurus.find_one(query, {f"{nivel}.{tipo}.grados.{grado}.areas": 1, "_id": 0})
        if result:
            areas = list(result.get(nivel, {}).get(tipo, {}).get('grados', {}).get(grado, {}).get('areas', {}).keys())
            return jsonify(areas)
        else:
            return jsonify([])
    except Exception as e:
        print(f"Error al obtener áreas: {str(e)}")
        return jsonify([])

# Ruta para obtener disciplinas
@thesaurus_bp.route('/disciplinas', methods=['GET'])
def get_disciplinas():
    nivel = request.args.get('nivel')
    tipo = request.args.get('tipo')
    grado = request.args.get('grado')
    area = request.args.get('area')
    
    if not (nivel and tipo and grado and area):
        return jsonify([])  # Devolver una lista vacía si faltan parámetros
    
    try:
        thesaurus = current_app.db['thesaurus']
        query = {
            f"{nivel}.{tipo}.grados.{grado}.areas.{area}.disciplinas": {"$exists": True}
        }
        result = thesaurus.find_one(query, {f"{nivel}.{tipo}.grados.{grado}.areas.{area}.disciplinas": 1, "_id": 0})
        if result:
            disciplinas = result.get(nivel, {}).get(tipo, {}).get('grados', {}).get(grado, {}).get('areas', {}).get(area, {}).get('disciplinas', [])
            return jsonify(disciplinas)
        else:
            return jsonify([])
    except Exception as e:
        print(f"Error al obtener disciplinas: {str(e)}")
        return jsonify([])

# Ruta para obtener temas
@thesaurus_bp.route('/temas', methods=['GET'])
def get_temas():
    nivel = request.args.get('nivel')
    tipo = request.args.get('tipo')
    grado = request.args.get('grado')
    area = request.args.get('area')
    disciplina = request.args.get('disciplina')
    
    if not (nivel and tipo and grado and area and disciplina):
        return jsonify([])  # Devolver una lista vacía si faltan parámetros
    
    try:
        thesaurus = current_app.db['thesaurus']
        query = {
            f"{nivel}.{tipo}.grados.{grado}.areas.{area}.temas.{disciplina}": {"$exists": True}
        }
        result = thesaurus.find_one(query, {f"{nivel}.{tipo}.grados.{grado}.areas.{area}.temas.{disciplina}": 1, "_id": 0})
        if result:
            temas = result.get(nivel, {}).get(tipo, {}).get('grados', {}).get(grado, {}).get('areas', {}).get(area, {}).get('temas', {}).get(disciplina, [])
            return jsonify(temas)
        else:
            return jsonify([])
    except Exception as e:
        print(f"Error al obtener temas: {str(e)}")
        return jsonify([])
