import React from 'react';
import './buttonUserLeaveChat.css';

const ButtonUserLeaveChat = () => {

  const handleClick = () => {
    localStorage.removeItem('userName');
  };

  return (
    <a 
      className='btn-leave-chat' 
      href='/' 
      onClick={handleClick}
    >Leave Chat</a>
  )
};

export default ButtonUserLeaveChat;