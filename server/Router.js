import * as url from 'url';
import fs from 'fs';
import path from 'path';
import routes from './routes/index.js';

let publicPath, viewsPath;

// 라우터 클래스
export default class Router {
  constructor (config) {
    this.config = config;
    const paths = config.paths;
    publicPath = path.resolve(paths.pub);
    viewsPath = path.resolve(paths.src, paths.view);
    Object.assign(this, routes);
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

  isFile (paths) {
    const ext = paths.split('.').pop().toLowerCase();
    if (ext !== paths && ext !== 'html') {
      return true;
    } else {
      return false;
    }
  }

  async route (request, response) {
    const { config, detectDevice, isFile, sendFile } = this;
    const device = detectDevice(request);
    const method = request.method;
    const urls = url.parse(request.url, true);
    const paths = urls.pathname;
    const pathname = paths.split('/')[1]??'main';

    // 파일 우선 처리
    if (isFile(paths)) {
      sendFile(request, response, paths);
      return;
    }
    
    if (method === 'GET') { 

      if (typeof this[pathname] === 'function') {
        this[pathname](method, request, response, query);
        return;
      }

      if (config.view === 'html') {
        // HTML 도큐먼트
        let document = config.main;
        if (pathname === '/' || pathname === 'main') {
          document = config.main;
        } else {
          document = pathname + '.html';
        }
        if (fs.existsSync(path.join(viewsPath, document))) {
          response.sendFile(path.join(viewsPath, document));
        } else {
          response.status(404).send('404 NOT FOUND');
        }

      } else if (config.view === 'ejs') {
        // EJS 도큐먼트
        let document = config.main;
        let data = {
          ...device,
          isProd: true,
        }
        if (pathname === '/' || pathname === 'main') {
          document = config.main;
        } else {
          document = pathname + '.ejs';
        }
        if (fs.existsSync(path.join(viewsPath, document))) {
          response.render(document, data);
        } else {
          response.status(404).send('404 NOT FOUND');
        }
      }

    } else if (method === 'POST') {

      // 포스트 데이터
      let data = {};
      const query = request.body;
      // 포스트 xhr
      if (query.call) {
        if (typeof this[query.call] === 'function') {
          data = await this[query.call]();
          response.json(data);
        }
      }

    }
  }

  async static (request, response) {
    const { config, detectDevice, isFile, sendFile } = this;
    const device = detectDevice(request);
    const method = request.method;
    const urls = url.parse(request.url, true);
    const paths = urls.pathname;
    const pathname = paths.split('/')[1]??'main';

    // 파일 우선 처리
    if (isFile(paths)) {
      sendFile(request, response, paths);
      return;
    }
    
    if (method === 'GET') { 

      if (typeof this[pathname] === 'function') {
        this[pathname](method, request, response, query);
        return;
      }

      if (config.view === 'html') {
        // HTML 도큐먼트
        let document = config.main;
        if (fs.existsSync(path.join(viewsPath, document))) {
          response.sendFile(path.join(viewsPath, document));
        } else {
          response.status(404).send('404 NOT FOUND');
        }
      } else if (config.view === 'ejs') {
        // EJS 도큐먼트
        let document = config.main;
        let data = {
          ...device,
          isProd: true,
        }
        console.log(path.join(viewsPath, document));
        if (fs.existsSync(path.join(viewsPath, document))) {
          response.render(document, data);
        } else {
          response.status(404).send('404 NOT FOUND');
        }
      }

    } else if (method === 'POST') {
    
      // 포스트 데이터
      let data = {};
      const query = request.body;
      // 포스트 xhr
      if (query.call) {
        if (typeof this[query.call] === 'function') {
          data = await this[query.call]();
          response.json(data);
        }
      } else {
        response.status(404).send('404 NOT FOUND');
      }

    }
  }

  async sendFile (request, response, paths) {
    const filePath = path.join(publicPath, paths);
    if (fs.existsSync(filePath)) {
      response.sendFile(filePath);
    } else {
      response.status(404).send('404 NOT FOUND');
    }
  }

}