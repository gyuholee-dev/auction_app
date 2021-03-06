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

export const MainStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.main);
  },
  actions: {
    ...store.actions,
  }
}

export default function Main(props) {
  const { page } = props;
  const { prevCat } = MainStore.getState();
  const { setPrevCat } = MainStore.actions;
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
          <ImgSlide />
          <ItemList />
        </main>
      )
    case 'search':
    case 'myauction':
      if (page === 'search' && !category && !query) {
        return (<main className='slide'><SearchHistory /></main>);
      } else {
        return (
          <TransitionGroup className="transition-group" appear={true}>
            <CSSTransition {...transitionProps}>
              <Routes>
                <Route path="/" element={(<main><ItemList /></main>)} />
                <Route path="/:category" element={(<main><ItemList /></main>)} />
                <Route path="/:category/:query" element={(<main><ItemList /></main>)} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        )
      }
    case 'myservice':
      return (
        <main>
          <MemberInfo />
          <PointBalance />
          <TrxHistory />
        </main>
      )
  }
}
