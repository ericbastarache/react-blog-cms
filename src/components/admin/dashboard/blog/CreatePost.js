import React, { Component } from 'react';

class CreatePost extends Component {
  render() {
    return (
      <h1 className="text-center">Create Post</h1>
      <form className="form-horizontal">
        <input type="text" className="form-control" onChange={this.handleChange} />
      </form>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

export default CreatePost;
