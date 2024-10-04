const data = {
    tipoEscuela: {
        comun: {},
        tecnica: {},
        artistica: {},
        especial: {}
    },
    jurisdiccion: {
        buenosAires: {},
        cordoba: {},
        santaFe: {},
        mendoza: {},
        tucuman: {},
        // Agregar más provincias...
    },
    inicial: {
        areas: {
            lenguaje: {
                edades: {
                    3: {
                        disciplinas: ["Desarrollo del Lenguaje", "Juego Simbólico"],
                        temas: {
                            "desarrollo del lenguaje": ["Palabras Simples", "Frases Cortas"],
                            "juego simbólico": ["Imitación de Roles", "Juegos de Imitación"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    },
                    4: {
                        disciplinas: ["Desarrollo del Lenguaje", "Juego Simbólico", "Narración"],
                        temas: {
                            "desarrollo del lenguaje": ["Construcción de Frases", "Vocabulario Ampliado"],
                            "juego simbólico": ["Juegos de Roles", "Representación de Situaciones"],
                            "narración": ["Escucha Activa", "Relato de Cuentos Simples"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    },
                    5: {
                        disciplinas: ["Desarrollo del Lenguaje", "Juego Simbólico", "Narración", "Expresión Artística"],
                        temas: {
                            "desarrollo del lenguaje": ["Conversaciones Largas", "Uso de Pronombres"],
                            "juego simbólico": ["Dramatización de Cuentos", "Juegos de Representación"],
                            "narración": ["Cuentos con Secuencia", "Creación de Historias Simples"],
                            "expresión artística": ["Dibujo Libre", "Modelado en Arcilla"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    }
                }
            },
            matematicas: {
                edades: {
                    3: {
                        disciplinas: ["Nociones Básicas", "Conteo"],
                        temas: {
                            "nociones básicas": ["Grande y Pequeño", "Más y Menos"],
                            "conteo": ["Números hasta 3", "Correspondencia Uno a Uno"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    },
                    4: {
                        disciplinas: ["Nociones Básicas", "Conteo", "Formas Geométricas"],
                        temas: {
                            "nociones básicas": ["Más Grande y Más Pequeño", "Igual y Diferente"],
                            "conteo": ["Números hasta 5", "Agrupación y Comparación"],
                            "formas geométricas": ["Círculo y Cuadrado", "Reconocimiento de Formas"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    },
                    5: {
                        disciplinas: ["Nociones Básicas", "Conteo", "Formas Geométricas", "Medición"],
                        temas: {
                            "nociones básicas": ["Comparación de Tamaños", "Cantidad"],
                            "conteo": ["Números hasta 10", "Orden de Secuencia"],
                            "formas geométricas": ["Rectángulo y Triángulo", "Patrones Simples"],
                            "medición": ["Peso y Volumen Básico", "Comparación de Cantidades"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    }
                }
            },
            ciencias_naturales: {
                edades: {
                    3: {
                        disciplinas: ["Exploración del Entorno", "Seres Vivos"],
                        temas: {
                            "exploración del entorno": ["Cuidado de Plantas", "Animales Comunes"],
                            "seres vivos": ["Identificación de Animales", "Ciclo de Vida de Plantas"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    },
                    4: {
                        disciplinas: ["Exploración del Entorno", "Seres Vivos", "Cuidados del Medio Ambiente"],
                        temas: {
                            "exploración del entorno": ["Día y Noche", "Clima y Estaciones"],
                            "seres vivos": ["Clasificación de Animales", "Partes de una Planta"],
                            "cuidados del medio ambiente": ["Reciclaje Básico", "Cuidado del Agua"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    },
                    5: {
                        disciplinas: ["Exploración del Entorno", "Seres Vivos", "Cuidados del Medio Ambiente", "Fenómenos Naturales"],
                        temas: {
                            "exploración del entorno": ["El Sol y la Luna", "Diferentes Tipos de Clima"],
                            "seres vivos": ["Diferencia entre Animales y Plantas", "Alimentación de Animales"],
                            "cuidados del medio ambiente": ["Cuidado de la Naturaleza", "Reciclaje de Materiales"],
                            "fenómenos naturales": ["Lluvia y Viento", "Día y Noche"]
                        },
                        tipoEscuela: ["comun", "especial"],
                        jurisdiccion: ["buenosAires", "cordoba", "santaFe"]
                    }
                }
            }
        }
    },
    primaria: {
        primer_ciclo: {
            grados: {
                1: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Números y Operaciones", "Geometría", "Medición"],
                            temas: {
                                "números y operaciones": ["Números Naturales hasta 100", "Suma y Resta Básica"],
                                "geometría": ["Formas y Figuras Básicas", "Simetría"],
                                "medición": ["Medición de Longitud y Masa", "Tiempo y Relojes"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía"],
                            temas: {
                                "comprensión lectora": ["Cuentos Cortos y Poemas Simples", "Comprensión de Preguntas"],
                                "gramática": ["Oraciones Simples", "Uso de Sustantivos y Verbos"],
                                "ortografía": ["Uso Correcto de Mayúsculas", "Ortografía Básica"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia Familiar y Comunitaria", "Fechas Patrias"],
                                "geografía": ["La Escuela y el Barrio", "Medios de Transporte"],
                                "formación ética y ciudadana": ["Normas de Convivencia", "Valores y Respeto"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                            temas: {
                                "biología": ["Seres Vivos y su Entorno", "Partes del Cuerpo"],
                                "física": ["Luz y Sombra", "Movimientos Básicos"],
                                "química": ["Materiales Naturales y Artificiales", "Cambio de Estados"],
                                "cuidado del ambiente": ["Cuidado del Agua", "Reciclaje Básico"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                            temas: {
                                "plástica": ["Dibujo y Pintura Básica", "Uso de Colores Primarios"],
                                "música": ["Cantos Infantiles", "Ritmo y Movimiento"],
                                "teatro": ["Juegos Dramáticos", "Creación de Personajes"],
                                "danza": ["Danza Creativa", "Expresión Corporal"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Introducción al Fútbol", "Juegos Predeportivos"],
                                "juegos recreativos": ["Juegos de Movimiento", "Juegos Cooperativos"],
                                "educación para la salud": ["Higiene Personal", "Rutinas de Ejercicio Básico"]
                            }
                        }
                    }
                },
                2: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición"],
                            temas: {
                                "números y operaciones": ["Números Naturales hasta 1000", "Multiplicación y División Básica"],
                                "álgebra básica": ["Patrones y Secuencias", "Introducción a las Ecuaciones"],
                                "geometría": ["Perímetro y Área de Figuras Simples"],
                                "medición": ["Unidades de Longitud", "Uso del Reloj Analógico y Digital"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos"],
                            temas: {
                                "comprensión lectora": ["Fábulas y Cuentos Populares", "Comprensión de Instrucciones Escritas"],
                                "gramática": ["Estructura de Oraciones", "Uso de Pronombres"],
                                "ortografía": ["Reglas Básicas de Acentuación", "Puntuación"],
                                "producción de textos": ["Escritura de Cuentos Cortos", "Descripción de Imágenes"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia de la Comunidad", "Primeras Ciudades Argentinas"],
                                "geografía": ["Entorno Natural y Urbano", "Puntos Cardinales"],
                                "formación ética y ciudadana": ["Derechos de los Niños", "Responsabilidades"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                            temas: {
                                "biología": ["Plantas y Animales", "Ciclo de Vida"],
                                "física": ["Sonido y Vibración", "Fuerzas Simples"],
                                "química": ["Mezclas y Soluciones", "Reacciones Simples"],
                                "cuidado del ambiente": ["Impacto Humano en la Naturaleza", "Conservación de Recursos"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                            temas: {
                                "plástica": ["Modelado con Arcilla", "Técnicas de Recorte y Pegado"],
                                "música": ["Instrumentos Simples", "Coro y Ensambles"],
                                "teatro": ["Escenas Cortas", "Improvisación"],
                                "danza": ["Danzas Tradicionales", "Coreografías Infantiles"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Introducción al Voleibol", "Atletismo Básico"],
                                "juegos recreativos": ["Juegos de Relevo", "Juegos de Estrategia"],
                                "educación para la salud": ["Alimentación Saludable", "Postura Corporal"]
                            }
                        }
                    }
                },
                3: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición", "Estadística y Probabilidad"],
                            temas: {
                                "números y operaciones": ["Números Decimales", "Múltiplos y Divisores"],
                                "álgebra básica": ["Ecuaciones Simples", "Propiedades de Operaciones"],
                                "geometría": ["Ángulos y Propiedades de Triángulos"],
                                "medición": ["Medición de Área y Volumen", "Uso de Calendarios"],
                                "estadística y probabilidad": ["Interpretación de Gráficos", "Conceptos Básicos de Probabilidad"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                            temas: {
                                "comprensión lectora": ["Textos Informativos", "Análisis de Personajes"],
                                "gramática": ["Concordancia Verbal", "Uso de Adjetivos"],
                                "ortografía": ["Uso de Comas y Puntos", "Ortografía de Palabras Frecuentes"],
                                "producción de textos": ["Redacción de Cartas", "Escritura Creativa"],
                                "literatura": ["Cuentos Tradicionales Argentinos", "Poesía Infantil"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia de la Provincia", "Pueblos Originarios"],
                                "geografía": ["Mapa de Argentina", "Relieves y Ríos"],
                                "formación ética y ciudadana": ["Solidaridad y Cooperación", "Respeto por la Diversidad"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                            temas: {
                                "biología": ["Funciones Vitales de los Seres Vivos", "Hábitats"],
                                "física": ["Energía y Calor", "Electricidad Básica"],
                                "química": ["Propiedades de la Materia", "Experimentos de Laboratorio"],
                                "cuidado del ambiente": ["Cambio Climático", "Biodiversidad"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                            temas: {
                                "plástica": ["Collage y Técnicas Mixtas", "Escultura Simple"],
                                "música": ["Composición Básica", "Teoría Musical Infantil"],
                                "teatro": ["Creación de Guiones", "Dirección Escénica"],
                                "danza": ["Danza Folclórica Argentina", "Expresión a Través de la Danza"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Iniciación en Básquet", "Natación Básica"],
                                "juegos recreativos": ["Juegos de Mesa y Exterior", "Desafíos Motrices"],
                                "educación para la salud": ["Cuidados Posturales", "Importancia de la Hidratación"]
                            }
                        }
                    }
                }
            }
        },
        segundo_ciclo: {
            grados: {
                4: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición", "Estadística y Probabilidad"],
                            temas: {
                                "números y operaciones": ["Números Racionales", "Operaciones con Fracciones"],
                                "álgebra básica": ["Ecuaciones y Desigualdades", "Factorización"],
                                "geometría": ["Áreas y Volúmenes de Sólidos Geométricos"],
                                "medición": ["Conversión de Unidades", "Uso de Instrumentos de Medición"],
                                "estadística y probabilidad": ["Recolección y Análisis de Datos", "Probabilidad Experimental"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                            temas: {
                                "comprensión lectora": ["Análisis de Textos Literarios", "Interpretación de Textos"],
                                "gramática": ["Oraciones Compuestas", "Uso de Conjunciones"],
                                "ortografía": ["Acentuación de Diptongos y Hiatos", "Ortografía de Palabras Homófonas"],
                                "producción de textos": ["Escritura Narrativa", "Relatos Personales"],
                                "literatura": ["Leyendas y Mitos", "Obras de Teatro Infantil"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Independencia y Primeras Presidencias", "Guerras Civiles Argentinas"],
                                "geografía": ["Regiones de Argentina", "Climas y Zonas Naturales"],
                                "formación ética y ciudadana": ["Cultura y Tradiciones", "Participación en la Comunidad"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                            temas: {
                                "biología": ["Sistema Digestivo", "Adaptación y Evolución"],
                                "física": ["Magnetismo", "Leyes del Movimiento"],
                                "química": ["Ácidos y Bases", "Tabla Periódica"],
                                "cuidado del ambiente": ["Ecosistemas", "Conservación de la Energía"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                            temas: {
                                "plástica": ["Técnicas de Acuarela", "Muralismo Infantil"],
                                "música": ["Instrumentos de Percusión", "Lectura de Partituras"],
                                "teatro": ["Producción Teatral", "Caracterización de Personajes"],
                                "danza": ["Danza Contemporánea", "Coreografía y Movimiento"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Introducción al Rugby", "Gimnasia Artística"],
                                "juegos recreativos": ["Juegos de Equipo", "Juegos de Reto"],
                                "educación para la salud": ["Prevención de Lesiones", "Nutrición y Deporte"]
                            }
                        }
                    }
                },
                5: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Números y Operaciones", "Álgebra Básica", "Geometría", "Medición", "Estadística y Probabilidad"],
                            temas: {
                                "números y operaciones": ["Operaciones con Decimales", "Fracciones y Decimales"],
                                "álgebra básica": ["Ecuaciones Lineales", "Gráficas y Tablas"],
                                "geometría": ["Teorema de Pitágoras", "Transformaciones Geométricas"],
                                "medición": ["Medición de Ángulos", "Sistemas de Unidades"],
                                "estadística y probabilidad": ["Medidas de Tendencia Central", "Probabilidad Teórica"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                            temas: {
                                "comprensión lectora": ["Interpretación de Poemas", "Lectura Crítica"],
                                "gramática": ["Uso de Verbos en Tiempos Compuestos", "Pronombres y Artículos"],
                                "ortografía": ["Uso de Tildes Diacríticas", "Reglas de Ortografía Específicas"],
                                "producción de textos": ["Redacción de Ensayos", "Narrativa Descriptiva"],
                                "literatura": ["Novelas Juveniles", "Teatro Clásico"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Conquista del Desierto", "Inmigración en Argentina"],
                                "geografía": ["Recursos Naturales", "Actividades Económicas"],
                                "formación ética y ciudadana": ["Derechos Humanos", "Educación Cívica"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                            temas: {
                                "biología": ["Sistemas del Cuerpo Humano", "Genética Básica"],
                                "física": ["Mecánica y Dinámica", "Principios de Óptica"],
                                "química": ["Reacciones Químicas", "Sustancias y Mezclas"],
                                "cuidado del ambiente": ["Ciclos Biogeoquímicos", "Recursos Naturales y su Gestión"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                            temas: {
                                "plástica": ["Diseño Gráfico Básico", "Técnicas de Grabado"],
                                "música": ["Composición y Arreglo", "Historia de la Música Argentina"],
                                "teatro": ["Técnicas de Actuación", "Teatro de Sombras"],
                                "danza": ["Danza Clásica", "Improvisación en Danza"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Vóley Competitivo", "Hockey"],
                                "juegos recreativos": ["Juegos de Rol y Dramatización", "Juegos con Materiales"],
                                "educación para la salud": ["Condición Física y Bienestar", "Manejo del Estrés"]
                            }
                        }
                    }
                },
                6: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Números y Operaciones", "Álgebra", "Geometría", "Medición", "Estadística y Probabilidad"],
                            temas: {
                                "números y operaciones": ["Radicales y Potencias", "Proporciones y Porcentajes"],
                                "álgebra": ["Ecuaciones Cuadráticas", "Funciones Lineales"],
                                "geometría": ["Cuerpos Geométricos Complejos", "Simetrías y Rotaciones"],
                                "medición": ["Perímetros y Áreas Complejas", "Medición de Volúmenes"],
                                "estadística y probabilidad": ["Estadística Descriptiva", "Regresión Lineal Básica"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                            temas: {
                                "comprensión lectora": ["Análisis de Textos Informativos", "Lectura Analítica"],
                                "gramática": ["Sintaxis Compleja", "Subjuntivo y Condicional"],
                                "ortografía": ["Ortografía de Palabras Extranjeras", "Puntuación Compleja"],
                                "producción de textos": ["Escritura Argumentativa", "Crítica Literaria"],
                                "literatura": ["Poesía Moderna", "Teatro Contemporáneo"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Argentina en el Siglo XX", "Golpes de Estado y Democracia"],
                                "geografía": ["Geopolítica Argentina", "Problemas Ambientales"],
                                "formación ética y ciudadana": ["Justicia y Derechos", "Ciudadanía Digital"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                            temas: {
                                "biología": ["Microbiología", "Reproducción Humana"],
                                "física": ["Termodinámica", "Electromagnetismo"],
                                "química": ["Química Orgánica", "Química Nuclear"],
                                "cuidado del ambiente": ["Impacto Ambiental", "Desarrollo Sostenible"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                            temas: {
                                "plástica": ["Escultura en Materiales Diversos", "Instalaciones Artísticas"],
                                "música": ["Armonía y Composición", "Producción Musical"],
                                "teatro": ["Dirección y Producción", "Dramaturgia"],
                                "danza": ["Danza Experimental", "Coreografía Compleja"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Fútbol Avanzado", "Atletismo de Competición"],
                                "juegos recreativos": ["Juegos de Estrategia Compleja", "Actividades en la Naturaleza"],
                                "educación para la salud": ["Primeros Auxilios", "Beneficios del Ejercicio Regular"]
                            }
                        }
                    }
                },
                7: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Números y Operaciones", "Álgebra", "Geometría", "Trigonometría", "Estadística y Probabilidad"],
                            temas: {
                                "números y operaciones": ["Números Reales", "Exponentes y Logaritmos"],
                                "álgebra": ["Polinomios", "Ecuaciones de Segundo Grado"],
                                "geometría": ["Geometría Analítica", "Cálculo de Áreas por Integración"],
                                "trigonometría": ["Introducción a las Razones Trigonométricas", "Aplicaciones de Trigonometría"],
                                "estadística y probabilidad": ["Distribuciones de Frecuencia", "Probabilidad Combinatoria"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Producción de Textos", "Literatura"],
                            temas: {
                                "comprensión lectora": ["Análisis de Ensayos", "Interpretación de Textos Filosóficos"],
                                "gramática": ["Construcciones Pasivas", "Modismos y Expresiones Idiomáticas"],
                                "ortografía": ["Uso Correcto de Paréntesis y Guiones", "Ortografía de Neologismos"],
                                "producción de textos": ["Redacción de Informes", "Escritura de Artículos"],
                                "literatura": ["Clásicos de la Literatura Argentina", "Poesía de Vanguardia"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia Reciente de Argentina", "Movimientos Sociales"],
                                "geografía": ["Globalización y Desarrollo", "Recursos Hídricos"],
                                "formación ética y ciudadana": ["Participación Política", "Desarrollo Sostenible"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química", "Cuidado del Ambiente"],
                            temas: {
                                "biología": ["Biotecnología", "Sistemas Nervioso y Endocrino"],
                                "física": ["Relatividad y Cuántica", "Tecnología Espacial"],
                                "química": ["Nanotecnología", "Química Farmacéutica"],
                                "cuidado del ambiente": ["Cambio Climático Global", "Biodiversidad y Conservación"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Plástica", "Música", "Teatro", "Danza"],
                            temas: {
                                "plástica": ["Arte Contemporáneo", "Proyectos de Arte Colectivo"],
                                "música": ["Producción de Música Electrónica", "Composición Avanzada"],
                                "teatro": ["Producción de Obras Complejas", "Teatro Interactivo"],
                                "danza": ["Danza Contemporánea Avanzada", "Montaje de Espectáculos"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Deportes de Aventura", "Entrenamiento Funcional"],
                                "juegos recreativos": ["Juegos de Cooperación y Confianza", "Juegos de Rol Activo"],
                                "educación para la salud": ["Planes de Entrenamiento Personalizado", "Impacto del Ejercicio en la Salud Mental"]
                            }
                        }
                    }
                }
            }
        }
    },
    secundaria: {
        ciclo_basico: {
            grados: {
                1: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Álgebra", "Geometría", "Estadística"],
                            temas: {
                                "álgebra": ["Ecuaciones Lineales", "Sistemas de Ecuaciones Simples"],
                                "geometría": ["Ángulos y Triángulos", "Área y Perímetro"],
                                "estadística": ["Datos y Gráficos", "Promedio y Mediana"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Literatura", "Producción de Textos"],
                            temas: {
                                "comprensión lectora": ["Comprensión de Textos Narrativos", "Análisis Literario Básico"],
                                "gramática": ["Concordancia Gramatical", "Verbos en Tiempo Presente"],
                                "ortografía": ["Normas de Acentuación", "Ortografía de Uso Común"],
                                "literatura": ["Mitos y Leyendas", "Cuentos de la Literatura Universal"],
                                "producción de textos": ["Escritura de Narraciones", "Descripción Detallada"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia de la Antigüedad", "Civilizaciones Primitivas"],
                                "geografía": ["Mapas y Cartografía", "Recursos Naturales Básicos"],
                                "formación ética y ciudadana": ["Derechos y Deberes", "Organización de la Comunidad"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química"],
                            temas: {
                                "biología": ["Células y Tejidos", "Sistema Nervioso"],
                                "física": ["Mecánica Básica", "Óptica Básica"],
                                "química": ["Elementos y Compuestos", "Reacciones Químicas Básicas"]
                            }
                        },
                        tecnología: {
                            disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                            temas: {
                                "informática": ["Fundamentos de Computación", "Introducción a Programación"],
                                "robótica": ["Conceptos Básicos de Robótica", "Proyectos con LEGO"],
                                "tecnología aplicada": ["Uso de Herramientas Digitales", "Proyectos de Innovación Tecnológica"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                            temas: {
                                "artes visuales": ["Dibujo y Pintura Básica", "Escultura con Materiales Blandos"],
                                "música": ["Ritmo y Movimiento Musical", "Canto Coral Básico"],
                                "teatro": ["Juegos de Expresión Corporal", "Técnicas de Improvisación"],
                                "danza": ["Danza Folclórica Básica", "Expresión Corporal Creativa"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Fundamentos de Fútbol", "Iniciación en Atletismo"],
                                "juegos recreativos": ["Juegos Cooperativos", "Juegos de Velocidad"],
                                "educación para la salud": ["Higiene Personal y Salud", "Importancia del Ejercicio"]
                            }
                        }
                    }
                },
                2: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Álgebra", "Geometría", "Estadística"],
                            temas: {
                                "álgebra": ["Ecuaciones Cuadráticas", "Factoreo"],
                                "geometría": ["Círculos y Polígonos", "Volumen y Superficie"],
                                "estadística": ["Distribuciones de Frecuencia", "Probabilidad Básica"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Literatura", "Producción de Textos"],
                            temas: {
                                "comprensión lectora": ["Textos Expositivos", "Interpretación de Ensayos"],
                                "gramática": ["Estructura de Oraciones Compuestas", "Uso de Conjunciones"],
                                "ortografía": ["Ortografía de Palabras Homófonas", "Normas de Puntuación"],
                                "literatura": ["Literatura Medieval", "Análisis de Textos Literarios"],
                                "producción de textos": ["Redacción de Ensayos", "Escritura de Reseñas"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia Medieval", "Edad Media en Europa"],
                                "geografía": ["Geografía Física y Humana", "Regiones Climáticas"],
                                "formación ética y ciudadana": ["Concepto de Justicia", "Democracia y Ciudadanía"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química"],
                            temas: {
                                "biología": ["Reproducción y Herencia", "Sistema Digestivo"],
                                "física": ["Electricidad y Magnetismo", "Fuerzas y Movimientos"],
                                "química": ["Ácidos y Bases", "Química Orgánica Básica"]
                            }
                        },
                        tecnología: {
                            disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                            temas: {
                                "informática": ["Desarrollo de Software", "Bases de Datos Básicas"],
                                "robótica": ["Construcción de Robots Simples", "Controladores y Sensores"],
                                "tecnología aplicada": ["TICs en la Educación", "Proyectos de Ingeniería"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                            temas: {
                                "artes visuales": ["Collage y Técnicas Mixtas", "Modelado en Arcilla"],
                                "música": ["Instrumentos de Percusión", "Canto en Grupo"],
                                "teatro": ["Montaje de Escenas Simples", "Dramatización de Cuentos"],
                                "danza": ["Danzas Tradicionales Argentinas", "Danza Libre"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Fundamentos de Básquetbol", "Introducción a la Natación"],
                                "juegos recreativos": ["Juegos de Equipo", "Juegos de Estrategia"],
                                "educación para la salud": ["Nutrición Básica", "Higiene Postural"]
                            }
                        }
                    }
                },
                3: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Álgebra", "Geometría", "Trigonometría"],
                            temas: {
                                "álgebra": ["Expresiones Algebraicas", "Inecuaciones"],
                                "geometría": ["Teorema de Pitágoras", "Transformaciones Geométricas"],
                                "trigonometría": ["Razones Trigonométricas", "Aplicaciones en Triángulos Rectángulos"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Literatura", "Producción de Textos"],
                            temas: {
                                "comprensión lectora": ["Textos Narrativos Complejos", "Análisis de Poemas"],
                                "gramática": ["Subordinación y Coordinación", "Uso de Verbos en Subjuntivo"],
                                "ortografía": ["Ortografía de Palabras Extranjeras", "Uso Correcto de Mayúsculas"],
                                "literatura": ["Novela Contemporánea", "Análisis Literario"],
                                "producción de textos": ["Escritura de Relatos", "Producción de Ensayos"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia Moderna", "Colonización y Revolución"],
                                "geografía": ["Geografía Económica", "Impacto Ambiental"],
                                "formación ética y ciudadana": ["Derechos Humanos", "Participación Ciudadana"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química"],
                            temas: {
                                "biología": ["Evolución y Diversidad", "Sistema Inmunológico"],
                                "física": ["Ondas y Sonido", "Termodinámica"],
                                "química": ["Química Inorgánica", "Estados de la Materia"]
                            }
                        },
                        tecnología: {
                            disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                            temas: {
                                "informática": ["Programación Avanzada", "Desarrollo de Aplicaciones"],
                                "robótica": ["Robots Autónomos", "Inteligencia Artificial Básica"],
                                "tecnología aplicada": ["Proyectos Tecnológicos Complejos", "Sistemas Integrados"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                            temas: {
                                "artes visuales": ["Técnicas de Acuarela", "Diseño Gráfico Básico"],
                                "música": ["Teoría Musical Básica", "Armonía Vocal"],
                                "teatro": ["Creación de Guiones", "Dirección de Escenas"],
                                "danza": ["Coreografía Simple", "Expresión a Través del Movimiento"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Voleibol Básico", "Carreras de Resistencia"],
                                "juegos recreativos": ["Juegos de Agilidad", "Juegos Tradicionales"],
                                "educación para la salud": ["Prevención de Lesiones", "Relajación y Estrés"]
                            }
                        }
                    }
                }
            }
        },
        ciclo_orientado: {
            grados: {
                4: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Álgebra", "Geometría Analítica", "Estadística y Probabilidad"],
                            temas: {
                                "álgebra": ["Funciones y Gráficas", "Polinomios"],
                                "geometría analítica": ["Recta y Circunferencia", "Geometría del Espacio"],
                                "estadística y probabilidad": ["Regresión y Correlación", "Distribuciones de Probabilidad"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Literatura", "Producción de Textos"],
                            temas: {
                                "comprensión lectora": ["Textos Científicos y Académicos", "Análisis de Artículos"],
                                "gramática": ["Sintaxis Compleja", "Subjuntivo y Condicional"],
                                "ortografía": ["Normas de Redacción Académica", "Ortografía de Palabras Técnicas"],
                                "literatura": ["Literatura Clásica", "Teoría Literaria"],
                                "producción de textos": ["Escritura de Informes", "Redacción de Artículos Científicos"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia Contemporánea", "Guerras Mundiales"],
                                "geografía": ["Geografía Política", "Fronteras y Conflictos"],
                                "formación ética y ciudadana": ["Diversidad Cultural", "Derechos de las Minorías"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química"],
                            temas: {
                                "biología": ["Genética Molecular", "Sistemas del Cuerpo Humano"],
                                "física": ["Mecánica Cuántica", "Relatividad"],
                                "química": ["Reacciones Redox", "Química Nuclear"]
                            }
                        },
                        tecnología: {
                            disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                            temas: {
                                "informática": ["Ciberseguridad", "Gestión de Redes"],
                                "robótica": ["Programación de Robots Avanzados", "Aplicaciones en la Industria"],
                                "tecnología aplicada": ["Desarrollo de Software Empresarial", "Innovación en Tecnología"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                            temas: {
                                "artes visuales": ["Pintura en Gran Formato", "Escultura en Yeso"],
                                "música": ["Composición Musical", "Interpretación de Canciones"],
                                "teatro": ["Producción Teatral Completa", "Análisis de Textos Teatrales"],
                                "danza": ["Danza Contemporánea", "Improvisación en Danza"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Introducción al Rugby", "Gimnasia Artística"],
                                "juegos recreativos": ["Juegos de Equipo", "Juegos de Reto"],
                                "educación para la salud": ["Prevención de Lesiones", "Nutrición y Deporte"]
                            }
                        }
                    }
                },
                5: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Álgebra", "Cálculo", "Estadística y Probabilidad"],
                            temas: {
                                "álgebra": ["Matrices y Determinantes", "Vectores"],
                                "cálculo": ["Derivadas e Integrales", "Límites y Continuidad"],
                                "estadística y probabilidad": ["Inferencia Estadística", "Análisis de Varianza"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Literatura", "Producción de Textos"],
                            temas: {
                                "comprensión lectora": ["Lectura Crítica de Textos Académicos", "Análisis de Ensayos"],
                                "gramática": ["Verbos Complejos", "Construcción de Frases Complejas"],
                                "ortografía": ["Ortografía de Palabras Científicas", "Normas de Citas"],
                                "literatura": ["Poesía Contemporánea", "Literatura del Siglo XX"],
                                "producción de textos": ["Escritura de Artículos Científicos", "Redacción Académica"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia Argentina Reciente", "Dictadura y Democracia"],
                                "geografía": ["Globalización", "Migraciones y Población"],
                                "formación ética y ciudadana": ["Ética y Moral", "Valores en la Sociedad"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química"],
                            temas: {
                                "biología": ["Microbiología", "Biotecnología"],
                                "física": ["Física Moderna", "Aplicaciones Tecnológicas"],
                                "química": ["Química de Materiales", "Ingeniería Química"]
                            }
                        },
                        tecnología: {
                            disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                            temas: {
                                "informática": ["Desarrollo Web y Móvil", "Administración de Bases de Datos"],
                                "robótica": ["Competencias de Robótica", "Proyectos de Robótica Educativa"],
                                "tecnología aplicada": ["Tecnologías Emergentes", "Realidad Virtual y Aumentada"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                            temas: {
                                "artes visuales": ["Diseño Gráfico Avanzado", "Fotografía Digital"],
                                "música": ["Composición y Arreglo Avanzado", "Historia de la Música Universal"],
                                "teatro": ["Dirección Teatral", "Producción de Obras Complejas"],
                                "danza": ["Danza Clásica", "Improvisación en Danza"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Entrenamiento Deportivo Avanzado", "Natación Competitiva"],
                                "juegos recreativos": ["Juegos de Estrategia", "Actividades al Aire Libre"],
                                "educación para la salud": ["Entrenamiento Personalizado", "Planificación de Ejercicio"]
                            }
                        }
                    }
                },
                6: {
                    areas: {
                        matematicas: {
                            disciplinas: ["Cálculo", "Álgebra Avanzada", "Estadística Aplicada"],
                            temas: {
                                "cálculo": ["Cálculo Diferencial", "Cálculo Integral"],
                                "álgebra avanzada": ["Números Complejos", "Teoría de Grupos"],
                                "estadística aplicada": ["Modelos Estadísticos", "Análisis Multivariante"]
                            }
                        },
                        lengua: {
                            disciplinas: ["Comprensión Lectora", "Gramática", "Ortografía", "Literatura", "Producción de Textos"],
                            temas: {
                                "comprensión lectora": ["Interpretación de Textos Científicos", "Análisis de Tesis"],
                                "gramática": ["Construcción de Argumentos", "Expresiones Idiomáticas"],
                                "ortografía": ["Normas de Redacción Científica", "Ortografía de Términos Específicos"],
                                "literatura": ["Teoría Literaria Avanzada", "Análisis de Textos Literarios Contemporáneos"],
                                "producción de textos": ["Redacción de Tesis", "Escritura de Artículos Académicos"]
                            }
                        },
                        ciencias_sociales: {
                            disciplinas: ["Historia", "Geografía", "Formación Ética y Ciudadana"],
                            temas: {
                                "historia": ["Historia Mundial del Siglo XXI", "Conflictos Actuales"],
                                "geografía": ["Geopolítica", "Economía Internacional"],
                                "formación ética y ciudadana": ["Derechos de los Pueblos Indígenas", "Participación Política"]
                            }
                        },
                        ciencias_naturales: {
                            disciplinas: ["Biología", "Física", "Química"],
                            temas: {
                                "biología": ["Ecología Avanzada", "Biología Celular"],
                                "física": ["Física de Partículas", "Astrofísica"],
                                "química": ["Química Ambiental", "Química Industrial"]
                            }
                        },
                        tecnología: {
                            disciplinas: ["Informática", "Robótica", "Tecnología Aplicada"],
                            temas: {
                                "informática": ["Inteligencia Artificial", "Big Data y Análisis"],
                                "robótica": ["Desarrollo de Robots Industriales", "Proyectos de Robótica Autónoma"],
                                "tecnología aplicada": ["Desarrollo de Tecnologías de Innovación", "Emprendimientos Tecnológicos"]
                            }
                        },
                        educación_artística: {
                            disciplinas: ["Artes Visuales", "Música", "Teatro", "Danza"],
                            temas: {
                                "artes visuales": ["Arte Contemporáneo", "Proyectos de Arte Urbano"],
                                "música": ["Producción Musical", "Teoría de la Música Avanzada"],
                                "teatro": ["Dramaturgia", "Técnicas de Actuación Avanzadas"],
                                "danza": ["Danza Experimental", "Performance en Danza"]
                            }
                        },
                        educación_física: {
                            disciplinas: ["Deportes", "Juegos Recreativos", "Educación para la Salud"],
                            temas: {
                                "deportes": ["Entrenamiento Deportivo Profesional", "Deportes de Aventura"],
                                "juegos recreativos": ["Actividades en la Naturaleza", "Entrenamiento Funcional"],
                                "educación para la salud": ["Planes de Entrenamiento Avanzado", "Nutrición Deportiva"]
                            }
                        }
                    }
                }
            }
        }
    }
};