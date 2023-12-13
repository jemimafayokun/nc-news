import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../api";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topic)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      });
  }, [topic]); 

  return (
    <div>
      {!isLoading && articles.length === 0 && <p>No articles found.</p>}
      <ul className="article-list">
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
      </ul>
    </div>
  );
};

export default ArticleList;
