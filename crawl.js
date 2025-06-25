import { JSDOM } from "jsdom";

export async function crawlPage(currentURL) {
  console.log(`Actively crawling: ${currentURL}`);
  try {
    const resp = await fetch(currentURL);
    if (resp.status > 399) {
      console.log(
        `Error in fetch: responsed with status code of ${resp.status}, on page: ${currentURL}`
      );
      return;
    }

    const contentType = resp.headers.get("content-type");
    if (!contentType.includes("text/html")) {
      console.log(
        `Error in fetch: responsed with a content-type of ${contentType}, on page: ${currentURL}`
      );
      return;
    }

    console.log(await resp.text());
  } catch (error) {
    console.log(`Error in fetch: ${error.message}, on page: ${currentURL}`);
  }
}

export function getURLsfromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  for (const linkElement of linkElements) {
    if (linkElement.href.slice(0, 1) === "/") {
      try {
        const urlObj = new URL(`${baseURL}${linkElement.href}`);
        urls.push(urlObj.href);
        break;
      } catch (error) {
        console.log(`Error with relative URL: ${error.message}`);
      }
    }
    try {
      const urlObj = new URL(linkElement.href);
      urls.push(urlObj.href);
    } catch (error) {
      console.log(`Error with absolute URL: ${error.message}`);
    }
  }

  return urls;
}

export function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  const normalized = `${urlObj.hostname}${urlObj.pathname}`;
  if (normalized.length > 0 && normalized.slice(-1) === "/") {
    return normalized.slice(0, -1);
  }
  return normalized;
}
