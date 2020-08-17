// action types
export const USER_JOIN_ROOM = 'USER_JOIN_ROOM';
export const USER_LIVE_ROOM = 'USER_LIVE_ROOM';
export const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';

// action creators
const userJoinRoom = (roomName, usersInRoom) => ({
  type: USER_JOIN_ROOM,
  roomName,
  usersInRoom
});

const userLiveRoom = (roomName) => ({
  type: USER_LIVE_ROOM,
  roomName
});

export const setCurrentRoom = (currentRoom) => ({
  type: SET_CURRENT_ROOM,
  currentRoom
});

// async action creators
export const userJoinRoomSocket = (roomName) => (dispatch, getState) => {
  const socket = getState().user.socket;
  if (socket) {
    socket.emit('rooms manager',
      {method: 'userJoinRoom', roomName}
    );
  }
};

export const userLiveRoomSocket = (roomName) => (dispatch, getState) => {
  const socket = getState().user.socket;
  if (socket) {
    socket.emit('rooms manager', 
    {method: 'deleteUserFromRoom', roomName} );
  }
};

export const listenUsersInRoomSocket = () => (dispatch, getState) => {
  const socket = getState().user.socket;
  if (socket) {
    socket.on('users in room', ({ roomName, usersInRoom }) => {
      dispatch(userJoinRoom(roomName, usersInRoom));
    });
  }
};