import React, { useEffect, useState } from 'react';
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
import { appConfig } from '/configs/appConfig';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

const store = createSlice({
  name: 'app',
  initialState : {
    title: '슈퍼레어',
    subTitle: '',
    theme: 'dark',
    stack: [],
  },
  reducers: {
    setTitle: (state, action) => { state.title = action.payload },
    setSubTitle: (state, action) => { state.subTitle = action.payload },
    setTheme: (state, action) => { 
      state.theme = action.payload;
      const themeClass = action.payload ? `theme-${action.payload}` : '';
      document.body.className = themeClass;
    },
    pushStack: (state, action) => { state.stack.push(action.payload) },
    resetStack: (state, action) => { state.stack = [0] },
  }
});

const actions = {
  ...store.actions,
  getCurrentPath: () => {
    const pageConf = appConfig.pages;
    let path = window.location.pathname.split('/')[1];
    if (path === '') path = 'home';
    if (!pageConf[path]) path = 'notfound';
    return path;
  },
  getPageDepth: (currentPath=null, prev=0) => {
    if (!currentPath) currentPath = App.actions.getCurrentPath();
    const pageConf = appConfig.pages;
    if (currentPath==='notfound' || !pageConf[currentPath]) { 
      return prev+1;
    } else {
      return pageConf[currentPath].depth;
    }
  }
}

export const App = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.app);
  },
  elem: () => {
    const { title, subTitle, theme, stack } = App.getState();
    const { 
      setTitle, setSubTitle, setTheme, 
      pushStack, resetStack, getCurrentPath, getPageDepth } = App.actions;
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

    const dispatch = useDispatch();

    // function getPath() {
    //   return window.location.pathname;
    // }
    // function pushStack(pathname) {
    //   if (pathname == '/') { 
    //     dispatch(setStack([pathname])); 
    //   } else {
    //     dispatch(setStack([...stack, pathname]));
    //   }
    // }
    // function setTransition(elem, className) {
    //   elem.className = className;
    // }

    useEffect(() => {
      dispatch(setTheme(theme));
    }, [theme]);

    useEffect(() => {
      if (pathname === '/') {
        dispatch(resetStack());
      } else {
        dispatch(pushStack(getPageDepth(pathname, stack.at(-1))));
      }
    }, [pathname]);

    const transitionProps = {
      key: pathname,
      classNames: "anim",
      timeout: { enter: 350, exit: 350 },
      onEnter: (node) => {
        const lastStack = stack.at(-1);
        const currentDepth = getPageDepth(getCurrentPath(), lastStack);
        if (lastStack < currentDepth) {
          node.className = 'slide anim-enter';
        } else {
          node.className = 'fade anim-enter';
        }
      },
      onExit: (node) => {
        const lastStack = stack.at(-1);
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
            <Route path="/" element={<Home.elem />} />
            <Route path="/search/*" element={<Search.elem />}>
              <Route path=":category" element={<Search.elem />} />
              <Route path=":category/:query" element={<Search.elem />} />
              <Route path="" element={<Search.elem />} />
            </Route>
            <Route path="/myauction/*" element={<MyAuction.elem />}>
              <Route path=":category" element={<MyAuction.elem />} />
              <Route path="" element={<MyAuction.elem />} />
            </Route>
            <Route path="/myservice/*" element={<MyService.elem />}>
              <Route path=":category" element={<MyService.elem />} />
              <Route path="" element={<MyService.elem />} />
            </Route>
            <Route path="*" element={<NotFound.elem />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

const rootReducer = {
  ...compReducers,
  ...contReducers,
  ...pageReducers,
  app: App.reducer,
};

const rootStore = configureStore({
  reducer: combineReducers(rootReducer)
});

const root = createRoot(document.getElementById('app-root'));
root.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <App.elem />
    </BrowserRouter>
  </Provider>
);