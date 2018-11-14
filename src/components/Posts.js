import React, { Component } from 'react'
import Post from './Post';
import {connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

 class Posts extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }


  render() {
      const{ posts } = this.props;
    return (
      <div className="postarea">
        {posts.map(post => (
            <Post 
            key={post.id}
            post={ post }
            />
        ))}
      </div>
    )
  }
}

Posts.propTypes = {
    posts: propTypes.array.isRequired,
    fetchPosts: propTypes.func.isRequired
}
//export default Posts;
const mapStateToProps = (state) => ({
    posts: state.post.posts
})



export default connect(mapStateToProps,
    {fetchPosts}) (Posts);