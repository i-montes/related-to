import { getEventsEventsPrompt } from "@/prompts/events";
import { EventoPrincipalSchema } from "@/schemas/extract-from-news";
import { retry } from "@/utils/retry";
import { workerAi } from "@/utils/worker-ai";
import zodToJsonSchema from "zod-to-json-schema";

export async function getEvents(content: string) {
  const schema = zodToJsonSchema(EventoPrincipalSchema);

  const parsed_prompt = getEventsEventsPrompt
    .replace("[NOTICIA_AQUÍ]", content)
    .replace("[JSON_RESULTADO]", JSON.stringify(schema));

  return await retry(workerAi, parsed_prompt, EventoPrincipalSchema);
}
