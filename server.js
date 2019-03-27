var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');
var app = module.exports = express();
app.use(bodyParser.json());
app.use(useragent.express());
app.use(cors());
app.use(express.static('public'));

app.get('/api/whoami', (req, res)=>{
var ipaddress =  req.ip;
var language = req.acceptsLanguages();
var software = 'OS: ' + req.useragent.os + ', Browser: ' + req.useragent.browser;
res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
console.log(ipaddress);
});






var server = app.listen('3000', ()=>{
    console.log('Server is running on port 3000');
});