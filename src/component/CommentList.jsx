import React, { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

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
      {isLoading && <p>Loading...</p>}
      {!isLoading && comments.length === 0 && 
      <section>
      <CommentAdder setComments={setComments}/>
     <p>No comments found.</p>
      </section>
       }
      {!isLoading && comments.length > 0 && (
        <ul>
        <CommentAdder setComments={setComments} articleId={articleId}/>
        <h2 className="comments-header" >Comments: </h2>
        <h2 className="comments-number">({comments.length} comments)</h2>
          {comments.map((comment) => (
            <CommentCard comment={comment} setComments={setComments} key={comment.comment_id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
