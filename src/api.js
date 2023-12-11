import axios from "axios" 
const newsApi = axios.create({baseURL:"https://news-reporter-vg30.onrender.com/api"})

export const getAllArticles = () => {
    
    return newsApi.get("/articles").
    then(({data}) => {
        return data.articles;
    })
}