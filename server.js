projectData = {};


/*
////////////variables/////////////////
const api = '&appid=5910e41b3aa42587c5509f3e28fd0332';
var zip = document.getElementById('country').value;
//let zip = "85005";
const myUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';


//////////////////////////////
*/


const express = require('express');

const app = express();

/*dependencies*/
const bodyParser = require('body-parser');

/*middlewares*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));
const port = 8000;

const server = app.listen(port, listening);
function listening() {
   
    console.log('server is running');
    console.log(`server is running on localhost : ${port}`);

}

//get request

app.get('/' , function(req,res){

    res.send("hello basma");
    console.log('its first page');

});



///post request

app.post('/add' , (request,response)=>{

    response.send('post received');
});
/////////////////////the post of the country///////////




const info = [];


///////////////then we make the get route which is after the post route
app.get("/all" , (req,res)=>{


    res.send(info);

});

//////////////////////////////////

/*
** this is the function that made after the post request in the app.js
*/

app.post("/addCountry" , (req,res)=>{

         mag = {
           temp: req.body.temp,
            fav: req.body.fav,
            ourDateNow : req.body.ourDateNow
        }
        
    info.push(mag);//here
    res.send(info);  
    //console.log(info);

});


