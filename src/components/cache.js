const newsCache = {};

export function checkLocalCache(id) {
  return newsCache[id] || null;
}

export function saveToCache(id, newsItem) {
  newsCache[id] = newsItem;
}