import React, { Component } from 'react';
import Blog from './Blog';
import { connect } from 'react-redux';

export class BlogContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          slug: 'test-post',
          name: 'Test post'
        },
        {
          id: 2,
          slug: 'another-test-post',
          name: 'Another test post'
        },
        {
          id: 3,
          slug: 'will-the-test-posts-ever-end',
          name: 'Will the test posts ever end?'
        }
      ]
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Blog posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(BlogContainer);
