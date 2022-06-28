import React from 'react';

export default function Main(props) {

  const imgslide = (
    <section id="imgslide">
      <div className="imgs">
        <img src="/images/Eab45nOX0AAxAQm.jpeg" alt="PS5" />
      </div>
    </section>
  );

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
  const itemList = (
    <section id="itemlist">
      <div className="items">{items}</div>
    </section>
  )

  return (
    <main>
      {imgslide}
      {itemList}
    </main>
  );
}