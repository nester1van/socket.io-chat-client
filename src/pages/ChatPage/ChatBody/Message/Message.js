import React from 'react';
import { connect } from 'react-redux';
import './message.css';

const Message = ({ currentUserID, userID, userName, time, message }) => {

  let my = currentUserID === userID ? '_my' : '';

  return (
    <div className={`message${my}`}>
      <div className={`message__container${my}`}>
        <div className='message__item'>
          <div className={`message__user-name${my}`}>{userName}</div>
          <div className={`message__time${my}`}>{time}</div>
          <div className={`message__text${my}`}>{message}</div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  currentUserID: state.user.userID
});

export default connect(mapStateToProps)(Message);