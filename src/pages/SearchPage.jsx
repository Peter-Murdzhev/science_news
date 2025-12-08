import { useLoaderData } from 'react-router-dom'
import NewsCard from '../components/NewsCard';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const news = useLoaderData().articles;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("query");

    return (
        <>
            <h2 style={{textAlign: "center"}}>Results for: {searchTerm}</h2>
            {news.length > 0 ?
                news.map((currentNews, index) => (<NewsCard key={index} currentNews={currentNews} index={index} />))
                : <h3 style={{ textAlign: "center", marginTop: "50px" }}>No news found</h3>}
        </>

    )
}

export default SearchPage;