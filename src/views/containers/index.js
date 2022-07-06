import { Header } from './Header.jsx';
import { Main } from './Main.jsx';
import { Footer } from './Footer.jsx';

export const reducers = {
  header: Header.reducer,
  main: Main.reducer,
  footer: Footer.reducer,
}
export {
  Header,
  Main,
  Footer,
}