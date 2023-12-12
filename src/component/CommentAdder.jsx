import { useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";

const CommentAdder = ({ setComments }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null); 
  const { articleId } = useParams();

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!input){
        return;
    }

    setIsLoading(true)

    postComment(input, articleId).then((newComment) => {
    setInput('')
    setComments((currComments) => [newComment, ...currComments]);
    setIsLoading(false)
    }).catch(() => {
        setError('Error posting comment. Please try again.')
    })
  };



  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <label htmlFor="new-comment">
        <textarea
          type="text"
          id="new-comment"
          className="comment-box"
          multiline = "true"
          placeholder="What are your thoughts?"
          value={input}
          onChange={updateInput}>
        </textarea>
      </label>
      <button className="comment-button"type="submit" disabled={isLoading}>{isLoading ? 'Posting...' : 'Post Comment'}</button>
      {error && <p className="error-message">{error}</p>}
    </form>

  );
};

export default CommentAdder;
