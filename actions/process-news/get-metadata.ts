import type { MetadataType } from "@/schemas/extract-from-news";
import { getMetadataFromWp } from "@/utils/get-metadata-from-wp";
import type { news } from "@prisma/client";

export const getMetadata = async (item: news) => {
  const parts = item.url.split("/");
  const slug = parts[parts.length - 1] || parts[parts.length - 2];

  const fromWp = await getMetadataFromWp(slug);
  const metadata: MetadataType = {
    titulo: item.title,
    fecha_publicacion: item.published_date,
    fuente: item.source_name,
    autor: fromWp,
    url: item.url,
  };

  return metadata;
};
