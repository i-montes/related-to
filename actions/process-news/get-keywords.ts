import { getKeywordsPrompt } from "@/prompts/keywords";
import { retry } from "@/utils/retry";
import { workerAi } from "@/utils/worker-ai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export const getKeywords = async (content: string) => {
  const keywordsSchema = z.array(z.string());
  const schema = zodToJsonSchema(keywordsSchema);

  const parsed_prompt = getKeywordsPrompt
    .replace("[NOTICIA_AQUÍ]", content)
    .replace("[JSON_RESULTADO]", JSON.stringify(schema));

  return await retry(workerAi, parsed_prompt, keywordsSchema);
};

