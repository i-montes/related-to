import { z } from 'zod';

// Metadata Schema
export const MetadataSchema = z.object({
    titulo: z.string(),
    fecha_publicacion: z.date(),
    fuente: z.string(),
    autor: z.object({
        id: z.string(),
        name: z.string(),
        twitter_misc: z.string().optional()
    }).optional().nullable(),
    url: z.string().url()
});
export type MetadataType = z.infer<typeof MetadataSchema>;

// Persona Schema
export const EntidadesSchema = z.array(z.object({
    nombre: z.string(),
    tipo: z.enum(["persona", "organizacion", "partido politico"]),
    cargo: z.string().optional(),
    afiliacion_politica: z.string().optional(),
    rol_en_evento: z.string().optional()
}));

export type Entidades = z.infer<typeof EntidadesSchema>;

// Evento Principal Schema
export const EventoPrincipalSchema = z.object({
    nombre: z.string(),
    fecha: z.string().optional(),
    ubicacion: z.string().optional(),
    descripcion_corta: z.string().optional(),
    impacto_politico: z.string().optional(),
    actores_clave: z.array(z.string()).optional(),
    consecuencias: z.array(z.string()).optional()
});
export type EventoPrincipal = z.infer<typeof EventoPrincipalSchema>;

// Tema Principal Schema
export const TemaPrincipalSchema = z.object({
    tema: z.string(),
    descripcion: z.string().optional(),
    perspectivas_principales: z.array(z.string()).optional()
});
export type TemaPrincipal = z.infer<typeof TemaPrincipalSchema>;

// Fuente Citada Schema
export const FuenteCitadaSchema = z.object({
    nombre: z.string(),
    tipo: z.string().optional(),
    credibilidad: z.string().optional()
});
export type FuenteCitada = z.infer<typeof FuenteCitadaSchema>;

// Análisis de Sentimiento Schema
export const AnalisisSentimientoSchema = z.object({
    tono_general: z.string().optional(),
    polarizacion: z.string().optional(),
    emociones_predominantes: z.array(z.string()).optional()
});
export type AnalisisSentimiento = z.infer<typeof AnalisisSentimientoSchema>;

// Schema Principal
export const PoliticalArticleSchema = z.object({
    metadata: MetadataSchema,
    entidades: EntidadesSchema,
    eventos_principales: z.array(EventoPrincipalSchema),
    temas_principales: z.array(TemaPrincipalSchema),
    fuentes_citadas: z.array(FuenteCitadaSchema),
    analisis_sentimiento: AnalisisSentimientoSchema,
    palabras_clave: z.array(z.string())
});
export type PoliticalArticle = z.infer<typeof PoliticalArticleSchema>;
