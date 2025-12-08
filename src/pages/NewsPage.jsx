import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import { format } from 'date-fns';

const NewsPage = () => {
    const location = useLocation();
    const news = location.state?.news;
    const publishedDateTime = format(news.publishedAt, "dd-MM-yyyy HH:mm");

    useEffect(() =>{
      window.scrollTo(0,0);
    },[])

  return (
    <div className="news_page">
        <div className="news_title">
          <h2>{news.title}</h2>
          <img src={news.image} />
        </div>

        <p>{news.description}</p>
        <p>{news.content}</p>
        <br />

        <div className="stamp">
          <p>Published by: {news.source.name}</p>
          <p>{publishedDateTime}</p>
        </div>
    </div>
  )
}

export default NewsPage;