const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));
app.use('/',router);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.listen(4321, ()=>{
  console.log('Running at port 4321');
});


//
// app.get('/delete/:id', (req,res)=>{
//
// });
//
// app.get('/insert', (req,res)=>{
//
// });
//
// app.post('/insert', (req,res)=>{
//
// });
//
// app.get('/edit/:id', (req,res)=>{
//
// });
//
// app.post('/edit/:id',(req,res)=>{
//
// });
