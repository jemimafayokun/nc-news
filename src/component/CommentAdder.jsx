import { useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";
import Error from "./Error";

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
          onChange={updateInput}
         />
          {input.length >= 150 ? <Error message={'reached maximum characters'}/>: <p className="char-warning">{`${150 - input.length} characters remaining`}</p>}
      </label>
      <p className="char-warning">*150 char max</p>
      <button className="comment-button"type="submit" disabled={isLoading || input.length === 0 || input.length >= 150}>{isLoading ? 'Posting...' : 'Post Comment'}</button>
      {error && <p className="error-message">{error}</p>}
    </form>

  );
};

export default CommentAdder;
