import { combineReducers } from 'redux';

import app, { setTitle, setPage, setStack } from './app.js';
import sideMenu, { toggleSideMenu } from './sideMenu.js';
import dimmer, { toggleDimmer } from './dimmer.js';

export const rootReducer = combineReducers({
  app, sideMenu, dimmer
});
export {
  setTitle, setPage, setStack,
  toggleSideMenu, toggleDimmer,
}
