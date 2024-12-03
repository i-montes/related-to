import { prisma } from "@/utils/prisma";
import { getMetadata } from "./get-metadata";
import { getEntidades } from "./get-entities";
import { getEvents } from "./get-events";

export async function processNews() {
  const news = await prisma.news.findMany({
    take: 1,
  });

  for (const item of news) {
    // const metadata = await getMetadata(item);
    // const entidades = await getEntidades(item.processed_content);
    const events = await getEvents(item.processed_content);


    
    console.log(events);
  }
}
