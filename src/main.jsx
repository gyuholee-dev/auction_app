import * as url from 'url';

import React, { Component }  from 'react';
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import Home from './views/Home';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

// const urls = url.parse(window.location.href, true);
// const pathname = urls.pathname;
// const query = urls.query;

// ReactDOM.render(<Home />, document.body);
const root = createRoot(document.getElementById('root'));
root.render(<Home />);
