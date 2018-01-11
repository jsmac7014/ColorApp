const ejs = require('ejs');
const express = require('express');
const router = require('./routes/routes.js');

const app = express();

app.use(express.static('public'));
app.use('/',router);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(4321, ()=>{
  console.log('Running at port 4321');
});
