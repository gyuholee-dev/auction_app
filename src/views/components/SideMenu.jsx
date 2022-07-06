import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

const store = createSlice({
  name: 'sideMenu',
  initialState : {
    open: false,
  },
  reducers: {
    setOpen: (state, action) => { state.open = action.payload },
    toggleOpen: (state, action) => { state.open = !state.open },
  },
});

export const SideMenu = {
  actions: store.actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.sideMenu);
  },
  elem: () => {
    const dispatch = useDispatch();
    const state = SideMenu.getState();
    const { toggleOpen } = SideMenu.actions;

    const menuClass = state.open?'open':'close';
    return (
      <aside>
        <nav id="sidemenu" className={menuClass}>
          <div className="header">
            <div className="user"></div>
            <button className="btn none close" onClick={()=>dispatch(toggleOpen())}>
              <i className="xi-close"></i>
            </button>
          </div>
        </nav>
      </aside>
    )
  }
}