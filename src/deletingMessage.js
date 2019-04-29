const MAX_MESSAGES = 30;

const messagesListNode = document.querySelector('.messages-list');

function getChildIndex(node) {
  if (node.tagName.toLowerCase() != 'li') {
    return null;
  }
  let p = node.parentNode;
  if (p == null) {
    console.log(node);
  }
  let idx = p.childElementCount - 1;
  while (node.nextElementSibling != null) {
    node = node.nextElementSibling;
    idx--;
  }
  return idx;
}

export function deleteClick() {
  const selectedMessages = document.querySelectorAll('.message-snippet__message-tick:checked');
  const startSize = this.messages.length;
  const deletingCnt = selectedMessages.length;
  if (deletingCnt === 0) {
    return;
  }
  selectedMessages.forEach(function(currentValue, currentIndex, listObj) {
    currentValue.parentNode.classList.add('messages-list__message-snippet_deleted');
  });
  const deletedMessages = document.querySelectorAll('.messages-list__message-snippet_deleted');
  setTimeout(
    function(deletedMessages) {
      deletedMessages.forEach(function(cur) {
        let idx = getChildIndex(cur);
        this.messages.splice(this.messages.length - 1 - idx, 1);
        cur.remove();
      });
    },
    500,
    deletedMessages
  );
  if (startSize > MAX_MESSAGES) {
    var cur = startSize - 1 - MAX_MESSAGES;
    for (var i = 0; i < deletingCnt && cur >= 0; i++, cur--) {
      messagesListNode.appendChild(this.messages[cur].node);
    }
  }
  document.querySelector('.mail-box__select-all input').checked = false;
}
