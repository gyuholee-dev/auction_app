
const initialState = {
  open: false,
}

// --------------------------------------------------

export function toggleSideMenu() {
  return {
    type: 'TOGGLE_SIDEMENU',
  }
}

// --------------------------------------------------

export default function sideMenu(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEMENU':
      return {
        ...state,
        open: !state.open
      }
    default:
      return state;
  }
}
