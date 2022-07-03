import { timeout } from '/src/utils/functions.js';

const initialState = {
  show: false,
  className: 'dimm',
}

export function toggleDimmer() {
  return async(dispatch, getState) => {
    dispatch({type:'TOGGLE_DIMMER'});
    const { dimmer } = getState();
    if (dimmer.show === true) {
      dispatch({type:'SET_DIMMER_CLASS', value: 'dimm show'});
      await timeout(50);
      dispatch({type:'SET_DIMMER_CLASS', value: 'dimm show active'});
    } else {
      dispatch({type:'SET_DIMMER_CLASS', value: 'dimm show'});
      await timeout(250);
      dispatch({type:'SET_DIMMER_CLASS', value: 'dimm'});
    }
  }
}

export default function dimmer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_DIMMER':
      return {
        ...state,
        show: !state.show,
      }
    case 'SET_DIMMER_CLASS':
      return {
        ...state,
        className: action.value,
      }
    default:
      return state;
  }
}