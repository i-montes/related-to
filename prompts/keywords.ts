
export const getKeywordsPrompt = `
Extracción de Palabras Clave:

Instrucciones:
- Identifica términos más significativos de la noticia
- Prioriza palabras que capturan:
  * Tema principal
  * Actores clave
  * Conceptos centrales
  * Términos específicos del contexto

Criterios de Selección:
- Frecuencia en el texto
- Relevancia contextual
- Importancia para comprensión
- Términos únicos o distintivos

Formato de Extracción:
- Lista de palabras clave
- Máximo 10-15 palabras
- Ordenadas por relevancia
- Sin repeticiones

Tipos de Palabras Clave:
- Nombres propios
- Eventos
- Conceptos políticos
- Lugares
- Términos técnicos específicos

Reglas:
- No inventar palabras
- Usar solo términos del texto
- Ser objetivo y preciso
- Tu respuesta debe ser una lista de palabras clave: string[]
- responde en formato JSON
- tu respuesta es un array de strings

Noticia:
[NOTICIA_AQUÍ]

JSON resultante:
[JSON_RESULTADO]
`