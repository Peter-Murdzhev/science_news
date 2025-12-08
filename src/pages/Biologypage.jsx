import { useLoaderData } from 'react-router-dom'
import NewsCard from '../components/NewsCard';

const Biologypage = () => {
   const news = useLoaderData().articles;

  return (
    news.map((currentNews, index) => (<NewsCard key={index} currentNews={currentNews} index={index}/>)) 
  )
}

export default Biologypage;