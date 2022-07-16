import Server from './server/Server.js';
import merge from 'deepmerge';
import fs from 'fs';

import { userConfig } from './configs/server.config.js';

// 컨피그
let config = {
  hostname: 'localhost',
  port: 8080,
  static: false,
  view: 'html',
  main: 'index.html',
  // 디렉토리
  paths : {
    app: "app",
    server: "server",
    pub: "public",
    view: "views",
    src: "src",
    conf: "config"
  },
  db : {
    host : 'localhost',
    user : 'root',
    password : null,
    port : '3306',
    // socketPath: '/var/lib/mysql/mysql.sock',
    socketPath: null,
    database : 'testdb'
  }
}
config = merge(config, userConfig);

global.APP = new Server(config);
APP.start();
