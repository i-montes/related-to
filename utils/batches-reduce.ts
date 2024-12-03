export function batchListReduce<T>(list: T[], batchSize: number = 1000): T[][] {
  return list.reduce((batches, item, index) => {
    const batchIndex = Math.floor(index / batchSize);
    if (!batches[batchIndex]) {
      batches[batchIndex] = [];
    }
    batches[batchIndex].push(item);
    return batches;
  }, [] as T[][]);
}
