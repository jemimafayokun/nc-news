const ArticleCard = ({article}) => {
    return <li className="article-card">
        <p className="article-topic">{article.topic}</p>
        <p className="article-created-at">{article.created_at}</p>
        <p className="article-title">{article.title}</p>
        <img src={article. article_img_url} />
        <div className="vote-comment-container">
        <p className="article-votes">Votes:{article.votes}</p>
        <p className="article-comment-count">Comment Count:{article.comment_count}</p>
        </div>
    </li>
}

export default ArticleCard;