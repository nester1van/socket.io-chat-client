import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginFormPage from '../LoginFormPage/LoginFormPage';
import ChatPage from '../ChatPage/ChatPage';
import './pages.css';

const Pages = () => {
  return (
    <div className='pages'>
      <Router>  
        <Route exact path='/'><LoginFormPage/></Route>
        <Route path='/chat'><ChatPage/></Route>
      </Router>
    </div>
  )
};

export default Pages;