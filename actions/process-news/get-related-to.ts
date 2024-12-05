import { getRelatedToPrompt } from "@/prompts/related-to";
import { RelatedToSchema } from "@/schemas/extract-from-news";
import { retry } from "@/utils/retry";
import { workerAi } from "@/utils/worker-ai";
import zodToJsonSchema from "zod-to-json-schema";

export async function getRelatedTo(content: string) {
  const schema = zodToJsonSchema(RelatedToSchema);

  const parsed_prompt = getRelatedToPrompt
    .replace("[NOTICIA_AQUÍ]", content)
    .replace("[JSON_RESULTADO]", JSON.stringify(schema));

  return await retry(workerAi, parsed_prompt, RelatedToSchema);
}
