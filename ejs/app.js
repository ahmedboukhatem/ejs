var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// app set
app.use(express.static(__dirname+'/views'));

// app set
app.set("view engine", "ejs");

// middleware
app.get('/', (req, res)=>{
    // now we define a name variable and render index.ejs
    var username = "ahmed boukhatem";
    res.render('index', {p: username});
})




var server = http.createServer(app);
server.listen(port, (error)=>{
    try {
        console.log(`this app is listening on port ${port}`);
    } catch (error) {
        console.log({
            error: error
        })
    }
})
