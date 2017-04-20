import React, { Component } from 'react';

class UpdatePost extends Component {
  render() {
    return(
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <form onSubmit={this.handleSubmit} className="form-horizontal">

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
