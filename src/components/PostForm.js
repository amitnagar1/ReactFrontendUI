import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "../actions/postActions";
import propTypes from "prop-types";
import validUrl from "valid-url";

class PostForm extends Component {
  state = {
    originalUrl: "",
    hashedUrl: ""
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const { originalUrl, hashedUrl } = this.state;

    if (originalUrl === "") {
      window.alert("The URL field cannot be left blank..");
      return;
    } else if (!validUrl.isUri(originalUrl)) {
      window.alert("Please enter a valid URL.");
      return;
    }

    const post = {
      originalUrl: originalUrl
    };

    this.props.newPost(post);
    //Sending new post data to newPost action

    this.setState({
      originalUrl: "",
      hashedUrl: ""
    });
  };

  render() {
    return (
      <div className="box">
        <h1> Generate your URL.. </h1>

        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            name="originalUrl"
            value={this.state.originalUrl}
            onChange={this.onChange.bind(this)}
            placeholder="Enter your URL.."
          />

          <button type="submit"> Generate </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  newPost: propTypes.func.isRequired
};

export default connect(
  null,
  { newPost }
)(PostForm);

//export default PostForm;
