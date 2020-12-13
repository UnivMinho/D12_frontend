var express = require('express')
var app = express()
const port=process.env.PORT || 8080;
var html_dir ='./html2/'
var server = app.listen(port, function () {
app.get('/', function (req, res) {
app.use('html2', express.static(global.path.join(html_dir, 'contact')));
})
});
app.listen(port, function () {
console.log('Example app listening on port!', server.address().port)
})

