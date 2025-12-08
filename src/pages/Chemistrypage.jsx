import { useLoaderData } from 'react-router-dom'
import NewsCard from '../components/NewsCard';


const Chemistrypage = () => {
    const news = useLoaderData().articles;

    return (
        news.map((currentNews, index) => (<NewsCard key={index} currentNews={currentNews} index={index} />))
    )
}

export default Chemistrypage;