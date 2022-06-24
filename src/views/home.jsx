import React, { Component } from 'react';

import { 
  SideMenu, 
  TopMenu,
  Main,
  BottomMenu,
} from './components';

// [React] Child Component → Other Component 프로그래밍 패턴
// https://velog.io/@jujusnake/React-Child-Components-Parents-State

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      sideMenu: {
        open: false,
        modal: false,
      }
    }
  }

  toggleMenu() {
    this.setState({
      sideMenu: {
        open: !this.state.sideMenu.open,
        modal: !this.state.sideMenu.modal,
      }
    });
  }

  render() {
    return (
      <>
        <SideMenu 
          {...this.state.sideMenu}
          toggleMenu={this.toggleMenu}
        />
        <TopMenu toggleMenu={this.toggleMenu}/>
        <Main />
        <BottomMenu />
      </>
    )
  }
}

// export default function Home() {
//   return (
//     <>
//       <SideMenu />
//       <TopMenu />
//       <Main />
//       <BottomMenu />
//     </>
//   )
// }