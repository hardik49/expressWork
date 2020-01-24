const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/home', function(req, res) {
    res.end('Hello World!')
})

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2])
