import React, { useEffect, useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { timeout } from '/src/utils/functions.js';

import { SideMenu } from './SideMenu';

export const Dimmer = {
  state: atom({
    key: 'dimmerState',
    default: {
      show: false,
      className: 'dimm',
    },
  }),
  toggleDimmer: async () => {
    const [dimmer, setDimmer] = useRecoilState(Dimmer.state);
    setDimmer({...dimmer, show: !dimmerState.show});
    if (dimmer.show === true) {
      setDimmer({...dimmer, className: 'dimm show'});
      await timeout(50);
      setDimmer({...dimmer, className: 'dimm show active'});
    } else {
      setDimmer({...dimmer, className: 'dimm show'});
      await timeout(250);
      setDimmer({...dimmer, className: 'dimm'});
    }
  },
  elem: () => {
    const sideMenu = useRecoilValue(SideMenu.state);
    const dimmer = useRecoilValue(Dimmer.state);
  
    useEffect(() => {
      if (sideMenu.open === dimmer.show) return;
      Dimmer.toggleDimmer();
    }, [sideMenu.open]);
  
    return (
      <div className={dimmer.className} 
        onClick={SideMenu.toggleSideMenu}></div>
    )
  }
}