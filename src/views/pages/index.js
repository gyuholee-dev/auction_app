import { Home } from './Home.jsx';
import { NotFound } from './NotFound.jsx';
import { Search } from './Search.jsx';
import { MyAuction } from './MyAuction.jsx';
import { MyService } from './MyService.jsx';

export const reducers = {
  home: Home.reducer,
  notfound: NotFound.reducer,
  search: Search.reducer,
  myauction: MyAuction.reducer,
  myservice: MyService.reducer,
}
export {
  Home,
  NotFound,
  Search,
  MyAuction,
  MyService,
}