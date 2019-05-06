import {
  RECEIVED_DISPAY_FORMAT,
  SENT_DISPAY_FORMAT,
  DELETED_DISPLAY_FORMAT,
  SPAM_DISPLAY_FORMAT,
  DRAFT_DISPLAY_FORMAT
} from './actions';

const initialState = {
  type: 'received',
  isDeleted: false
};

function displayFormatReducer(state = initialState, action) {
  switch (action.type) {
    case SENT_DISPAY_FORMAT:
    case DELETED_DISPLAY_FORMAT:
    case SPAM_DISPLAY_FORMAT:
    case DRAFT_DISPLAY_FORMAT:
    case RECEIVED_DISPAY_FORMAT: {
      return {
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export default displayFormatReducer;
