
export const getSourcesPrompt = `
Analiza la noticia y extrae información de las fuentes citadas:

1. nombre:
- Registra el nombre completo de la fuente
- Puede ser persona, organización o institución

2. tipo:
- Clasifica la fuente según categorías como:
  * Testigo directo
  * Funcionario público
  * Experto académico
  * Representante oficial
  * Vocero institucional
  * Investigador
  * Fuente anónima
  * Otro medio
  * Fuente no identificada

3. credibilidad:
Para evaluar la credibilidad, usa los siguientes criterios objetivos:


Metodología de Evaluación de Credibilidad:
- Alto: Fuente oficial, verificada, con pruebas directas
- Medio: Fuente con experiencia pero sin pruebas directas
- Bajo: Fuente indirecta, sin verificación clara
- Especulativo: Información no confirmada

Factores de Evaluación:
- Proximidad al evento
- Historial de precisión
- Cargo o experiencia
- Evidencia presentada
- Consistencia con otras fuentes

Reglas:
- No inventes información
- Sé objetivo en la evaluación
- Usa solo información de la noticia

Noticia:
[NOTICIA_AQUÍ]

JSON resultante:
[JSON_RESULTADO]
`