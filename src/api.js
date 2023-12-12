import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://news-reporter-vg30.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById= (id) => {
    return newsApi.get(`/articles/${id}`).then(({data}) => {
        return data.article
    })
}

export const getCommentsByArticleId = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then(({data}) => {
    return data.comments
  })
}

export const patchArticle = (id) => {
  const patchBody = {
    inc_votes: 1
  }
  return newsApi.patch(`/articles/${id}`, patchBody).then(({data}) => {
    return data.article
  })
}

export const postComment = (newComment, id) => {
  const postBody = {
    username: "grumpy19",
    body: newComment,
  }
  return newsApi.post(`/articles/${id}/comments`, postBody).then(({data}) => {
    console.log(data.comment)
    return data.comment
  })
}