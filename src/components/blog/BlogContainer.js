import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

export class BlogContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          slug: 'test-post',
          name: 'Test post',
          content: 'TEST POST CONTENT: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          id: 2,
          slug: 'another-test-post',
          name: 'Another test post',
          content: 'ANOTHER TEST POST CONTENT: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          id: 3,
          slug: 'will-the-test-posts-ever-end',
          name: 'Will the test posts ever end?',
          content: 'WILL IT EVER END CONTENT: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    }
  }

  componentDidMount () {

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

export default BlogContainer;
//export default connect(mapStateToProps)(BlogContainer);
