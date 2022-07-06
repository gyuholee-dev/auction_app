import { Home } from './Home.jsx';
import { NotFound } from './NotFound.jsx';
import { Search } from './Search.jsx';

export const reducers = {
  home: Home.reducer,
  notfound: NotFound.reducer,
  search: Search.reducer,
}
export {
  Home,
  NotFound,
  Search,
}