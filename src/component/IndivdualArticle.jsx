import { useEffect, useState } from "react"
import { getArticleById } from "../api"
import { useParams } from 'react-router-dom';

const IndividualArticle = () => {
const [article, setArticle] = useState({})
const [isLoading, setIsLoading] = useState(false)
const {articleId} = useParams();

    useEffect(() => {
        getArticleById(articleId).then((data) => {
         setArticle(data)
         setIsLoading(true);
        }).finally( () => {
        setIsLoading(false);
        })
     }, [articleId])
      
    return (
        
    <div className="article-card">
     {isLoading && <p>Loading...</p>}
        <p className="article-topic">{article.topic}</p>
        <p className="article-created-at">{article.created_at}</p>
        <p className="article-title">{article.title}</p>
        <p className="article-body">{article.body}</p>
        <img src={article. article_img_url} />
        <div className="vote-comment-container">
        <p className="article-votes">Votes: {article.votes}</p>
        <p className="article-comment-count">Comment Count: {article.comment_count}</p>
        </div>
     </div>
    )
}

export default IndividualArticle;
