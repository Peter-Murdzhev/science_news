import { checkLocalCache, saveToCache } from './cache';

export async function fetchNews({ request, params }) {
    const apiUrl = import.meta.env.VITE_API_KEY;
    
    const url = new URL(request.url);
    const query = url.searchParams.get("query") || "";

    const cachedKey = `${params.index}_${query}`;
    const cached = checkLocalCache(cachedKey);
    if(cached){
        return cached;
    }

    const response = await fetch(`https://gnews.io/api/v4/top-headlines?topic=science&q=${query}&lang=en&max=10&token=${apiUrl}`)

    if(!response.ok){
        throw new Error("News not found");
    }

    const data = await response.json();
    saveToCache(cachedKey, data);
    
    return data;
}
