import { MESSAGE_RECEIVED, MESSAGES_DELETED, MESSAGES_TOGGLED } from './actions';

const initialState = {
  // {id, author, theme, content, contentPreview, date
  //  isRead, type [sent, received, deleted, spam, draft], isSelected, isShown}
  messages: [
    {
      id: 0,
      author: 'UN',
      theme: 'Default theme',
      content: 'Default content with few words',
      contentPreview: 'Default content preview',
      date: new Date(),

      isRead: false,
      type: 'received',
      isSelected: false,
      isShown: true
    }
  ]
};

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED: {
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      };
    }
    case MESSAGES_DELETED: {
      return {
        ...state,
        messages: state.messages.filter(message => action.payload.ids.indexOf(message.id) !== -1)
      };
    }
    case MESSAGES_TOGGLED: {
      console.log("WAS");
      return {
        ...state,
        messages: state.messages.map(message => {
          console.log(message.id);
          return {
            ...message,
            isSelected: !message.isSelected //!== action.payload.ids.includes(message.id)
          };
        })
      };
    }
    default:
      return state;
  }
}

export default messageReducer;
