import React from 'react';
import { connect } from 'react-redux';
import ButtonUserLeaveChat from './ButtonUserLeaveChat/ButtonUserLeaveChat';

const ChatHeader = ({ currentRoom }) => {
  return (
    <>
      <h3>{currentRoom}</h3>
      <ButtonUserLeaveChat/>
    </>
  )
};

const mapStateToProps = (state) => ({
  currentRoom: state.rooms.currentRoom,
});

export default connect(mapStateToProps)(ChatHeader);
