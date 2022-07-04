import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const BottomMenu = {
  elem: () => {
    const navigate = useNavigate();
    return (
      <nav id="bottommenu" className="menu bottom">
        <button className="btn none"
          onClick={() => navigate('/')}>
          <i className="xi-home-o"></i>
          <span>홈</span>
        </button>
        <button className="btn none"
          onClick={() => navigate('/search/games')}>
          <i className="xi-document"></i>
          <span>카테고리</span>
        </button>
        <button className="btn none"
          onClick={() => navigate('/auction')}>
          <i className="xi-gift-o"></i>
          <span>나의 경매</span>
        </button>
        <button className="btn none"
          onClick={() => navigate('/mypage')}>
          <i className="xi-user-o"></i>
          <span>나의 슈퍼레어</span>
        </button>
      </nav>
    )
  }
}