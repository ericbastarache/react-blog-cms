import React from 'react';
import './Login.css';
import LoginContainer from './LoginContainer';

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="login-card">
            <h3 className="text-center">Login</h3>
            <LoginContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
