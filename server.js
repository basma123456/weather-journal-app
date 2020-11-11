projectData = {};

//////////////////////////////
////////////variables/////////////////
const api = '&appid=5910e41b3aa42587c5509f3e28fd0332';
//const zip = document.getElementById('country').value;
const zip = "85005";
const myUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



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




app.get('/all' , (req,res)=>{

   res.send(projectData);
   const smsm = projectData.info;
console.log(projectData);
});
///post request

app.post('/add' , (request,response)=>{

    response.send('post received');
});
/////////////////////the post of the country///////////







///////////////////////////////////
/*const api = '5910e41b3aa42587c5509f3e28fd0332';
const zip = {};

const myUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + '85005' + '&appid={' + api + '}';

//////////////////////////////////

*/


const info = [];

app.post("/countryInfo" , (req,res)=>{

    info.push(req.body);
    console.log(info);

});
///////////////////////////////////////
/*
app.get("/countryInfo" , (req,res)=>{

    res.send(body.info);
    console.log(body.info);

});*/

///////////////////////////////


/////////////////////////////////////////


const bonData = []
app.post('/bonbon' , (req,res)=>{

    bonData.push(req.body);
    console.log(bonData);

})