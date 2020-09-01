// action types
export const ADD_MESSAGE = 'ADD_MESSAGE';

// action creators
const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
});

// async action creators
export const sendMessage = (roomName, message) => (dispatch, getState) => {
  const { socket } = getState().user;
  if (socket) {
    socket.emit('users manager', {method: 'getUserIdAndName'},
      ({ userID, userName }) => {
      socket.emit('chat message', {roomName, user: {userID, userName}, message});
    }); 
  }
};

export const listenMessage = () => (dispatch, getState) => {
  const socket = getState().user.socket;
  if (socket) {
    socket.on('chat message', (res) => {
      dispatch(addMessage(res));
    })
  }
};
