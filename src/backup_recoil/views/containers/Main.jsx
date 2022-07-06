import React, { useEffect, useState } from 'react';
import { useParams, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { 
  SearchHistory,
  ItemList,
} from '../components';

export default function Main(props) {

  const location = useLocation();
  let { pathname } = location;
  pathname = '/' + pathname.split('/')[2];

  const transitionProps = {
    key: pathname,
    classNames: "anim",
    timeout: { enter: 350, exit: 350 },
  }

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition {...transitionProps}>
        <Routes location={location}>
          <Route path="/" element={(<main><SearchHistory /></main>)} />
          <Route path="/:category" element={(<main><ItemList /></main>)} />
          <Route path="/:category/:query" element={(<main><ItemList /></main>)} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}
