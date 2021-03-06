import { combineReducers } from 'redux';
import user from './user/reducer';
import rooms from './rooms/reducer';
import messages from './messages/reducer';

let reducer = combineReducers({
  user,
  rooms,
  messages
});

export default reducer;