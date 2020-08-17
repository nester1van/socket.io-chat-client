import io from "socket.io-client";
import config from '../../config';

// action types
export const SET_SOCKET = 'SET_SOCKET';
export const SET_USER_ID = 'SET_USER_ID'; 
export const SET_USER_NAME = 'SET_USER_NAME';

// action creator
export const setSocket = (socket) => ({
  type: SET_SOCKET,
  socket
});

export const setUserID = (userID) => ({
  type: SET_USER_ID,
  userID
});

export const setUserName = (userName) => ({
  type: SET_USER_NAME,
  userName
});

export const connectSocket = () => (dispatch, getState) => {
  const socket = getState().user.socket;
  if (!socket){ // only one socket
    const { SERVER } = config;
    const socket = io(SERVER);
    socket.emit('users manager', {method: 'getUserIdAndName'}, 
    ({ userID, userName }) => {
      dispatch(setUserID(userID));
      dispatch(setUserName(userName));
    })
    dispatch(setSocket(socket));
  };
};

export const disconnectSocket = () => (dispatch, getState) => {
  const socket = getState().user.socket;
  if (socket){
    socket.disconnect(); // note: "disconnect" makes very slowly
    dispatch(setSocket(null));
    dispatch(setSocket(undefined));
  };
}

export const setUserNameSocket = (userName) => (dispatch, getState) => {  
  const socket = getState().user.socket;
  if (socket) {
    socket.emit('users manager', 
    { method: 'updateUser', name: userName }, 
    (res) => {
      if (res) dispatch(setUserName(userName));
    });    
  };
}
