// Promise XMLHttpRequest
async function requestData(file, param = null) {  
  let request = '';
  if (param !== null) {
    for (let key in param) {
      if (key === Object.keys(param)[0]) {
        request += key+'='+param[key];
      } else {
        request += '&'+key+'='+param[key];
      }
    }
  }
  // console.log('XHR:', request);
  try {
    const xhr = new XMLHttpRequest();
    // get 전송
    // xhr.open('GET', file+'?'+request);
    // xhr.send();
    // post 전송
    // http://daplus.net/javascript-xmlhttprequest%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-post-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EB%82%B4%EA%B8%B0/
    xhr.open('POST', file, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(request);

    const result = await new Promise((resolve, reject) => {
      xhr.onload = function () {
        if (xhr.status == 200) {
          resolve(xhr.response);
        } else {
          reject(Error(xhr.statusText));
        }
      };
    });
    return result;
  } catch (error) {
    throw Error(error);
  }
}
// XHR Excute PHP function
export async function xhr(func, param = null, useHtml=false) {
  if (param === null) {
    param = {};
  }
  if (param['call'] === undefined) {
    param['call'] = func;
  }
  let result = await requestData('xhr.php', param);
  if (result) {
    return JSON.parse(result);
  }
}

// onVisible Event
// https://stackoverflow.com/questions/1462138/event-listener-for-when-element-becomes-visible
// https://velog.io/@dev-tinkerbell/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%EB%B0%A9%EB%B2%95
export function onVisible(element, callback) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        callback(element);
        // observer.disconnect();
      }
    });
  }).observe(element);
}

// 쿠키 저장
export function setCookie(key, value, maxAge=3600) {
  document.cookie = `${key}=${value}; max-age=${maxAge};`;
}
// 쿠키 삭제
export function delCookie(key) {
  document.cookie = `${key}=; max-age=0;`;
}
// 쿠키 불러오기
export function getCookie(key) {
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split('=');
    if (cookie[0].trim() === key) {
      return cookie[1];
    }
  }
  return null;
}

// 비동기 지연
// https://coder-question-ko.com/cq-ko-blog/81552
// await timeout(1000);
export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 문자열 잘라내기
export function substrMax(str, max, ellipsis='&#8230;') {
  if (str.length > max) {
    str = str.substr(0, max)+' '+ellipsis;
  }
  return str;
}

// 윈도우 스크롤탑
export function scrollToTop(speed = 'smooth') {
  window.scroll({top: 0, behavior: speed});
}

export function test() {
  console.log('test');
}