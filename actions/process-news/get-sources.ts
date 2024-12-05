import { getSourcesPrompt } from "@/prompts/sources";
import { FuenteCitadaSchema } from "@/schemas/extract-from-news";
import { retry } from "@/utils/retry";
import { workerAi } from "@/utils/worker-ai";
import zodToJsonSchema from "zod-to-json-schema";

export async function getSources(content: string) {
  const schema = zodToJsonSchema(FuenteCitadaSchema);

  const parsed_prompt = getSourcesPrompt
    .replace("[NOTICIA_AQUÍ]", content)
    .replace("[JSON_RESULTADO]", JSON.stringify(schema));

  return await retry(workerAi, parsed_prompt, FuenteCitadaSchema);
}
