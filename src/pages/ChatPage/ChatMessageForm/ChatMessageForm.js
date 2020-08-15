import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../../redux/messages/actions';

const ChatMessageForm = ({ currentRoom, sendMessage }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target['message'].value;
    sendMessage(currentRoom, message);
    e.target['message'].value = '';
  }
  
  return (
    <form 
      className='chat-message-form'
      onSubmit={handleSubmit}
    >
      <input 
        className='chat-message-form__input' 
        type='text'
        placeholder='Type your message...'
        name='message'
        required
      />
      <input 
        className='chat-message-form__submit'
        type='submit'
        value='send'
      />
    </form>
  )
};

const mapStateToProps = (state) => ({
  currentRoom: state.rooms.currentRoom,
})

export default connect(mapStateToProps, { sendMessage })(ChatMessageForm);