import React from 'react';
import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './chatBody.css';

const ChatBody = ({ messages, currentRoom }) => {
    //   messages: Array(1)
    // 0:
    // date: "2020-08-14T12:41:50.842Z"
    // message: "a"
    // roomName: "YPsaoDpwyilG3vEkAAEk"
    // user: {userID: "i2e2MY8ijPFDy2_VAAE4", userName: "agrf"}
    // __proto__: Object
    // length: 1
    // __proto__: Array(0)
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