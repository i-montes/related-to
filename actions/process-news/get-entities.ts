import { getEntidadesEntidadesPrompt } from "@/prompts/entidades";
import { EntidadesSchema } from "@/schemas/extract-from-news";
import { retry } from "@/utils/retry";
import { workerAi } from "@/utils/worker-ai";
import { zodToJsonSchema } from "zod-to-json-schema";

export const getEntidades = async (content: string) => {
  try {
    const schema = zodToJsonSchema(EntidadesSchema);

    const parsed_prompt = getEntidadesEntidadesPrompt
      .replace("[NOTICIA_AQUÍ]", content)
      .replace("[JSON_RESULTADO]", JSON.stringify(schema));

    return await retry(workerAi, parsed_prompt, EntidadesSchema);
  } catch (error) {
    console.log("[getEntidades] :: Error", error);
    return [];
  }
};
