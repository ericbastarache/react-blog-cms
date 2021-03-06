import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ul className="blog-posts">
        {this.renderPosts()}
      </ul>
    );
  }

  renderPosts () {
    console.log(this.props);
    const posts = this.props.posts;
    return posts.map((p) => {
      return(
        <li className="blog-item" key={p.id}>
          <Link to={"/blog/" + p.slug}>{p.name}</Link>
        </li>
      );
    });
  }

  componentDidMount () {
    //this.props.fetchPosts();
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default Blog;
//export default connect(mapStateToProps)(Blog);
//export default connect(mapStateToProps, {fetchPosts})(Blog);
