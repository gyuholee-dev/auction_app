import * as url from 'url';

import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import { Home } from './views';

// scss
import './scss/style.scss';

// -----------------------------------------------------------------------

// const urls = url.parse(window.location.href, true);
// const pathname = urls.pathname;
// const query = urls.query;

const root = createRoot(document.getElementById('root'));
root.render(<Home />);


