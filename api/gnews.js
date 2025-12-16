
export default async function fetchNews(req, res) {
    const apiKey = process.env.GNEWS_API_KEY;
    const { query } = req.query;


    const url = `https://gnews.io/api/v4/top-headlines?topic=science&q=${query}&lang=en&max=10&token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error : "Error fetching news"})
    }
}