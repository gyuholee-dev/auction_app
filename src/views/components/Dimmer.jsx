import React, { useEffect, useState } from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { toggleSideMenu, toggleDimmer } from '/src/states';
import { timeout } from '/src/utils/functions';

export default function Dimmer(props) {

  const sideMenu = useSelector(state => state.sideMenu);
  const dimmer = useSelector(state => state.dimmer);
  const dimmClass = dimmer.className;

  const dispatch = useDispatch();
  function toggleMenu() {
    dispatch(toggleSideMenu());
  }
  function setDimmer() {
    dispatch(toggleDimmer());
  }

  useEffect(() => {
    if (sideMenu.open === dimmer.show) return;
    setDimmer();
  }, [sideMenu.open]);

  return (
    <div className={dimmClass} onClick={toggleMenu}></div>
  );
}