import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { deleteComment } from "../api";

const CommentCard = ({ comment, setComments }) => {
  const { user } = useContext(UserContext);
  const isUsersComment = comment.author === user;
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {

    setIsLoading(true);

    deleteComment(comment.comment_id)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((prevComment) => prevComment.comment_id !== comment.comment_id)
        );
        alert("Comment deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
        alert("Failed to delete comment. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <li className="comment-card">
      <p className="comment-author">@{comment.author}</p>
      <p className="comment-body">{comment.body}</p>
      {isUsersComment && (
        <button
          className="delete-comment-button"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting Comment..." : "Delete Comment"}
        </button>
      )}
    </li>
  );
};

export default CommentCard;
