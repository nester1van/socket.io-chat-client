import React from 'react';
import UsersInRoom from './UsersInRoom/UsersInRoom';
import RoomsManager from './RoomsManager/RoomsManager';
import './chatAside.css';

const ChatAside = () => {
  return (
    <div className='chat-aside'>  
      <UsersInRoom/>
      <RoomsManager/>
    </div>
  )
};

export default ChatAside;