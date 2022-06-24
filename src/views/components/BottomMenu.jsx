import React, { Component } from 'react';

export default class BottomMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav id="bottommenu" className="menu bottom">
        <button className="btn none">
          <i className="xi-home-o"></i>
          <span>홈</span>
        </button>
        <button className="btn none">
          <i className="xi-document"></i>
          <span>카테고리</span>
        </button>
        <button className="btn none">
          <i className="xi-gift-o"></i>
          <span>나의 경매</span>
        </button>
        <button className="btn none">
          <i className="xi-user-o"></i>
          <span>나의 슈퍼레어</span>
        </button>
      </nav>
    )
  }
}