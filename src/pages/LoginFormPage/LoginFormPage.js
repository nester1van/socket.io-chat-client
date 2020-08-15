import React from 'react'
import { connect } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const LoginFormPage = ({ userID, userName }) => {
  console.log(userID, userName);
  return (
    <>
      { userName ?  <Redirect to={`/chat?room=${userID}`} /> : <LoginForm/> }
    </>
  )
};

const mapStateToProps = (state) => ({
  userID: state.user.userID,
  userName: state.user.userName
});

export default connect(mapStateToProps)(LoginFormPage);