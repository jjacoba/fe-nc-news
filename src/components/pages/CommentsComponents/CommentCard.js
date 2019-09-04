import React from "react";
import { Link } from "@reach/router";
import VotesUpdater from "../FunctionalComponents/VotesUpdater";
// import CommentPoster from '../FunctionalComponents/CommentPoster';

const CommentCard = props => {
  const {
    article_id,
    author,
    votes,
    created_at,
    body,
    comment_id,
    removeComment,
    username
  } = props;

  return (
    <div className="commentCard" key={article_id}>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <Link to={`/users/${author}`}>
              <h2 className="singleArticleTextCommentAuthor">{author}</h2>
            </Link>
            <h2 className="singleArticleTextComment">
              Created: {new Date(created_at).toLocaleString()}
            </h2>
            <h2 className="singleArticleTextComment">{body}</h2>
            <VotesUpdater
              author={author}
              username={username}
              votes={votes}
              article_id={article_id}
              comment_id={comment_id}
            />
            {author === username && (
              <button
                className="btn btn-secondary"
                type="submit"
                onClick={() => removeComment(comment_id)}
              >
                Delete Comment!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
