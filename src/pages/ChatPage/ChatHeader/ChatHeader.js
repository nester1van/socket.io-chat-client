import React from 'react';
import { connect } from 'react-redux';
import ButtonUserLeaveChat from './ButtonUserLeaveChat/ButtonUserLeaveChat';
import './chatHeader.css';

const ChatHeader = ({ currentRoom }) => {
  return (
    <div className='chat-header'>
      <h3 className='chat-header__title'>you're in room: {currentRoom}</h3>
      <ButtonUserLeaveChat/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  currentRoom: state.rooms.currentRoom,
});

export default connect(mapStateToProps)(ChatHeader);
