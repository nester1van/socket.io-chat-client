import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { userLiveRoomSocket } from '../../../../../../redux/rooms/actions';

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

const RoomItem = ({roomName, currentRoom, userLiveRoomSocket }) => {

  let history = useHistory();

  const handleClickGoToRoom = () => {
    history.push(`/chat?room=${roomName}`);
  }

  const handleClickDeleteRoom = () => {
    userLiveRoomSocket(roomName);
  }


  return (
    <li>
      {roomName}
      <button onClick={handleClickGoToRoom}>go to room</button>
      <button 
        onClick={handleClickDeleteRoom} 
        disabled = {roomName === currentRoom}
      >delete room</button>
    </li>
  )
};

const mapStateToProps = (state) => ({
  currentRoom: state.rooms.currentRoom
});

export default connect(mapStateToProps, { userLiveRoomSocket })(RoomItem);