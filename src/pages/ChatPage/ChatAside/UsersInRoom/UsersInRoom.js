import React from 'react';
import { connect } from 'react-redux';

const UsersInRoom = ({currentRoom, rooms }) => {
  return (
    <ul>
      {rooms.filter(room => room.roomName === currentRoom).map(room => {
        return room.usersInRoom.map(user => {
          return <li key={user.userID}>{user.userName}</li>
        })
      })}
    </ul>
  )
};

const mapStateToProps = (state) => ({
  currentRoom: state.rooms.currentRoom,
  rooms: state.rooms.rooms
});

export default connect(mapStateToProps, {})(UsersInRoom);