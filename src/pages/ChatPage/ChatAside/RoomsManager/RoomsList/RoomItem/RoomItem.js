import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { userLiveRoomSocket } from '../../../../../../redux/rooms/actions';

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

const RoomItem = ({userID, roomName, currentRoom, userLiveRoomSocket }) => {

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
      <button 
        onClick={handleClickGoToRoom}
        disabled = {roomName === currentRoom}
      >go to room</button>
      { roomName !== userID ? 
        <button 
          onClick={handleClickDeleteRoom} 
          disabled = {roomName === currentRoom}
        >delete room</button> : null
      }
      
    </li>
  )
};

const mapStateToProps = (state) => ({
  userID: state.user.userID,
  currentRoom: state.rooms.currentRoom
});

export default connect(mapStateToProps, { userLiveRoomSocket })(RoomItem);