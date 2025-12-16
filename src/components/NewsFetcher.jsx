import { checkLocalCache, saveToCache } from './cache';

export async function fetchNews({ request, params }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query") || "";

    const cachedKey = `${params.index}_${query}`;
    const cached = checkLocalCache(cachedKey);
    if(cached){
        return cached;
    }

    const news = await fetch(`/api/gnews?query=${query}`);
    const data = await news.json();

    saveToCache(cachedKey, data);
    return data;
}
