const path=require('path');
var cors = require('cors')

// importing the 3rd party packages
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// getting the router
const router = require("./routes/router");

const app = express();
cors({credentials: true, origin: true})
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

// if user try to access other pages
app.use('/', (req, res, next)=>{
        res.status(404).send("<h1>No such route exists!!!!!!!</h1>");
});

// connnecting to mongdb and start the application on port 3000
mongoose.connect('mongodb://admin:password@10.0.1.50:27017/admin').then( result =>{
        app.listen(8080, ()=>{
                console.log("server is started and listening at port 3000!!");
        });
}).catch( error =>{
        console.log(error);
});



