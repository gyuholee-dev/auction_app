import express from 'express';
import asyncHandler from 'express-async-handler';
import path from 'path';

// import Database from './Database.js';
import Router from './Router.js';

// 서버 클래스
export default class Server {
  constructor(config) {
    this.config = config;
    this.server = express();
    this.router = new Router(config);
    // this.database = new Database(config);
    this.init();
  }

  // 초기화
  init() {
    const config = this.config;
    const paths = config.paths;
    const publicPath = path.resolve(paths.pub);

    this.server.use( // 미들웨어
      express.urlencoded({extended:false}),
    );
    
    this.server.set( // 퍼블릭 파일 경로
      'public', publicPath,
    );

    // 비동기 라우팅
    this.server.all('*', asyncHandler(async(request, response, next)=>{
      try {
        await this.router.route(request, response);
      } catch (error) {
        next(error);
      }
    }));
  }

  // 서버 시작
  start () {
    const config = this.config;
    const hostname = config.hostname;
    const port = config.port;
    this.server.listen(port, hostname, ()=>{
      console.log(`SERVER STARTED: http://${hostname}:${port}/`);
    });
  }

}