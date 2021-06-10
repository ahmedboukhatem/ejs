var http = require('http');
var express = require('express');
var app = express();
// get the route
var allRoutes = require('./routes/routes');
// port 
var port = process.env.PORT || 3000;


//ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname+'/views'));



// middleware
app.use('/', allRoutes);


//creation du server en utilisant express
const server = http.createServer(app);

server.listen(port, (error)=>{
    try {
        console.log(`this server is listening on port ${port}`);
    } catch (error) {
        console.log({
            error: error
        });
    }
    
})