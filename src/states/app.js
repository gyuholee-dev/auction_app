const initialState = {
  title: '슈퍼레어',
  page: 'home',
  stack: [],
}

export function setTitle(title) {
  return {
    type: 'SET_TITLE',
    value: title,
  }
}

export function setPage(page) {
  return {
    type: 'SET_PAGE',
    value: page,
  }
}

export function setStack(stack = []) {
  return {
    type: 'SET_STACK',
    value: stack,
  }
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.value,
      }
    case 'SET_PAGE':
      return {
        ...state,
        page: action.value,
      }
    case 'SET_STACK':
      return {
        ...state,
        stack: action.value,
      }
    default:
      return state;
  }
}