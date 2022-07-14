import React, { useEffect, useState } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { SideMenuStore } from './SideMenu';
import { timeout } from '/src/utils/functions.js';

const store = createSlice({
  name: 'dimmer',
  initialState : {
    show: false,
    className: 'dimm',
  },
  reducers: {
    setShow: (state, action) => { state.show = action.payload },
    toggleShow: (state, action) => { state.show = !state.show },
    setClass: (state, action) => { state.className = action.payload },
  }
});

export const DimmerStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.dimmer);
  },
  actions: {
    ...store.actions,
    toggleDimm: () => {
      return async(dispatch, getState) => {
        const { toggleShow, setClass } = DimmerStore.actions;
        dispatch(toggleShow());
        const { dimmer } = getState();
        if (dimmer.show === true) {
          dispatch(setClass('dimm show'));
          await timeout(50);
          dispatch(setClass('dimm show active'));
        } else {
          dispatch(setClass('dimm show'));
          await timeout(250);
          dispatch(setClass('dimm'));
        }
      }
    }
  }
}

export default function Dimmer(props) {
  const dispatch = useDispatch();
  const sideMenu = SideMenuStore.getState();
  const state = DimmerStore.getState();
  const { toggleOpen } = SideMenuStore.actions;
  const { toggleDimm } = DimmerStore.actions;

  useEffect(() => {
    if (sideMenu.open === state.show) return;
    dispatch(toggleDimm());
  }, [sideMenu.open]);

  return (
    <div className={state.className} onClick={()=>dispatch(toggleOpen())}></div>
  )
}