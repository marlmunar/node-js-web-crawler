export function printReport(pages, baseURL) {
  console.log("=======================================================");
  console.log(`REPORT FOR ${baseURL}`);
  console.log("=======================================================");

  const sortedPages = sortPages(pages);
  for (const sortedPage of sortedPages) {
    const url = sortedPage[0];
    const hits = sortedPage[1];

    console.log(`Found ${hits} links to page: ${url}`);
  }
  console.log("=======================================================");
  console.log("END OF REPORT");
  console.log("=======================================================");
}

export function sortPages(pages) {
  const pagesArr = Object.entries(pages);
  pagesArr.sort((a, b) => {
    const aHits = a[1];
    const bHits = b[1];

    return bHits - aHits;
  });
  return pagesArr;
}
