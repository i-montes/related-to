
export const getSentimentAnalysisPrompt = `
Analiza el tono y sentimiento de la noticia:

1. tono_general:
- Identifica el tono emocional predominante
- Categorías posibles:
  * Objetivo
  * Crítico
  * Positivo
  * Negativo
  * Neutral
  * Indignado
  * Esperanzador

2. polarizacion:
- Evalúa el nivel de división o confrontación
- Niveles:
  * Bajo
  * Medio
  * Alto
  * Extremo

3. emociones_predominantes:
- Extrae emociones clave transmitidas
- Ejemplos:
  * Frustración
  * Esperanza
  * Enojo
  * Preocupación
  * Optimismo
  * Decepción

Reglas:
- Usa solo información explícita
- Sé objetivo
- No inventes emociones
- Basa análisis en lenguaje y contexto

Noticia:
[NOTICIA_AQUÍ]

JSON resultante:
[JSON_RESULTADO]
`