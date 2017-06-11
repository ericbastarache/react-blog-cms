import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Blog.css';

class BlogItem extends Component {
  render () {
    return (
      <div>
        { this.renderItem() }
      </div>
    )
  }
  renderItem () {
    const posts = this.props.posts.posts;

    return posts.map((post) => {
      console.log(post);
      if(post.slug === this.props.match.params.slug) {
        return (
          <div>
            <div className="blog-single-post" key={post.id}>
              <h1 className="text-center">{post.name}</h1>
              <p className="single-post-content">{post.content}</p>
              <Link to="/blog" className="back-to-blog">Back to Posts</Link>
            </div>
         </div>
         )
       }
    })
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(BlogItem);
