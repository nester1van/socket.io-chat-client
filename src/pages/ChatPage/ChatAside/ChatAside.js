import React from 'react';
import UsersInRoom from './UsersInRoom/UsersInRoom';
import RoomsManager from './RoomsManager/RoomsManager';

const ChatAside = () => {
  return (
    <>  
      <UsersInRoom/>
      <RoomsManager/>
    </>
  )
};

export default ChatAside;