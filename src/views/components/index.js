import Dimmer, { DimmerStore } from './Dimmer.jsx';
import SideMenu, { SideMenuStore } from './SideMenu.jsx';
import TopMenu, { TopMenuStore } from './TopMenu.jsx';
import BottomMenu, { BottomMenuStore } from './BottomMenu.jsx';
import CategoryTab, { CategoryTabStore } from './CategoryTab.jsx';
import ImgSlide, { ImgSlideStore } from './ImgSlide.jsx';
import OrderSelect, { OrderSelectStore } from './OrderSelect.jsx';
import ItemList, { ItemListStore } from './ItemList.jsx';
import SearchHistory, { SearchHistoryStore } from './SearchHistory.jsx';
import MemberInfo, { MemberInfoStore } from './MemberInfo.jsx';
import PointBalance, { PointBalanceStore } from './PointBalance.jsx';
import TrxHistory, { TrxHistoryStore } from './TrxHistory.jsx';
import NoticeSlide, { NoticeSlideStore } from './NoticeSlide.jsx';
import InfoMenu, { InfoMenuStore } from './InfoMenu.jsx';

export const reducers = {
  dimmer: DimmerStore.reducer,
  sideMenu: SideMenuStore.reducer,
  topMenu: TopMenuStore.reducer,
  bottomMenu: BottomMenuStore.reducer,
  categoryTab : CategoryTabStore.reducer,
  imgSlide : ImgSlideStore.reducer,
  orderSelect : OrderSelectStore.reducer,
  itemList : ItemListStore.reducer,
  searchHistory : SearchHistoryStore.reducer,
  memberInfo : MemberInfoStore.reducer,
  pointBalance : PointBalanceStore.reducer,
  trxHistory : TrxHistoryStore.reducer,
  noticeSlide : NoticeSlideStore.reducer,
  infoMenu : InfoMenuStore.reducer,
}
export {
  Dimmer,
  SideMenu,
  TopMenu,
  BottomMenu,
  CategoryTab,
  ImgSlide,
  OrderSelect,
  ItemList,
  SearchHistory,
  MemberInfo,
  PointBalance,
  TrxHistory,
  NoticeSlide,
  InfoMenu,
}