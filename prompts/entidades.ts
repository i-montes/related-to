
export const getEntidadesEntidadesPrompt = `
Tu tarea es analizar la siguiente noticia y extraer meticulosamente la información solicitada, completando el JSON estructurado proporcionado. Sigue estas instrucciones:

1. Identifica y completa TODAS las secciones del JSON con información precisa y verificable de la noticia.

2. Instrucciones específicas para la sección:
- Incluye nombres completos de personas mencionadas, organizaciones y partidos políticos mencionados.
- Especifica sus cargos actuales o relevantes en el contexto de la noticia
- Determina su afiliación política si está clara
- Define su rol específico en el evento o noticia

3. Sé lo más exhaustivo y preciso posible.

4. Si no encuentras información para algún campo, déjalo como un string vacío "".

5. No inventes información. Solo usa datos presentes en la noticia.

6. No utilices adjetivos ni otros modificadores de lenguaje. Utiliza un lenguaje simple y claro. No uses puntos suspensivos. No incluyas referencias a otras noticias.

7. Tu respuesta debe ser un JSON válido. No uses comentarios.

Noticia:
[NOTICIA_AQUÍ]

JSON resultante:
[JSON_RESULTADO]
`