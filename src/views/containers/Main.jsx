import React, { useEffect, useRef } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useParams } from "react-router-dom";

import { 
  ImgSlide,
  ItemList,
  SearchHistory,
  MemberInfo,
  PointBalance,
  TrxHistory,
} from '@components';

const store = createSlice({
  name: 'main',
  initialState : {
    prevCat: null,
  },
  reducers: {
    setPrevCat : (state, action) => { state.prevCat = action.payload },
  }
});

const actions = {
  ...store.actions,
}

export const Main = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.main);
  },
  elem: (props) => {
    const { page } = props;
    const { prevCat } = Main.getState();
    const { setPrevCat } = Main.actions;
    const { category = null, query = null } = useParams();

    const location = useLocation();
    const pathname = '/' + location.pathname.split('/')[2];

    const dispatch = useDispatch();

    const transitionProps = {
      key: pathname,
      classNames: "anim",
      timeout: {
        appear: 0,
        enter: 350,
        exit: 350,
      },
      onEnter: (node) => {
        if (!node) return;
        const currentCat = window.location.pathname.split('/')[2];
        if (!prevCat || !currentCat) { node.className = 'anim-stop'; return; }
        if (prevCat < category) {
          node.className = 'slide-in anim-enter';
        } else {
          node.className = 'slide-out anim-enter';
        }
      },
      onExit: (node) => {
        if (!node) return;
        const currentCat = window.location.pathname.split('/')[2];
        if (!currentCat) { node.className = 'anim-stop'; return; }
        if (prevCat < currentCat) {
          node.className = 'slide-in anim-exit';
        } else {
          node.className = 'slide-out anim-exit';
        }
      }
    }

    useEffect(() => {
      dispatch(setPrevCat(category));
    }, [category]);

    switch (page) {
      case 'home':
        return (
          <main>
            <ImgSlide.elem />
            <ItemList.elem />
          </main>
        )
      case 'search':
      case 'myauction':
        if (page === 'search' && !category && !query) {
          return (<main className='slide'><SearchHistory.elem /></main>);
        } else {
          return (
            <TransitionGroup className="transition-group" appear={true}>
              <CSSTransition {...transitionProps}>
                <Routes>
                  <Route path="/" element={(<main><ItemList.elem /></main>)} />
                  <Route path="/:category" element={(<main><ItemList.elem /></main>)} />
                  <Route path="/:category/:query" element={(<main><ItemList.elem /></main>)} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          )
        }
      case 'myservice':
        return (
          <main>
            <MemberInfo.elem />
            <PointBalance.elem />
            <TrxHistory.elem />
          </main>
        )
    }
  }
}
