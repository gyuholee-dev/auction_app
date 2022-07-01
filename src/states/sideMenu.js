import { timeout } from '/src/utils/functions.js';

const initialState = {
  open: false,
}

// --------------------------------------------------

// export function toggleSideMenu() {
//   return {
//     type: 'TOGGLE_SIDEMENU',
//   }
// }

// export const toggleSideMenuAsync = () => dispatch => {
//   dispatch(toggleSideMenu());
//   console.log('toggleSideMenuAsync');
// }

// export function toggleSideMenu() {
//   return async (dispatch) => {
//     dispatch({type:'TOGGLE_SIDEMENU'});
//     await timeout(1000);
//     console.log('toggleSideMenu');
//   }
// }

export function toggleSideMenu() {
  return async (dispatch, getState) => {
    const { sideMenu } = getState();
    dispatch({type:'TOGGLE_SIDEMENU', value: !sideMenu.open});
    // await timeout(1000);
    // console.log('toggleSideMenu', getState());
  }
}


// --------------------------------------------------

export default function sideMenu(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEMENU':
      return {
        ...state,
        // open: !state.open
        open: action.value,
      }
    default:
      return state;
  }
}
