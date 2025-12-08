import { Link } from 'react-router-dom'

const NewsCard = ({ currentNews, index }) => {
    return (
        <Link key={index} to={`/news/${index}`} state={{news: currentNews}}>
            <div className="news_card">
            
            <div className="news_heading">
                <h3>{currentNews.title}</h3>
                <p>{currentNews.description}</p>
            </div>

            <img src={currentNews.image}/>
        </div>
        </Link>
    )
}

export default NewsCard;