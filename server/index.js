const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const router = require('koa-router');
const port = process.env.PORT || 3001;

const app = new Koa();
const router = router();

app.use(bodyParser());

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
