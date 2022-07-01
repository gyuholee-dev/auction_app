import { combineReducers } from 'redux';

import sideMenu, { toggleSideMenu } from './sideMenu.js';
import dimmer, { toggleDimmer } from './dimmer.js';

export const rootReducer = combineReducers({
  sideMenu, dimmer
});
export {
  toggleSideMenu, toggleDimmer
}
