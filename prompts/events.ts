
export const getEventsEventsPrompt = `
Analiza la noticia proporcionada y extrae información para completar el siguiente esquema JSON. Sigue estas instrucciones:

1. nombre:
- Identifica el nombre o título principal del evento
- Debe ser un título conciso y descriptivo

2. fecha:
- Extrae la fecha específica del evento si está mencionada
- Formato preferido: YYYY o texto descriptivo claro

3. ubicacion:
- Registra el lugar geográfico donde ocurrió el evento
- Incluye ciudad, región o país si está disponible

4. descripcion:
- Crea un resumen preciso del evento
- Se conciso

6. actores_clave_en_el_evento:
- Lista los nombres de personas o grupos principales involucrados
- Incluye solo actores directamente relacionados con el evento


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
- Extrae todos los eventos principales de la noticia


Noticia:
[NOTICIA_AQUÍ]

Array resultante:
[JSON_RESULTADO]
`