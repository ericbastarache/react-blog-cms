import React, { Component } from 'react';
import { connect } from 'react-redux';

// const BlogItem = (props) => {
//
//   return (
//     <div>
//
//     </div>
//   );
// }
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
           <div key={post.id}>
             <h1>{post.name}</h1>
             <p>{post.content}</p>
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
