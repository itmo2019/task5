import {
  generateContent,
  generateContentPreview,
  generateAuthor,
  generateDateTime,
  generateTheme,
  generateFreeMessageId
} from '../scripts/generators';

export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const MESSAGES_SELECT_TOGGLED = 'MESSAGES_SELECT_TOGGLED';
export const MESSAGES_DELETED = 'MESSAGES_DELETED';
export const MESSAGES_SPAMED = 'MESSAGES_SPAMED';
export const MESSAGES_READ = 'MESSAGES_READ';
export const MAILBOX_VIEW_TOGGLED = 'MAILBOX_VIEW_TOGGLED';
export const ALL_MESSAGES_SELECT_TOGGLED = 'ALL_MESSAGES_SELECT_TOGGLED';

export const toggleMailBoxView = () => dispatch => {
  dispatch({
    type: MAILBOX_VIEW_TOGGLED
  });
};

export const toggleAllMessagesSelect = () => dispatch => {
  dispatch({
    type: ALL_MESSAGES_SELECT_TOGGLED
  });
};

export const receiveMessage = message => dispatch => {
  let newMessage = { ...message };
  if (message === null) {
    newMessage = {
      id: generateFreeMessageId.generateFreeId(),
      author: generateAuthor(),
      theme: generateTheme(),
      content: generateContent(),
      contentPreview: generateContentPreview(),
      date: generateDateTime(),

      isRead: false,
      type: 'received',
      isSelected: false,
      isDeleted: false
    };
  }

  dispatch({
    type: MESSAGE_RECEIVED,
    payload: {
      message: newMessage
    }
  });
};

export const toggleSelectMessages = messageIds => dispatch => {
  dispatch({
    type: MESSAGES_SELECT_TOGGLED,
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

export const spamMessages = messageIds => dispatch => {
  dispatch({
    type: MESSAGES_SPAMED,
    payload: {
      ids: messageIds
    }
  });
};

export const readMessages = messageIds => dispatch => {
  dispatch({
    type: MESSAGES_READ,
    payload: {
      ids: messageIds
    }
  });
};

export const RECEIVED_DISPAY_FORMAT = 'RECEIVED_DISPLAY_FORMAT';
export const SENT_DISPAY_FORMAT = 'SENT_DISPLAY_FORMAT';
export const DELETED_DISPLAY_FORMAT = 'DELETED_DISPLAY_FORMAT';
export const SPAM_DISPLAY_FORMAT = 'SPAM_DISPLAY_FORMAT';
export const DRAFT_DISPLAY_FORMAT = 'DRAFT_DISPLAY_FORMAT';

export const setReceivedDisplayFormat = () => dispatch => {
  dispatch({
    type: RECEIVED_DISPAY_FORMAT,
    payload: {
      type: 'received',
      isDeleted: false
    }
  });
};

export const setSentDisplayFormat = () => dispatch => {
  dispatch({
    type: SENT_DISPAY_FORMAT,
    payload: {
      type: 'sent',
      isDeleted: false
    }
  });
};

export const setDeletedDisplayFormat = () => dispatch => {
  dispatch({
    type: DELETED_DISPLAY_FORMAT,
    payload: {
      isDeleted: true
    }
  });
};

export const setSpamDisplayFormat = () => dispatch => {
  dispatch({
    type: SPAM_DISPLAY_FORMAT,
    payload: {
      type: 'spam',
      isDeleted: false
    }
  });
};

export const setDraftDisplayFormat = () => dispatch => {
  dispatch({
    type: DRAFT_DISPLAY_FORMAT,
    payload: {
      type: 'draft',
      isDeleted: false
    }
  });
};
