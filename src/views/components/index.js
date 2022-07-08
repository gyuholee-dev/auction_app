import { Dimmer } from './Dimmer.jsx';
import { SideMenu } from './SideMenu.jsx';
import { TopMenu } from './TopMenu.jsx';
import { BottomMenu } from './BottomMenu.jsx';
import { CategoryTab } from './CategoryTab.jsx';
import { ImgSlide } from './ImgSlide.jsx';
import { OrderSelect } from './OrderSelect.jsx';
import { ItemList } from './ItemList.jsx';
import { SearchHistory } from './SearchHistory.jsx';
import { MemberInfo } from './MemberInfo.jsx';
import { PointBalance } from './PointBalance.jsx';
import { TrxHistory } from './TrxHistory.jsx';
import { NoticeSlide } from './NoticeSlide.jsx';
import { InfoMenu } from './InfoMenu.jsx';

export const reducers = {
  dimmer: Dimmer.reducer,
  sideMenu: SideMenu.reducer,
  topMenu: TopMenu.reducer,
  bottomMenu: BottomMenu.reducer,
  categoryTab : CategoryTab.reducer,
  imgSlide : ImgSlide.reducer,
  orderSelect : OrderSelect.reducer,
  itemList : ItemList.reducer,
  searchHistory : SearchHistory.reducer,
  memberInfo : MemberInfo.reducer,
  pointBalance : PointBalance.reducer,
  trxHistory : TrxHistory.reducer,
  noticeSlide : NoticeSlide.reducer,
  infoMenu : InfoMenu.reducer,
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