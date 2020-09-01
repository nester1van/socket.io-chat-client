import React from 'react';
import { connect } from 'react-redux';
import { connectSocket } from '../../redux/user/actions';
import { listenUsersInRoomSocket } from '../../redux/rooms/actions';
import { listenMessage } from '../../redux/messages/actions';

const Socket = ({ children, connectSocket, listenUsersInRoomSocket, listenMessage }) => {

  connectSocket();
  listenUsersInRoomSocket();
  listenMessage();

  return (
    <>
      {children}
    </>
  )
};

export default connect(null, 
  { connectSocket, listenUsersInRoomSocket, listenMessage })(Socket);