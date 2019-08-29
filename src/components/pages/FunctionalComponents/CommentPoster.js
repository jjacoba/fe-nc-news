import React, { Component } from "react";
import * as api from "../../../api";

class CommentPoster extends Component {
  state = {
    username: "",
    body: ""
  };

  render() {
    const { username, author } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input type="text" name="body" onChange={this.handleChange} />
        </label>
        {author === username && <button>add comment!</button>}
      </form>
    );
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addComment();
  };

  addComment = () => {
    const { article_id, username } = this.props;
    const { body } = this.state;
    api
      .postComment(username, body, article_id)
      .then(comment => {
        console.log(comment);
        this.addComment(comment);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default CommentPoster;
