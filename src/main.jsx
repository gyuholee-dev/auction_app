import * as url from 'url';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import NotFound from './views/NotFound';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

// const urls = url.parse(window.location.href, true);
// const pathname = urls.pathname;
// const query = urls.query;

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);