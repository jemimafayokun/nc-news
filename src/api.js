import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://news-reporter-vg30.onrender.com/api",
});

export const getAllArticles = (topic, sortBy, orderBy) => {
  return newsApi.get(`/articles`, {
    params: {
      topic:topic,
      sort_by: sortBy,
      order_by: orderBy
    }}
    ).then(({ data }) => {
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
    return data.comment
  })
}

export const deleteComment = (commentId) => {
  return newsApi.delete(`/comments/${commentId}`).then(() => {
  })
}

export const getTopics = () => {
  return newsApi.get(`/topics`).then (({data}) => {
    return data.topics
  })
}