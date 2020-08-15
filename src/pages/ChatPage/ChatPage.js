import React from 'react'
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { userJoinRoomSocket, setCurrentRoom, userLiveRoomSocket } from '../../redux/rooms/actions';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatMessageForm from './ChatMessageForm/ChatMessageForm';
import ChatBody from './ChatBody/ChatBody';
import ChatAside from './ChatAside/ChatAside';

const ChatPage = ({ userName, setCurrentRoom, userJoinRoomSocket }) => {


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

  return (
    <>

      { !userName ?  <Redirect to={`/`}/> : 
      <>       
        Chat page
        <ChatHeader/>
        <ChatAside/>
        <ChatBody/>
        <ChatMessageForm/>
      </>}
    </>
  )
};

const mapStateToProps = (state) => ({
  userName: state.user.userName
});

export default connect(mapStateToProps, { setCurrentRoom, userJoinRoomSocket })(ChatPage);