var http = require('http');//urls
var express = require('express');//express
var bodyParser = require('body-parser');//les donne men frnt ll back 
var allRoutes = require('./router/routes.js');
var app = express();

var port = process.env.PORT || 3000;



// app set
app.use(express.static(__dirname+'/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// app set
app.set("view engine", "ejs");

// middleware
app.use('/', allRoutes);




var server = http.createServer(app);
server.listen(port, (error)=>{
    try {
        console.log(` port ${port}`);
    } catch (error) {
        console.log({
            error: error
        })
    }
})
