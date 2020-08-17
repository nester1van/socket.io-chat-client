import React from 'react';
import { connect } from 'react-redux';
import RoomItem from './RoomItem/RoomItem';


const RoomsList = ({ rooms, currentRoom }) => {

  

  return (
    <ul className='rooms-list'>
      {rooms.map(room => <RoomItem key={room.roomName} roomName={room.roomName}/>)}   
    </ul>
  )
};

const mapStateToProps = (state) => ({
  rooms: state.rooms.rooms,
  currentRoom: state.rooms.currentRoom
});

export default connect(mapStateToProps)(RoomsList);