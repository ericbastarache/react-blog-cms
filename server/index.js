const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('koa-router');
const api = require('./routes');
const port = process.env.PORT || 3001;

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(api.routes());

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
