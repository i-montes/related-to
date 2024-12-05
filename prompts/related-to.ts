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

5. properties:
- Contexto detallado de la relación
- Escribe contexto detallado de la relación.
- Incluye detalles específicos, evidencia textual y información temporal o cuantitativa relevante.


Reglas:
- Si no hay relaciones, devolver un array vacío [].
- Ser exhaustivo pero preciso
- Priorizar relaciones explícitamente mencionadas en el texto

Noticia:
[NOTICIA_AQUÍ]

Array resultante:
[JSON_RESULTADO]
`