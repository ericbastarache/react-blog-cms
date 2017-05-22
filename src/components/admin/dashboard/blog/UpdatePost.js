import React, { Component } from 'react';

class UpdatePost extends Component {
  render() {
    return(
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form onSubmit={this.handleSubmit} className="form-horizontal">
                <div className="form-inline">
                  <label htmlFor="title">Post Title: </label>
                  <input className="form-control" name="title" type="text" onChange={this.handleChange} />
                </div>
                <div className="form-inline">
                  <label htmlFor="category">Post Category: </label>
                  <select className="form-control" name="categories">
                    <option>--------</option>
                    <option>Technology</option>
                    <option>Science</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
}

export default UpdatePost;
