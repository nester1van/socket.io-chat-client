import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import reducer from './reducers';
import { serverTest } from './user/actions old';
import config from '../config';

let socket = io(config.SERVER);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);
store.subscribe(()=>{
  console.log('new client state', store.getState());
});
store.dispatch(serverTest('test2'));

export default store;