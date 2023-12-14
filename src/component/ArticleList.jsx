import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../api";
import { useParams } from "react-router-dom";
import Error from "./Error";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]= useState(null)
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topic, sortBy, orderBy)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        const {response} = error
        console.log(error)
        setIsLoading(false);
        setError(`${response.status}: ${response.data.msg}`);
      });
  }, [topic, sortBy, orderBy]);

  const handleSortBy = (event) => {
    setSortBy(event.target.id);
  };

  const handleOrderBy = (event) => {
    setOrderBy(event.target.innerText);
  };

  return (
    <main className="articles-container">
      <div className="filter">
        <section className="dropdown">
          <span className="dropdown-span">Sort Articles by▼</span>
          <div className="dropdown-content" onClick={handleSortBy}>
            <p id={"created_at"}>Date</p>
            <p id={"votes"}>Votes</p>
            <p id={"comment_count"}>Comments</p>
          </div>
        </section>

        <section className="dropdown">
          <span className="dropdown-span">Order Articles by▼</span>
          <div className="dropdown-content" onClick={handleOrderBy}>
            <p>ASC</p>
            <p>DESC</p>
          </div>
        </section>
      </div>
      <section>
        {!isLoading && articles.length === 0 && <Error  message={error}/>}
        <ul className="article-list">
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            articles.map((article) => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
        </ul>
      </section>
    </main>
  );
};

export default ArticleList;
