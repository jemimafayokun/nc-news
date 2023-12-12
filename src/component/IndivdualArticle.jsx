import React, { useEffect, useState } from "react";
import { getArticleById, patchArticle } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  const { articleId } = useParams();

  useEffect(() => {
    getArticleById(articleId)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setIsLoading(false);
        setError("Failed to fetch article. Please check your internet connection or try again later."); 
      });
  }, [articleId]);

  const upVote = (article_id) => {
    patchArticle(article_id)
      .then(() => {
        setArticle((currArticle) => ({
          ...currArticle,
          votes: currArticle.votes + 1,
        }));
      })
      .catch((error) => {
        console.error("Error upvoting article:", error);
        setError("Failed to upvote article. Please try again later.");
      });
  };

  return (
    <div className="article-card">
      {isLoading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!isLoading && Object.keys(article).length === 0 && (
        <p>No article found.</p>
      )}
      {!isLoading && Object.keys(article).length > 0 && (
        <>
          <p className="article-topic">{article.topic}</p>
          <p className="article-created-at">{article.created_at}</p>
          <p className="article-title">{article.title}</p>
          <p className="article-body">{article.body}</p>
          {article.article_img_url && <img src={article.article_img_url} alt="Article" />}
          <div className="vote-comment-container">
            <button onClick={() => upVote(article.article_id)} className="article-vote-button">
              Vote Here!
            </button>
            <p className="article-vote">{article.votes}</p>
          </div>
          <CommentList />
        </>
      )}
    </div>
  );
};

export default IndividualArticle;
