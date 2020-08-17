import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import './loginFormPage.css';

const LoginFormPage = ({ userID, userName }) => {
  console.log(userID, userName);
  return (
    <div className='login-form-page'>
      { userName ?  <Redirect to={`/chat?room=${userID}`} /> : <LoginForm/> }
    </div>
  )
};

const mapStateToProps = (state) => ({
  userID: state.user.userID,
  userName: state.user.userName
});

export default connect(mapStateToProps)(LoginFormPage);