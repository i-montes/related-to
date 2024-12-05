import { z } from "zod";

// Metadata Schema
export const MetadataSchema = z.object({
  titulo: z.string(),
  fecha_publicacion: z.date(),
  fuente: z.string(),
  autor: z
    .object({
      id: z.string(),
      name: z.string(),
      twitter_misc: z.string().optional(),
    })
    .optional()
    .nullable(),
  url: z.string().url(),
});
export type MetadataType = z.infer<typeof MetadataSchema>;

// Persona Schema
export const EntidadesSchema = z.array(
  z.object({
    nombre: z.string(),
    tipo: z.enum(["persona", "organizacion", "partido politico"]),
    cargo: z.string().optional(),
    afiliacion_politica: z.string().optional(),
    rol_en_evento: z.string().optional(),
  })
);

export type Entidades = z.infer<typeof EntidadesSchema>;

// Evento Principal Schema
export const EventoPrincipalSchema = z.array(
  z.object({
    nombre: z.string(),
    fecha: z.string().optional(),
    ubicacion: z.string().optional(),
    descripcion: z.string().optional(),
    actores_clave_en_el_evento: z.array(z.string()).optional(),
  })
);
export type EventoPrincipal = z.infer<typeof EventoPrincipalSchema>;

// Tema Principal Schema - Confirmacion del evento principal
export const TemaPrincipalSchema = z.array(
  z.object({
    tema: z.string(),
    descripcion: z.string().optional(),
    perspectivas_principales: z.array(z.string()).optional(),
  })
);
export type TemaPrincipal = z.infer<typeof TemaPrincipalSchema>;

// Fuente Citada Schema
export const FuenteCitadaSchema = z.array(
  z.object({
    nombre: z.string(),
    tipo: z.string().optional(),
    credibilidad: z.string().optional(),
  })
);
export type FuenteCitada = z.infer<typeof FuenteCitadaSchema>;

// Análisis de Sentimiento Schema
export const AnalisisSentimientoSchema = z.object({
  tono_general: z.string().optional(),
  polarizacion: z.string().optional(),
  emociones_predominantes: z.array(z.string()).optional(),
});
export type AnalisisSentimiento = z.infer<typeof AnalisisSentimientoSchema>;

export const RelatedToSchema = z.array(z.object({
  from: z.string(),
  to: z.string(),
  type: z.string(),
  description: z.string(),
  properties: z.intersection(z.object({}), z.any()),
}));
export type RelatedTo = z.infer<typeof RelatedToSchema>;

// Schema Principal
export const PoliticalArticleSchema = z.object({
  metadata: MetadataSchema,
  entidades: EntidadesSchema,
  eventos_principales: EventoPrincipalSchema,
  temas_principales: TemaPrincipalSchema,
  fuentes_citadas: FuenteCitadaSchema,
  analisis_sentimiento: AnalisisSentimientoSchema,
  palabras_clave: z.array(z.string()),
});
export type PoliticalArticle = z.infer<typeof PoliticalArticleSchema>;
