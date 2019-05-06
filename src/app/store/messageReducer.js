import {
  MESSAGE_RECEIVED,
  MESSAGES_DELETED,
  MESSAGES_SELECT_TOGGLED,
  MESSAGES_SPAMED,
  MESSAGES_READ,
  ALL_MESSAGES_SELECT_TOGGLED,
  MAILBOX_VIEW_TOGGLED
} from './actions';

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
      type: 'received', // 'sent', 'draft', 'spam'
      isSelected: false,
      isDeleted: false
    }
  ],

  allMessagesSelect: false,
  mailBoxView: 'messages-list'
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
        messages: state.messages.map(message => {
          if (action.payload.ids.indexOf(message.id) !== -1) {
            return {
              ...message,
              isSelected: false,
              isDeleted: true
            };
          }
          return message;
        })
      };
    }
    case MESSAGES_SELECT_TOGGLED: {
      return {
        ...state,
        messages: state.messages.map(message => {
          // console.log(message.id);
          return {
            ...message,
            isSelected: message.isSelected !== action.payload.ids.includes(message.id)
          };
        })
      };
    }
    case MESSAGES_SPAMED: {
      return {
        ...state,
        messages: state.messages.map(message => {
          return {
            ...message,
            type: action.payload.ids.includes(message.id) ? 'spam' : message.type,
            isSelected: action.payload.ids.includes(message.id) ? false : message.isSelected
          };
        })
      };
    }
    case MESSAGES_READ: {
      return {
        ...state,
        messages: state.messages.map(message => {
          return {
            ...message,
            isRead: action.payload.ids.includes(message.id) ? true : message.isRead
          };
        })
      };
    }
    case ALL_MESSAGES_SELECT_TOGGLED: {
      return {
        ...state,
        allMessagesSelect: !state.allMessagesSelect
      };
    }
    case MAILBOX_VIEW_TOGGLED: {
      return {
        ...state,
        mailBoxView: state.mailBoxView === 'messages-list' ? 'opened-message' : 'messages-list'
      };
    }
    default:
      return state;
  }
}

export default messageReducer;
