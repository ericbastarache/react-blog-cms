import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="col-sm-2" htmlFor="txtUsername">Username:</label>
                <div className="col-sm-10">
                  <input onChange={this.handleChange} name="username" className="form-control" type="text" placeholder="Enter username" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2" htmlFor="txtPassword">Password:</label>
                <div className="col-sm-10">
                  <input onChange={this.handleChange} name="password" className="form-control" type="password" placeholder="Enter password" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password
  }
}

export default connect(mapStateToProps)(LoginContainer);
