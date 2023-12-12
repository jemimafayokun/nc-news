import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { useParams } from 'react-router-dom';
import CommentCard from "./CommentCard";

const CommentList = () => {
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)
const {articleId} = useParams();

useEffect(() => {
    getCommentsByArticleId(articleId).then((data) => {
           setComments(data)
           setIsLoading(false)
    })
}, [articleId])

return <ul>
    {isLoading && <p>Loading...</p>}
    {comments.map((comment) => {
    return <CommentCard comment={comment} key={comment.comment_id} />
})}</ul>
}

export default CommentList;