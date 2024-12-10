export const getRelatedToPrompt = `
Extracción detallada de relaciones mencionadas en el texto.

1. from:
- El nombre de la entidad principal en la relación
- este nombre siempre sera el mismo en cada "from" del item dentro del array

2. to:
- Nombre exacto de la entidad relacionada
- Escribe el nombre exacto de la entidad relacionada
- Si existen acronimos, escribe el nombre completo y al final del texto escribe el acronimo

3. type:
- Categoría de la relación
- Escribe la categoría de la relación
- las categorías son:
  * personal
  * profesional
  * institutional
  * legal
  * economico
  * otro
- Si no se encuentra una categoría, escribe "otro"

4. description:
- Segun el contexto de la noticia, escribe una descripción detallada de la relación.
- Incluye detalles específicos, evidencia textual y información temporal o cuantitativa relevante.
- Solo debes citar partes del texto que juztifiquen la relacion asignada
- Si no hay información relevante, deja el campo vacío "".
- Escribe el texto exacto que aparezca en el texto original.
- No incluyas textos que no aparezcan en el texto original.
- No incluyas textos que no sean relevantes para la relación.

5. properties:
- Contexto detallado de la relación
- Escribe contexto detallado de la relación.
- Incluye detalles específicos, evidencia textual y información temporal o cuantitativa relevante.
- ejemplos de datos: start_date, end_date, location, context, hiperlinks, etc.
- Las fechas deben estar en formato ISO 8601 (YYYY-MM-DD)
- Deberas definir el "label" y el "value" de cada dato.
- Si no hay información relevante, deja el campo vacío [].

Reglas:
- Si no hay relaciones, devolver un array vacío [].
- Ser exhaustivo pero preciso
- Priorizar relaciones explícitamente mencionadas en el texto

Noticia:
Fecha de publicación: [FECHA_DE_PUBLIACIÓN]
[NOTICIA_AQUÍ]

Array resultante:
[JSON_RESULTADO]
`