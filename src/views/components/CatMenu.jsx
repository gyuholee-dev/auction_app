import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function CatMenu(props) {

  const {
    category = 'games',
  } = props;

  return (
    <nav id="catmenu" className="menu top">
      <ul className="items">
        <li className="item active">
          <Link to="/category">게임</Link>
        </li>
        <li className="item">
          <Link to="/category">만화</Link>
        </li>
        <li className="item">
          <Link to="/category">도서</Link>
        </li>
        <li className="item">
          <Link to="/category">음반</Link>
        </li>
      </ul>
    </nav>
  );
}