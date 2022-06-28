import React from 'react';


const ImgSlide = (props)=> {
  return (
    <section id="imgslide">
      <div className="imgs">
        <img src="/images/Eab45nOX0AAxAQm.jpeg" alt="PS5" />
      </div>
    </section>
  );
}

const Condition = (props)=> {
  return (
    <section id="condition">
      <select name="">
        <option value="1">입찰수</option>
      </select>
      <select name="">
        <option value="1">마감일</option>
      </select>
      <select name="">
        <option value="1">직거래</option>
      </select>
    </section>
  );
}

const ItemList = (props)=> {
  const count = 20;
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <div key={i} className="item">
        <div className="img">
          <img src="/images/Eab45nOX0AAxAQm.jpeg" alt="PS5" />
        </div>
        <div className="summary">
          <div className="title">소장품 이름<span className="grade">SSR</span></div>
          <div className="price">1,000,000 원<i className="xi-angle-up-min"></i></div>
          <div className="info">
            <span className="timer"><i className="xi-timer-o"></i>1시간 30분</span>
            <span className="star">999<i className="xi-star"></i></span>
            <span className="flag">999<i className="xi-flag"></i></span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section id="itemlist">
      <div className="items">{items}</div>
    </section>
  )
}

export default function Main(props) {

  const {
    page = 'home',
    title = '슈퍼레어',
  } = props;

  return (
    <main>
      {page=='home'&&<ImgSlide />}
      {page=='category'&&<Condition />}
      <ItemList />
    </main>
  );
}