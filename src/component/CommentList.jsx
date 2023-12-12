import React, { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articleId } = useParams();

  useEffect(() => {
    getCommentsByArticleId(articleId)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setIsLoading(false);
      });
  }, [articleId]);

  return (
    <div>
      <h2>Comments:</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && comments.length === 0 && <p>No comments found.</p>}
      {!isLoading && comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.comment_id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
