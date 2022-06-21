import * as url from 'url';

import React, { Component }  from 'react';
import { createRoot } from 'react-dom/client';

import { Home } from './views';

// scss
import './scss/style.scss';

// -----------------------------------------------------------------------

const urls = url.parse(window.location.href, true);
const pathname = urls.pathname;
const query = urls.query;

const body = createRoot(document.body);
body.render(<Home />);
