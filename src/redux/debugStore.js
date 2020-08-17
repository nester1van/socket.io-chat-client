import { connectSocket, setUserNameSocket, disconnectSocket } from './user/actions';
import { userJoinRoomSocket, userLiveRoomSocket, 
  listenUsersInRoomSocket, setCurrentRoom } from './rooms/actions';
import { sendMessage, listenMessage } from './messages/actions';

const debugStore = (store, isDebugging) => {
  if (isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    
    // // user :
    // store.dispatch(connectSocket());
    // store.dispatch(setUserNameSocket('user1'));
    //setTimeout(() => store.dispatch(disconnectSocket()), 1000);
    
    // // rooms
    // store.dispatch(listenUsersInRoomSocket());
    // store.dispatch(userJoinRoomSocket('room1'));
    // store.dispatch(setCurrentRoom('room5'));
    // store.dispatch(userJoinRoomSocket('room1'));
    // store.dispatch(userJoinRoomSocket('room2'));

    //  setTimeout(() => store.dispatch(userLiveRoomSocket('room1')), 1000);

    // // message
    // store.dispatch(listenMessage());
    // store.dispatch(sendMessage('room1', 'message1'));
    // store.dispatch(sendMessage('room1', 'message2'));
    
  } 
};

export default debugStore;