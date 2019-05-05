export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const MESSAGES_TOGGLED = 'MESSAGES_TOGGLED';
export const MESSAGES_DELETED = 'MESSAGES_DELETED';

export const receiveMessage = message => dispatch => {
  let newMessage = { ...message };
  if (message === null) {
    newMessage = {
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
    };
  }

  dispatch({
    type: MESSAGE_RECEIVED,
    payload: {
      message: newMessage
    }
  });
};

export const toggleMessages = messageIds => dispatch => {
  dispatch({
    type: MESSAGES_TOGGLED,
    payload: {
      ids: messageIds
    }
  });
};

export const deleteMessages = messageIds => dispatch => {
  dispatch({
    type: MESSAGES_DELETED,
    payload: {
      ids: messageIds
    }
  });
};
