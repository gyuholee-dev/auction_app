import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { toggleSideMenu } from '/src/states';

import cn from 'classnames';
// import { useScroll } from '../customhooks';

const ButtonTopMenu = (props) => {
  const {
    type = 'menu',
    onClick,
    link,
  } = props;
  const navigate = useNavigate();

  switch (type) {
    case 'menu':
      return (
        <button className="btn none" onClick={onClick}>
          <i className="xi-bars"></i>
        </button>
      );
    case 'search':
      return (
        <button className="btn none"
          onClick={()=>navigate('/search')}>
          <i className="xi-search"></i>
        </button>
      );
    case 'back':
      return (
        <button className="btn none"
          onClick={()=>navigate(link?link:-1)}>
          <i className="xi-angle-left"></i>
        </button>
      );
  }
}


export default function TopMenu(props) {

  const { 
    title = '슈퍼레어', 
    page = null
  } = props;

  // const [menuClass, setMenuClass] = useState('menu top');
  // const { scrollY, scrollDirection } = useScroll();

  // function setClass() {
  //   if (scrollDirection === 'up') {
  //     if (scrollY < 56) {
  //       setMenuClass('menu top');
  //     } else {
  //       setMenuClass('menu top hide');
  //     }
  //   } else if (scrollDirection === 'down') {
  //     setMenuClass('menu top show');
  //   }
  // }

  // useEffect(() => {
  //   setClass();
  // });

  const dispatch = useDispatch();
  function toggleMenu() {
    dispatch(toggleSideMenu());
  }

  const ButtonLeft = () => {
    switch (page) {
      case 'home':
        return <ButtonTopMenu type='menu' onClick={toggleMenu} />
      default:
        return <ButtonTopMenu type='back' link={'/'}/>
    }
  }

  const ButtonRight = () => {
    switch (page) {
      case 'home':
        return <ButtonTopMenu type='search' />
    }
  }

  const CenterBlock = () => {
    switch (page) {
      case 'category':
      case 'search':
        return (
          <div className="seachbox">
            <input type="text" name="search" placeholder="검색어를 입력하세요" autoComplete="off"/>
          </div>
        );
      default:
        return <div className={cn('title', {'center':page=='home'})}>{title}</div>
    }
  }

  return (
    <nav id="topmenu" className="menu top">
      <ButtonLeft />
      <CenterBlock />
      <ButtonRight />
    </nav>
  );
}