import {SET_SOCKET, SET_USER_ID, SET_USER_NAME} from './actions';

const initialUser = {
  socket: null,
  userID: undefined,
  userName: ''
}

const user = (state = initialUser, action) => {
  const {type, socket, userID, userName} = action;
  switch (type) {
    case SET_SOCKET:      
      return {...state, socket};
    case SET_USER_ID:
      return {...state, userID};
    case SET_USER_NAME:
      return {...state, userName};
    default:
      return state;
  }
}

export default user;