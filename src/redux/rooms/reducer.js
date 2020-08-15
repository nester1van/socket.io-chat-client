import { USER_JOIN_ROOM, USER_LIVE_ROOM, SET_CURRENT_ROOM } from './actions';
 
const initialRooms = {rooms: [], currentRoom: ''};

const rooms = (state = initialRooms, action) => {
  const { type, roomName, usersInRoom, currentRoom } = action;
  let { rooms } = {...state};
  switch (type) {
    case USER_JOIN_ROOM:
      const room = {roomName, usersInRoom};
      // [{roomName: "room1", usersInRoom: [{userID, userName}]}]
      rooms = rooms.filter(room => room.roomName !== roomName);
      if (room.usersInRoom.length > 0 && room.usersInRoom[0]) {
        rooms.push(room);
      }
      return {...state, rooms};
    case USER_LIVE_ROOM:
      rooms = rooms.filter(room => !(room.roomName === roomName));
      return {...state, rooms};
    case SET_CURRENT_ROOM: 
      return {...state, currentRoom};
    default:
      return state;
  }
};

export default rooms;