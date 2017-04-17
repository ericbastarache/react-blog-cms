const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const router = require('koa-router');
const port = process.env.PORT || 3001;

const app = new Koa();

app.use(bodyParser());

console.log(`APP is listening on ${port}`);
app.listen(port);
