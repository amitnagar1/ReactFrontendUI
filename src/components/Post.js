import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  onDeleteClick = hashedUrl => {
    this.props.deletePost(hashedUrl);
  };
  render() {
    const { id, originalUrl, hashedUrl } = this.props.post;

    return (
      <div className="posts">
        <i
          className="fas fa-times fa-2x"
          id="closebutton"
          onClick={this.onDeleteClick.bind(this, hashedUrl)}
        />

        <h3 style={{ fontSize: "1.7vw" }}>
          Original Url: <span className="originallink">{originalUrl}</span>
        </h3>
        <h3 style={{ fontSize: "1.7vw" }}>
          Hashed Url:{" "}
          <span className="hashedlink">
            {" "}
            http://localhost:8888/v1/{hashedUrl}
          </span>
        </h3>
      </div>
    );
  }
}

Post.propTypes = {
  post: propTypes.object.isRequired,
  deletePost: propTypes.func.isRequired
};

//export default Post;

export default connect(
  null,
  { deletePost }
)(Post);
