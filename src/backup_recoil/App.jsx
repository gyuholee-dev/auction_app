import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { Home } from './views/Home';
// import Search from './views/Search';
// import NotFound from './views/NotFound';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

export const App = {
  state: atom({
    key: 'appState',
    default: {
      title: '슈퍼레어',
      page: 'home',
      stack: [],
    }
  }),

  elem: () => {
    const [appState, setAppState] = useRecoilState(App.state);
    const title = appState.title;
    const page = appState.page;
    const stack = appState.stack;
    
    const location = useLocation();
    let { pathname } = location;
    pathname = '/' + pathname.split('/')[1];
  
    // function getPath() {
    //   return window.location.pathname;
    // }
  
    // const dispatch = useDispatch();
    // function pushStack(pathname) {
    //   if (pathname == '/') { 
    //     dispatch(setStack([pathname])); 
    //   } else {
    //     dispatch(setStack([...stack, pathname]));
    //   }
    // }
  
    // useEffect(() => {
    //   pushStack(pathname);
    // }, [pathname]);
  
    // function setTransition(elem, className) {
    //   elem.className = className;
    // }

    const transitionProps = {
      key: pathname,
      classNames: "anim",
      timeout: { enter: 350, exit: 350 },
      // onExit: (elem) => {
      //   const lastStack = stack.at(-1);
      //   const incomePath = '/' + getPath().split('/')[1];
      //   if (lastStack === incomePath) {
      //     setTransition(elem, 'fade');
      //   }
      // }
    }
  
    // https://reactcommunity.org/react-transition-group/
    // https://baeharam.netlify.app/posts/react/React-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%84%ED%99%98-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
    // return (
    //   <TransitionGroup className="transition-group">
    //     <CSSTransition {...transitionProps}>
    //       <Routes location={location}>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/search/*" element={<Search />}>
    //           <Route path=":category" element={<Search />} />
    //           <Route path=":category/:query" element={<Search />} />
    //           <Route path="" element={<Search />} />
    //         </Route>
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </CSSTransition>
    //   </TransitionGroup>
    // )
    return (
      <TransitionGroup className="transition-group">
        <CSSTransition {...transitionProps}>
          <Routes location={location}>
            <Route path="/" element={<Home.elem />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

const root = createRoot(document.getElementById('app-root'));
// root.render(
//   <RecoilRoot>
//     <BrowserRouter>
//       <App.elem />
//     </BrowserRouter>
//   </RecoilRoot>
// );
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App.elem />
    </BrowserRouter>
  </RecoilRoot>
);