const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`SERVER running on http://localhost:${port}`)
});
