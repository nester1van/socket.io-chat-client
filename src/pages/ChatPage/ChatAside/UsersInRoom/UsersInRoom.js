import React from 'react';
import { connect } from 'react-redux';
import './usersInRoom.css';

const UsersInRoom = ({currentRoom, rooms }) => {
  return (
    <div className='users-in-room'>
      <h3 className='users-in-room__title'>Users in room now:</h3>
      <ul className='users-in-room__list'>
        {rooms.filter(room => room.roomName === currentRoom).map(room => {
          return room.usersInRoom.map(user => {
            return <li key={user.userID}>{user.userName}</li>
          })
        })}
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => ({
  currentRoom: state.rooms.currentRoom,
  rooms: state.rooms.rooms
});

export default connect(mapStateToProps, {})(UsersInRoom);