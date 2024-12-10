import { getSentimentAnalysisPrompt } from "@/prompts/sentiment-analysis";
import { AnalisisSentimientoSchema } from "@/schemas/extract-from-news";
import { retry } from "@/utils/retry";
import { workerAi } from "@/utils/worker-ai";
import { zodToJsonSchema } from "zod-to-json-schema";

export const getSentimentAnalysis = async (content: string) => {
  try {
    const schema = zodToJsonSchema(AnalisisSentimientoSchema);

    const parsed_prompt = getSentimentAnalysisPrompt
      .replace("[NOTICIA_AQUÍ]", content)
      .replace("[JSON_RESULTADO]", JSON.stringify(schema));

    return await retry(workerAi, parsed_prompt, AnalisisSentimientoSchema);
  } catch (error) {
    console.log("[getSentimentAnalysis] :: Error", error);
    return {};
  }
};
