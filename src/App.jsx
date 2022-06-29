import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './views/Home';
import Category from './views/Category';
import Search from './views/Search';
import NotFound from './views/NotFound';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

function App() {

  const [ stack, setStack ] = useState([]);

  const location = useLocation();
  const { pathname } = location;
  // const path = pathname.split('/')[1]??'home';

  function getPath() {
    return window.location.pathname;
  }

  function pushStack(path) {
    if (getPath() == '/') { 
      setStack([path]); 
    } else {
      setStack([...stack, path]);
    }
  }

  useEffect(() => {
    pushStack(pathname);
  }, [pathname]);

  const transitionProps = {
    key: pathname,
    classNames: "anim",
    timeout: { enter: 350, exit: 350 },
    onExit: () => {
      // console.log('onExit', stack);
    }
  }

  // https://reactcommunity.org/react-transition-group/
  // https://baeharam.netlify.app/posts/react/React-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%84%ED%99%98-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition {...transitionProps}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

const root = createRoot(document.getElementById('app-root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);