import React from 'react';
import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './chatBody.css';

const ChatBody = ({ messages, currentRoom }) => {

  return (
    <ScrollToBottom className='chat-body'>
      {messages.filter(messageObj => messageObj.roomName === currentRoom)
      .map(messageObj => {
        const { date, message, user: { userID, userName }} = messageObj;
        let dateObj = new Date(date);
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        const time = hours + ':' + minutes;
        return (
          <Message 
            key={userID + date}
            userID={userID}
            userName={userName}
            time={time}
            message={message}
          />
        )
      })}
    </ScrollToBottom>
  )
};

const mapStateToProps = (state) => ({
  messages: state.messages,
  currentRoom: state.rooms.currentRoom
});

export default connect(mapStateToProps)(ChatBody);