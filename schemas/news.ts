import z from "zod";

export const NewsSchema = z.object({
  id: z.string(),
  title: z.string(),
  processed_content: z.string(),
  published_date: z.string(),
  source_name: z.string(),
  url: z.string(),
});
