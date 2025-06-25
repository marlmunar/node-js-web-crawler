import { crawlPage } from "./crawl.js";

async function main() {
  if (process.argv.length < 3) {
    console.log("No website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("App launched with too many arguments");
    process.exit(1);
  }
  const baseURL = process.argv[2];

  try {
    const baseURLObj = new URL(baseURL);
    if (!["http:", "https:"].includes(baseURLObj.protocol)) {
      throw error;
    }
  } catch (error) {
    console.log("Invalid URL was provided");
    process.exit(1);
  }

  console.log(`Starting crawl of ${baseURL}`);
  const pages = await crawlPage(baseURL, baseURL, {});

  for (const page of Object.entries(pages)) {
    console.log(page);
  }
}

main();
