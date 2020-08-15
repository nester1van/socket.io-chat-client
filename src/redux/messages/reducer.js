import { ADD_MESSAGE } from './actions';

const initialMessages = [];

const messages = (state = initialMessages, action) => {
  const { type, message } = action;
  switch (type) {
    case ADD_MESSAGE:
      return [...state, message];
    default:
      return state;
  }
};

export default messages;
