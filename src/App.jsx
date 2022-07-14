import React, { useEffect, useState, useRef } from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { combineReducers } from 'redux';
import { Provider } from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';

import { reducers as compReducers } from '@components';
import { reducers as contReducers } from '@containers';
import { reducers as pageReducers } from '@pages';

import { Home, NotFound, Search, MyAuction, MyService } from '@pages';
import { appConfig } from '/configs/app.config';
import Head, { HeadStore } from './Head';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

const store = createSlice({
  name: 'app',
  initialState : {},
  reducers: {}
});

export const AppStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.head);
  },
  actions: {
    ...store.actions,
    getCurrentPath: () => {
      const pageConf = appConfig.pages;
      let path = window.location.pathname.split('/')[1];
      if (path === '') path = 'home';
      if (!pageConf[path]) path = 'notfound';
      return path;
    },
    getPageDepth: (currentPath=null, prev=0) => {
      if (!currentPath) currentPath = AppStore.actions.getCurrentPath();
      const pageConf = appConfig.pages;
      if (currentPath==='notfound' || !pageConf[currentPath]) { 
        return prev+1;
      } else {
        return pageConf[currentPath].depth;
      }
    }
  }
}

export default function App() {
  let stack = useRef([0]);
  const { getCurrentPath, getPageDepth } = AppStore.actions;
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === '') {
      stack.current = [0];
    } else {
      stack.current.push(getPageDepth(pathname, stack.current.at(-1)));
    }
  }, [pathname]);

  const transitionProps = {
    key: pathname,
    classNames: "anim",
    timeout: { enter: 350, exit: 350 },
    onEnter: (node) => {
      const lastStack = stack.current.at(-1);
      const currentDepth = getPageDepth(getCurrentPath(), lastStack);
      if (lastStack < currentDepth) {
        node.className = 'slide anim-enter';
      } else {
        node.className = 'fade anim-enter';
      }
    },
    onExit: (node) => {
      const lastStack = stack.current.at(-1);
      const currentDepth = getPageDepth(getCurrentPath(), lastStack);
      if (lastStack < currentDepth) {
        node.className = 'fade';
      } else {
        node.className = 'slide';
      }
    }
  }
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition {...transitionProps}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/search/*" element={<Search />}>
            <Route path=":category" element={<Search />} />
            <Route path=":category/:query" element={<Search />} />
          </Route>
          <Route path="/myauction/*" element={<MyAuction />}>
            <Route path=":category" element={<MyAuction />} />
          </Route>
          <Route path="/myservice/*" element={<MyService />}>
            <Route path=":category" element={<MyService />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

const rootStore = configureStore({
  reducer: combineReducers({
    ...compReducers,
    ...contReducers,
    ...pageReducers,
    head: HeadStore.reducer,
    app: AppStore.reducer,
  })
});

const root = createRoot(document.getElementById('app-root'));
root.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <Head />
      <App />
    </BrowserRouter>
  </Provider>
);