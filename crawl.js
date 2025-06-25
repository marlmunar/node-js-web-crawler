import { JSDOM } from "jsdom";
export function getURLsfromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  for (const linkElement of linkElements) {
    if (linkElement.href.slice(0, 1) === "/") {
      urls.push(`${baseURL}${linkElement.href}`);
      break;
    }
    urls.push(linkElement.href);
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
