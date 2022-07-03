import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import cn from 'classnames';

export default function CatMenu(props) {

  const {
    category = 'games',
  } = props;

  return (
    <nav id="catmenu" className="menu top">
      <ul className="items">
        <li className={cn('item', {'active':category=='games'})}>
          <Link to="/search/games">게임</Link>
        </li>
        <li className={cn('item', {'active':category=='comics'})}>
          <Link to="/search/comics">만화</Link>
        </li>
        <li className={cn('item', {'active':category=='books'})}>
          <Link to="/search/books">도서</Link>
        </li>
        <li className={cn('item', {'active':category=='music'})}>
          <Link to="/search/music">음반</Link>
        </li>
      </ul>
    </nav>
  );
}