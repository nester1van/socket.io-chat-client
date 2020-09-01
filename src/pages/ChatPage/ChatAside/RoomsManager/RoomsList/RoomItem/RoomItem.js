import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { userLeaveRoomSocket } from '../../../../../../redux/rooms/actions';
import './roomItem.css';

const RoomItem = ({userID, roomName, currentRoom, userLeaveRoomSocket }) => {

  let history = useHistory();

  const handleClickGoToRoom = () => {
    history.push(`/chat?room=${roomName}`);
  }

  const handleClickDeleteRoom = () => {
    userLeaveRoomSocket(roomName);
  }

  return (
    <li className='room-item'>
      <span className='room-item__title'>{roomName}</span>
      <div className='room-item__btn-group'>
        <button 
          className='room-item__btn-go-to-room'
          onClick={handleClickGoToRoom}
          disabled = {roomName === currentRoom}
        >go to room</button>
        { roomName !== userID ? 
          <button 
            className='room-item__btn-delete-room'
            onClick={handleClickDeleteRoom} 
            disabled = {roomName === currentRoom}
          >delete room</button> : null
        }
      </div>     
    </li>
  )
};

const mapStateToProps = (state) => ({
  userID: state.user.userID,
  currentRoom: state.rooms.currentRoom
});

export default connect(mapStateToProps, { userLeaveRoomSocket })(RoomItem);