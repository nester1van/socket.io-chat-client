import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { userJoinRoomSocket, setCurrentRoom, userLiveRoomSocket } from '../../redux/rooms/actions';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatMessageForm from './ChatMessageForm/ChatMessageForm';
import ChatBody from './ChatBody/ChatBody';
import ChatAside from './ChatAside/ChatAside';
import './chatPage.css';

const ChatPage = ({ userID, userName, setCurrentRoom, userJoinRoomSocket }) => {
  
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  let roomName = query.get('room');

  userJoinRoomSocket(roomName);
  setCurrentRoom(roomName);

  if (!userName) {
    userName = localStorage.getItem('userName');
  }

  useEffect(() => {
    userJoinRoomSocket(userID);
    userJoinRoomSocket(roomName);
    setCurrentRoom(roomName);    
  }, [userID]);

  return (
    <>

      { !userName ?  <Redirect to={`/`}/> : 
      <div className='chat-page'>   
        <div className='chat-page__container'>
          <ChatHeader/>
          <ChatBody/>
          <ChatMessageForm/>        
        </div>    
        <div className='chat-page__aside'>
          <ChatAside/>
        </div>
      </div>}
    </>
  )
};

const mapStateToProps = (state) => ({
  userID: state.user.userID,
  userName: state.user.userName
});

export default connect(mapStateToProps, { setCurrentRoom, userJoinRoomSocket })(ChatPage);