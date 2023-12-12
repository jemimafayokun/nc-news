import { Link } from "react-router-dom";


const ArticleCard = ({article}) => {

    return (
    <Link className="article-link" to= {`/articles/${article.article_id}`}>
    <li  id={article.article_id} className="article-card">
        <p className="article-topic">{article.topic}</p>
        <p className="article-created-at">{article.created_at}</p>
        <p className="article-title">{article.title}</p>
        <img src={article. article_img_url} />
        <div className="vote-comment-container">
        <p className="article-votes">Votes: {article.votes}</p>
        <p className="article-comment-count">Comment Count: {article.comment_count}</p>
        </div>
    </li>
    </Link>)
}

export default ArticleCard;