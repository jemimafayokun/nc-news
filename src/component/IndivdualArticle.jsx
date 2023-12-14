import React, { useEffect, useState } from "react";
import { getArticleById, patchArticle } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import Error from "./Error";


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
        const {response} = error
        console.log(error)
        setIsLoading(false);
        setError(`${response.status}: ${response.data.msg}`); 
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
    <div className="indiv-article-card">
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && (
        <Error message={error} />
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
