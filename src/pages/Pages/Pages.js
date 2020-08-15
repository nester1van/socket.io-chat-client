import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginFormPage from '../LoginFormPage/LoginFormPage';
import ChatPage from '../ChatPage/ChatPage';

const Pages = () => {
  return (
    <Router>
      <Route exact path='/'><LoginFormPage/></Route>
      <Route path='/chat'><ChatPage/></Route>
    </Router>
  )
};

export default Pages;