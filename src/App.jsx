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

import { Home, Search, NotFound } from '@pages';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

const store = createSlice({
  name: 'app',
  initialState : {
    page: 'home',
    title: '슈퍼레어',
    subTitle: '',
    theme: 'light',
  },
  reducers: {
    setTitle: (state, action) => { state.title = action.payload },
    setSubTitle: (state, action) => { state.subTitle = action.payload },
    setPage: (state, action) => { state.page = action.payload },
    setTheme: (state, action) => { state.theme = action.payload },
  }
});

const actions = {
  ...store.actions,
}

export const App = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.app);
  },
  elem: () => {
    const { title, page, stack } = App.getState();
    const location = useLocation();
    let { pathname } = location;
    pathname = '/' + pathname.split('/')[1];

    function getPath() {
      return window.location.pathname;
    }

    // const dispatch = useDispatch();
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

    // useEffect(() => {
    //   pushStack(pathname);
    // }, [pathname]);

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

// console.log(rootStore.getState());
// const listener = () => {
//   const state = rootStore.getState();
//   console.log(state);
// };
// rootStore.subscribe(listener);

const root = createRoot(document.getElementById('app-root'));
root.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <App.elem />
    </BrowserRouter>
  </Provider>
);