import {useState, useEffect} from "react";
import ArticleCard from "./ArticleCard"
import { getAllArticles } from "../api";

const ArticleList = () => {

 const [articles, setArticles] = useState([])

 useEffect(() => {
  getAllArticles().then((data) => {
   setArticles(data)
  })
 }, [])
  
 return (
    <ul className="article-list">
        {articles.map((article) => {
               return <ArticleCard  article={article} key={article.created_at}/>
            })
        }
    </ul>
 )
}

export default ArticleList;