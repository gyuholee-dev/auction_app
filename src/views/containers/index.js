import Header, { HeaderStore } from './Header.jsx';
import Main, { MainStore } from './Main.jsx';
import Footer, { FooterStore } from './Footer.jsx';

export const reducers = {
  header: HeaderStore.reducer,
  main: MainStore.reducer,
  footer: FooterStore.reducer,
}
export {
  Header,
  Main,
  Footer,
}