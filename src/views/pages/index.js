import Home, { HomeStore } from './Home.jsx';
import NotFound, { NotFoundStore } from './NotFound.jsx';
import Search, { SearchStore } from './Search.jsx';
import MyAuction, { MyAuctionStore } from './MyAuction.jsx';
import MyService, { MyServiceStore } from './MyService.jsx';

export const reducers = {
  home: HomeStore.reducer,
  notfound: NotFoundStore.reducer,
  search: SearchStore.reducer,
  myauction: MyAuctionStore.reducer,
  myservice: MyServiceStore.reducer,
}
export {
  Home,
  NotFound,
  Search,
  MyAuction,
  MyService,
}