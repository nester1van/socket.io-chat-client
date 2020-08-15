import React from 'react';
import { connect } from 'react-redux';
import { userJoinRoomSocket } from '../../../../../redux/rooms/actions';

const FormAddRoom = ({ userJoinRoomSocket }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRoomName = e.target['newRoomName'].value;
    console.log(newRoomName);
    userJoinRoomSocket(newRoomName);
  }

  return (
    <form 
      className='form-add-room'
      onSubmit={handleSubmit}  
    >
      <input
        className='form-add-room__input'
        type='text'
        placeholder='Enter room name...'
        name='newRoomName'
      />
      <input
        className='form-add-room__submit'
        type='submit'
        value='add room'
      />
    </form>
  ) 
};

export default connect(null, { userJoinRoomSocket })(FormAddRoom);