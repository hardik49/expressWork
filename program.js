const express = require('express')
const app = express()
app.use(express.static('public'))
/* app.get('/home', function(req, res) {
    res.end('Hello World!')
})
app.listen(process.argv[2]) */