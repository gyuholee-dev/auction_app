import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

const store = createSlice({
  name: 'sideMenu',
  initialState : {
    open: false,
  },
  reducers: {
    setOpen: (state, action) => { state.open = action.payload.open },
  }
});

export const SideMenu = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.sideMenu);
  },
  toggle: () => {
    return async (dispatch, getState) => {
      const { sideMenu } = getState();
      const setOpen = store.actions.setOpen;
      dispatch(setOpen({ open: !sideMenu.open }));
    }
  },
  elem: () => {
    const dispatch = useDispatch();
    const state = SideMenu.getState();
    const menuClass = state.open?'open':'close';
    return (
      <aside>
        <nav id="sidemenu" className={menuClass}>
          <div className="header">
            <div className="user"></div>
            <button className="btn none close" onClick={()=>dispatch(SideMenu.toggle())}>
              <i className="xi-close"></i>
            </button>
          </div>
        </nav>
      </aside>
    )
  }
}