import yargs from "yargs-parser";
import { processNews } from "./actions/process-news";

const rawArgs = Bun.argv.slice(2);
const args = yargs(rawArgs);

if (args.help || args.h || Object.keys(args).length === 1) {
  console.log("apu [options]");
  console.log("options:");
  console.log("  --help, -h     Show this help message and exit.");
  console.log("  --version, -v  Show version number and exit.");
  console.log("  --process, -p  Process the news.");
  process.exit(0);
}

if (args.version || args.v) {
  console.log("0.0.1");
  process.exit(0);
}

if (args.process || args.p) {
  await processNews();
  process.exit(0);
}

