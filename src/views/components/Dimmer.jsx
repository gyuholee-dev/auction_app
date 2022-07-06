import React, { useEffect, useState } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { SideMenu } from './SideMenu';
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

export const Dimmer = {
  actions: store.actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.dimmer);
  },
  toggle: () => {
    return async(dispatch, getState) => {
      const { toggleShow, setClass } = Dimmer.actions;
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
  },
  elem: () => {
    const dispatch = useDispatch();
    const sideMenu = SideMenu.getState();
    const state = Dimmer.getState();

    useEffect(() => {
      if (sideMenu.open === state.show) return;
      dispatch(Dimmer.toggle());
    }, [sideMenu.open]);

    return (
      <div className={state.className} onClick={()=>dispatch(SideMenu.toggle())}></div>
    )
  }
}
Object.assign(Dimmer, Dimmer.actions);