import {useState, useEffect} from "react";
import ArticleCard from "./ArticleCard"
import { getAllArticles, getArticleById } from "../api";

const ArticleList = () => {

 const [articles, setArticles] = useState([])
 const [isLoading, setIsLoading] = useState(true)

 useEffect(() => {
  getAllArticles().then((data) => {
   setArticles(data)
   setIsLoading(false)
  })
 }, [])

 return (
    <ul className="article-list">
     {isLoading && <p>Loading...</p>}
        {articles.map((article) => {
               return <ArticleCard article={article} key={article.article_id}/>
            })
        }
    </ul>

 )
}

export default ArticleList;