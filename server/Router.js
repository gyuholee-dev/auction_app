import * as url from 'url';
import fs from 'fs';
import path from 'path';

let publicPath;

// 라우터 클래스
export default class Router {
  constructor (config) {
    const paths = config.paths;
    publicPath = path.resolve(paths.pub);
  }

  detectDevice (request) {
    const device = request.device;
    return {
      isDesktop: device.type === 'desktop',
      isPhone: device.type === 'phone',
      isTablet: device.type === 'tablet',
      isMobile: device.type === 'phone' || device.type === 'tablet',
      isTv: device.type === 'tv',
      isBot: device.type === 'bot',
      isCar: device.type === 'car',
      deviceType: device.type,
      deviceName: device.name,
    }
  }

  async route (request, response) {
    const device = this.detectDevice(request);
    const method = request.method;
    const urls = url.parse(request.url, true);
    const paths = urls.pathname;
    const pathname = paths.split('/')[1]??'main';

    // 파일 우선 처리
    const ext = paths.split('.').pop().toLowerCase();
    if (ext !== paths && ext !== 'html') {
      const filePath = path.join(publicPath, paths);
      if (fs.existsSync(filePath)) {
        response.sendFile(filePath);
      } else {
        response.status(404).send('404 NOT FOUND');
      }
      return;
    }
    
    if (method === 'GET') { 

      // HTML 도큐먼트
      // let document = 'index.html';
      // const query = urls.query;
      // switch(pathname) {
      //   // case '/' || '/main':
      //   //   document = 'index.html';
      //   //   break;
      //   default:
      //     document = 'index.html';
      // }
      // response.sendFile(path.join(publicPath, document));

      // EJS 도큐먼트
      let document = 'template.ejs';
      let data = {
        ...device,
        isProd: true,
      };
      const query = urls.query;
      response.render(document, data);

    } else if (method === 'POST') {

      // 포스트 데이터
      let data = {};
      const query = request.body;

      // 포스트 xhr
      if (query.call) {
        switch(query.call) {
          // case 'test':
            // data = await mysqlTest();
            // break;
          default:
            data = await this[query.call]();
            break;
        }
        response.json(data);
      }
    }
  }
}