import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import cn from 'classnames';
import { useScroll } from '../customhooks';


const ButtonOpenSideMenu = (props) => {
  const { toggleMenu } = props;

  return (
    <button className="btn none" onClick={toggleMenu}>
      <i className="xi-bars"></i>
    </button>
  );
}

const ButtonNavSearch = (props) => {
  const { search = '/search' } = props;
  const navigate = useNavigate();

  return (
    <button className="btn none"
      onClick={()=>navigate(search)}>
      <i className="xi-search"></i>
    </button>
  );
}

const ButtonNavBack = (props) => {
  const { back = '/' } = props;
  const navigate = useNavigate();

  return (
    <button className="btn none"
      onClick={()=>navigate(-1)}>
      <i className="xi-angle-left"></i>
    </button>
  );
}

const ButtonTopMenu = (props) => {
  const type = props.type || 'menu';
  // const title = props.title || '';
  const onClick = props.onClick;
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
          onClick={()=>navigate(-1)}>
          <i className="xi-angle-left"></i>
        </button>
      );
  }
}


export default function TopMenu(props) {

  const { 
    title = '슈퍼레어', 
    path = null,
    toggleMenu 
  } = props;

  // const location = useLocation();
  // const { pathname } = location;
  // const path = pathname.split('/')[1] || 'home';


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

  const ButtonLeft = () => {
    switch (path) {
      case 'home':
        return <ButtonTopMenu type='menu' onClick={toggleMenu} />
      default:
        return <ButtonNavBack />
    }
  }

  const ButtonRight = () => {
    switch (path) {
      case 'home':
        return <ButtonTopMenu type='search' />
    }
  }

  const centerBlock = () => {
    switch (path) {
      default:
        return <h1>{title}</h1>
    }
  }

  return (
    <nav id="topmenu" className="menu top">
      <ButtonLeft />
      <div className={cn('title', {'center':path=='home'})}>{title}</div>
      <ButtonRight />
    </nav>
  );
}