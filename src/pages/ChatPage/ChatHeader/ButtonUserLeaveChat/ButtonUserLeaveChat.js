import React from 'react';

const ButtonUserLeaveChat = () => {

  const handleClick = () => {
    localStorage.removeItem('userName');
  };

  return (
    <>
      <a href='/' onClick={handleClick}>Leave Chat</a>
    </>
  )
};

export default ButtonUserLeaveChat;