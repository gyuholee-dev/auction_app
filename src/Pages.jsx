import React, { useEffect, useState } from 'react';
import { match } from 'path-to-regexp';

import { Home, NotFound, Search, MyAuction, MyService } from '@pages';
import { appConfig } from '/configs/app.config';

export const Pages = {
  elem: () => {
    const pathMatch = match(`/:page?/:category?/:query?`, { decode: decodeURIComponent });
    const pathname = window.location.pathname;
    const params = pathMatch(pathname).params;
    const path = pathname.split('/')[1];

    // console.log(path);

    // useEffect(() => {
    //   console.log(path);
    // }, [path]);

    switch (path) {
      case '':
        return <Home.elem />
      case 'search':
        return <Search.elem />
      case 'myauction':
        return <MyAuction.elem />
      case 'myservice':
        return <MyService.elem />
      default:
        return <NotFound.elem />
    }
  }
}