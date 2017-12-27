const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection(require('../config/dbconfig.js'));
const router = express.Router();

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('mysql connect completed');
});

router.get('/', (req, res) => {
    console.log('asdf');
    const sql = 'SELECT * FROM ColorInfo';
    connection.query(sql, (err, results) => {
        console.log(results);
        res.render('list', {data: results});
    });
});

router.get('/make', (req, res) => {
    res.render('make', {});
})
router.post('/make', (req, res) => {
    var name = req.body.nameInput;
    var code = req.body.colorInput;
    const sql = `INSERT INTO ColorInfo (name,code) VALUES ('${name}', '${code}')`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        }
        else{
          res.redirect('/');
          console.log('worked');
        }
    });
});

module.exports = router;
