const express = require('express')
const app = express();
const path = require('path');
const process = require('process')


// app.use(express.static('public'))

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
// app.set('views', path.join(__dirname, process.argv[3]))
app.set('view engine', 'pug');
app.set('views', process.argv[3]);




/* app.get('/home', function (req, res) {
    res.end('Hello World!')
}) */

app.get('/home', function (req, res) {
    res.render('index', { date: new Date().toDateString() })
})


app.listen(process.argv[2])
