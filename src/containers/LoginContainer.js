import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  constructor (props) {
    super(props);
  }
}

const mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(LoginContainer);
