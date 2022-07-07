import { Dimmer } from './Dimmer.jsx';
import { SideMenu } from './SideMenu.jsx';
import { TopMenu } from './TopMenu.jsx';
import { CategoryTab } from './CategoryTab.jsx';
import { ImgSlide } from './ImgSlide.jsx';
import { OrderSelect } from './OrderSelect.jsx';
import { ItemList } from './ItemList.jsx';
import { SearchHistory } from './SearchHistory.jsx';
import { BottomMenu } from './BottomMenu.jsx';

export const reducers = {
  dimmer: Dimmer.reducer,
  sideMenu: SideMenu.reducer,
  topMenu: TopMenu.reducer,
  categoryTab : CategoryTab.reducer,
  imgSlide : ImgSlide.reducer,
  orderSelect : OrderSelect.reducer,
  itemList : ItemList.reducer,
  searchHistory : SearchHistory.reducer,
  bottomMenu: BottomMenu.reducer,
}
export {
  Dimmer,
  SideMenu,
  TopMenu,
  CategoryTab,
  ImgSlide,
  OrderSelect,
  ItemList,
  SearchHistory,
  BottomMenu,
}