// action types
export const ADD_MESSAGE = 'ADD_MESSAGE';


// action creators
const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
});

// async action creators
export const sendMessage = (roomName, message) => async(dispatch, getState) => {
  const { userID, userName, socket } = await getState().user;
  if (socket) {
    // console.log(socket.id);
    socket.emit('users manager', {method: 'getUserIdAndName'},
      ({ userID, userName }) => {
      console.log({roomName, user: {userID, userName}, message});
      socket.emit('chat message', {roomName, user: {userID, userName}, message});
    }); 
  }
};

export const listenMessage = () => (dispatch, getState) => {
  const socket = getState().user.socket;
  if (socket) {
    socket.on('chat message', (res) => {
      console.log(res);
      dispatch(addMessage(res));
    })
  }
};
