import { Home } from './Home.jsx';
import { Search } from './Search.jsx';
import { MyAuction } from './MyAuction.jsx';
import { NotFound } from './NotFound.jsx';

export const reducers = {
  home: Home.reducer,
  search: Search.reducer,
  myauction: MyAuction.reducer,
  notfound: NotFound.reducer,
}
export {
  Home,
  NotFound,
  Search,
  MyAuction,
}