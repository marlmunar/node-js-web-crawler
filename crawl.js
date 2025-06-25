export default function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  const normalized = `${urlObj.hostname}${urlObj.pathname}`;
  if (normalized.length > 0 && normalized.slice(-1) === "/") {
    return normalized.slice(0, -1);
  }
  return normalized;
}
