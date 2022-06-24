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
      open: false,
    }
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <>
        <SideMenu open={this.state.open} toggleMenu={this.toggleMenu}/>
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