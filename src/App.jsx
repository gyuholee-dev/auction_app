import React, { useEffect, useState } from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './states';
import ReduxThunk from 'redux-thunk';

import { setTitle, setPage, setStack } from './states';

import Home from './views/Home';
import Category from './views/Category';
import Search from './views/Search';
import NotFound from './views/NotFound';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

function App() {

  const appState = useSelector(state => state.app);
  const title = appState.title;
  const page = appState.page;
  const stack = appState.stack;
  
  const location = useLocation();
  const { pathname } = location;

  function getPath() {
    return window.location.pathname;
  }

  const dispatch = useDispatch();
  function pushStack(pathname) {
    if (pathname == '/') { 
      dispatch(setStack([pathname])); 
    } else {
      dispatch(setStack([...stack, pathname]));
    }
  }

  function setTransition(elem, className) {
    elem.className = className;
  }

  useEffect(() => {
    pushStack(pathname);
  }, [pathname]);

  const transitionProps = {
    key: pathname,
    classNames: "anim",
    timeout: { enter: 350, exit: 350 },
    onExit: (elem) => {
      const lastStack = stack.at(-1);
      const incomePath = '/' + getPath().split('/')[1];
      if (lastStack === incomePath) {
        setTransition(elem, 'fade');
      }
    }
  }

  // https://reactcommunity.org/react-transition-group/
  // https://baeharam.netlify.app/posts/react/React-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%84%ED%99%98-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition {...transitionProps}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/search/*" element={<Search />}>
            <Route path=":query" element={<Search />} />
            <Route path=":category/:query" element={<Search />} />
            <Route path="" element={<Search />} />
          </Route>
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk]
});

// console.log(store.getState());
// const listener = () => {
//   const state = store.getState();
//   console.log(state);
// };
// store.subscribe(listener);

const root = createRoot(document.getElementById('app-root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);