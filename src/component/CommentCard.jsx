const CommentCard = ({comment}) => {
    return <li className="comment-card">
        <p className="comment-author">{comment.author}</p>
        <p className="comment-body">{comment.body}</p>
    </li>
}

export default CommentCard;