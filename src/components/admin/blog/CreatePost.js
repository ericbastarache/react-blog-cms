import React, { Component } from 'react';
import './Blog.css';

class CreatePost extends Component {

  handleSubmit = (e) => {

  }

  handleChange = (e) => {
    
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <h3 className="text-center">Create A New Post</h3>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea rows="6" className="form-control" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Create Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
