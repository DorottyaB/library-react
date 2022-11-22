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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
