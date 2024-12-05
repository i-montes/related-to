import { getMainTopicPrompt } from "@/prompts/main-topic";
import { TemaPrincipalSchema } from "@/schemas/extract-from-news";
import { retry } from "@/utils/retry";
import { workerAi } from "@/utils/worker-ai";
import zodToJsonSchema from "zod-to-json-schema";

export async function getMainTopic(content: string) {
  const schema = zodToJsonSchema(TemaPrincipalSchema);

  const parsed_prompt = getMainTopicPrompt
    .replace("[NOTICIA_AQUÍ]", content)
    .replace("[JSON_RESULTADO]", JSON.stringify(schema));

  return await retry(workerAi, parsed_prompt, TemaPrincipalSchema);
}
