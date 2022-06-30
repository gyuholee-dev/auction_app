import { combineReducers } from 'redux';
import sideMenu from './sideMenu.js';

export const rootReducer = combineReducers({
  sideMenu
});

export { 
  toggleSideMenu 
} from './sideMenu.js';