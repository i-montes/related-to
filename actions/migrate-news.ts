import saved_news from "@/data/news.json";
import { batchListReduce } from "@/utils/batches-reduce";
import { prisma } from "@/utils/prisma";

export async function migrateNews() {
  const batches = batchListReduce(saved_news as any);

  for (const batch of batches) {
    console.log(`Migrating batch ${batch.length}`);
    await prisma.news.createMany({
      data: batch as any,
    });
  }
}
