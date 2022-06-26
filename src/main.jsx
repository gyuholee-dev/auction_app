import * as url from 'url';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './views/Home';

// scss
import './styles/style.scss';

// -----------------------------------------------------------------------

// const urls = url.parse(window.location.href, true);
// const pathname = urls.pathname;
// const query = urls.query;

const root = createRoot(document.getElementById('root'));
root.render(<Home />);