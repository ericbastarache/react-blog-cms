import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render () {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="txtUsername">Enter your username:</label>
          <input onChange={this.handleChange} name="txtUsername" className="form-control" type="text" placeholder="Enter username" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(LoginContainer);
