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

import { Pages } from './Pages';

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
  },
  reducers: {
    setTitle: (state, action) => { state.title = action.payload },
    setSubTitle: (state, action) => { state.subTitle = action.payload },
    setTheme: (state, action) => { 
      state.theme = action.payload;
      const themeClass = action.payload ? `theme-${action.payload}` : '';
      document.body.className = themeClass;
    },
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
    const { title, subTitle, theme } = App.getState();
    let stack = useRef([0]);
    const { 
      setTitle, setSubTitle, setTheme, 
      getCurrentPath, getPageDepth } = App.actions;
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setTheme(theme));
    }, [theme]);

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
            <Route path="*" element={<Pages.elem />} />
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