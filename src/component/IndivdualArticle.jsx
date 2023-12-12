import React, { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
      });
  }, [articleId]);

  return (
    <div className="article-card">
      {isLoading && <p>Loading...</p>}
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
            <p className="article-votes">Votes: {article.votes}</p>
            <p className="article-comment-count">Comment Count: {article.comment_count}</p>
          </div>
          <CommentList />
        </>
      )}
    </div>
  );
};

export default IndividualArticle;

