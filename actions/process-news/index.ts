import { prisma } from "@/utils/prisma";
import { getMetadata } from "./get-metadata";
import { getEntidades } from "./get-entities";
import { getEvents } from "./get-events";
import { getMainTopic } from "./get-main-topic";
import { getSources } from "./get-sources";
import { getSentimentAnalysis } from "./get-sentiment–analysis";
import { getKeywords } from "./get-keywords";
import { getRelatedTo } from "./get-related-to";

export async function processNews() {
  const news = await prisma.news.findMany({
    take: 1,
  });

  for (const item of news) {
    const start_time = Date.now();
    const metadata = await getMetadata(item);
    const entidades = await getEntidades(item.processed_content);
    const events = await getEvents(item.processed_content);
    const mainTopic = await getMainTopic(item.processed_content);
    // const sources = await getSources(item.processed_content);
    const sentiment = await getSentimentAnalysis(item.processed_content);
    const keywords = await getKeywords(item.processed_content);
    const relatedTo = await getRelatedTo(
      item.processed_content,
      item.published_date
    );

    const result = {
      metadata,
      entidades,
      eventos_principales: events,
      temas_principales: mainTopic,
      analisis_sentimiento: sentiment,
      palabras_clave: keywords,
      relaciones: relatedTo,
    };

    await Bun.write("related-to.json", JSON.stringify(result, null, 2));

    const end_time = Date.now();

    console.log(
      `\nProcessing ${item.title} took ${
        ((end_time - start_time) / 1000 / 60).toFixed(2)
      } minutes \n`
    );
    // console.log(relatedTo);
  }
}
