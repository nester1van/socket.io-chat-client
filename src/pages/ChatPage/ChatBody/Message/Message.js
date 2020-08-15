import React from 'react';

const Message = ({ userName, time, message }) => {
  return (
    <div className='message'>
      <div className='message__user-name'>{userName}</div>
      <div className='message__time'>{time}</div>
      <div className='message__text'>{message}</div>
    </div>
  )
};

export default Message;