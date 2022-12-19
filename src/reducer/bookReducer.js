export function bookReducer(books, action) {
  switch (action.type) {
    case 'added': {
      return [...books, action.book];
    }
    case 'changed': {
      return books.map(b => {
        if (b.id === action.book.id) {
          return action.book;
        } else {
          return b;
        }
      });
    }
    case 'deleted': {
      return books.filter(b => b.id !== action.id);
    }
    case 'sort_by_author': {
      return [...books].sort((a, b) => (a.author > b.author ? 1 : -1));
    }
    case 'sort_by_read': {
      return [...books].sort((a, b) => Number(a.isRead) - Number(b.isRead));
    }
    case 'sort_by_newest': {
      return [...books].sort((a, b) => b.date - a.date);
    }
    case 'sort_by_oldest': {
      return [...books].sort((a, b) => a.date - b.date);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
