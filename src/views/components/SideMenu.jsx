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

export const SideMenuStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.sideMenu);
  },
  actions: {
    ...store.actions,
  }
}

export default function SideMenu(props) {
  const dispatch = useDispatch();
  const state = SideMenuStore.getState();
  const { toggleOpen } = SideMenuStore.actions;

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