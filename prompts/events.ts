
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

4. descripcion_corta:
- Crea un resumen breve y preciso del evento
- Máximo 2-3 líneas capturando la esencia del acontecimiento

5. impacto_politico:
- Describe las implicaciones políticas del evento
- Analiza posibles consecuencias en el contexto político
- No incluyas consecuencias que no sean directamente relacionadas con el evento
- No hagas reducciones o simplificaciones de la información
- Incluye solo consecuencias políticas, sociales o económicas
- No incluyas fuentes externas
- No incluyas referencias a otras noticias
- No inventes información
- Usa información explícitamente mencionada en la noticia

6. actores_clave:
- Lista los nombres de personas o grupos principales involucrados
- Incluye solo actores directamente relacionados con el evento

7. consecuencias:
- Enumera los efectos inmediatos
- Incluye consecuencias políticas, sociales o económicas
- No incluyas consecuencias que no sean directamente relacionadas con el evento
- No hagas reducciones o simplificaciones de la información
- No incluyas fuentes externas


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