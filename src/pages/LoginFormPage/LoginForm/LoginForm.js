import React from 'react';
import { connect } from 'react-redux';
import { setUserNameSocket } from '../../../redux/user/actions';

const LoginForm = ({ setUserNameSocket }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target['userName'].value;
    localStorage.setItem('userName', userName);
    setUserNameSocket(userName);
  };

  return (
    <form 
      className='login-form' 
      onSubmit={handleSubmit}
    >  
      <input 
        className='login-form__input-name' 
        type='text' 
        placeholder='enter your name'
        name='userName'
        required
      />
      <input 
        className='login-form__submit' 
        type='submit' 
        value='join chat'/>
    </form>
  )
};

export default connect(null, { setUserNameSocket })(LoginForm);