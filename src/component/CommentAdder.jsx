import { useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";

const CommentAdder = ({ setComments }) => {
  const [input, setInput] = useState('');
  const { articleId } = useParams();

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(input, articleId).then((newComment) => {
      setInput('');
      setComments((currComments) => [newComment, ...currComments]);
    });
  };

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <label htmlFor="new-comment">
        <input
          type="text"
          id="new-comment"
          placeholder="What are your thoughts?"
          value={input}
          onChange={updateInput}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentAdder;
