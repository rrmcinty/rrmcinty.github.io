const express = require('express');
// const request = require('request')
const app = express()

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('pages\\index.ejs');
  })

app.listen(3000, function() {
    console.log('Server started on port 3000')
})