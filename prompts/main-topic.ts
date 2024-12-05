
export const getMainTopicPrompt = `
Analiza la noticia proporcionada y extrae información para completar el siguiente esquema JSON. Sigue estas instrucciones:

1. Tema:
- Identifica el tema central de la noticia
- Debe ser un título conciso que capture la esencia del contenido

2. descripcion:
- Crea un resumen del evento sin omitir información relevante

3. Perspectivas Principales:
- Extrae los puntos de vista o argumentos más relevantes
- Incluye diferentes ángulos o interpretaciones del tema
- Prioriza perspectivas explícitamente mencionadas en la noticia


Reglas:
- No inventes información
- Si un campo no tiene datos, déjalo como string vacío o array vacío
- Sé objetivo y preciso
- Usa información explícitamente mencionada en la noticia
- No utilices adjetivos ni otros modificadores de lenguaje. 
- Utiliza un lenguaje simple y claro. 
- No uses puntos suspensivos. 
- No incluyas referencias a otras noticias.
- Tu respuesta debe ser un JSON válido. No uses comentarios en tu respuesta. 


Noticia:
[NOTICIA_AQUÍ]

JSON resultante:
[JSON_RESULTADO]
`