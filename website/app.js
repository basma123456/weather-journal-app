////////////variables/////////////////
const api = '&appid=5910e41b3aa42587c5509f3e28fd0332';
const myUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
/////////////////////////////////////////////////////////
/* var d = new Date();

var ourDateNow = d.getUTCFullYear() + " / " + d.getMonth() + " / " + d.getDate();
console.log("llllllllllllllllllllllllllllllllllll" + ourDateNow); */

//////////////////////////////////////////////////////////

/*
** the next code show addEventListener method that enable us to put an event and 
** then a callback function which is executed when the event executrd
** the callback function is called here performAction and has a parameter which is 
** the zip code or the country code which user entered in the input
*/

document.getElementById('generate').addEventListener('click' , performAction);

function performAction(e){
    
   const zip = document.getElementById('country').value;
   if(zip.length > 0){
    fav = document.getElementById('myText').value;
    const d = new Date();
    const ourMonth =  d.getMonth() + 1;

     ourDateNow = d.getDate() + " / " + ourMonth  + " / " + d.getUTCFullYear()  ;



    

    getInfo(myUrl,zip,api).then(function(data){  
                                                postData("/addCountry" , {temp:data.main.temp , fav:fav , ourDateNow : ourDateNow});
                                                updateUi();
                                                // notice when i put  updateUi() alone inside another .then()  
                                                // it resulted in delay of the result so i needed to press two times to 
                                                //release the right result 


                                } ); 
        }

    }


///////////////////////////////////////////////////////////

/*
** the function of post request which has 2 parameters
** the first is the url of the distination that we want to post in it
** the second parameter is the object that contains the data that we want to post it
** and that function we must to make another function in the server.js which is
** related to that post function and having the same url of that function
*/

const postData = async(url='' , data={})=>{
    const response = await fetch(url, {
        method : 'post',
        credentials : 'same-origin',
        headers: {
            'Content-Type':'application/json',
            
        },
        body : JSON.stringify(data),

    });


    try{

        const myData = await response.json();
        console.log(myData);

        return myData;

        
    }

    catch(error){
        console.log('error', error);
    }

}




//////////////////////////////////////////////////////////////////////////////////////



const getInfo = async (myUrl,zip,api)=>{
    const res = await fetch(myUrl+zip+api);
    

    try{
         data = await res.json();

        return data;
    } catch(error){

        console.log("error" , error);

    }


}
//var data = getInfo.data;
//console.log(data);

///////////////////////




////////////////////////////////////////////////
///////////////////////////////////////////////
/*
** that function is enabling to show on the screen of the data that we post it and then get it
*/

 const updateUi = async () => {


    const req = await fetch("/all")

    try{


         finalData = await req.json();

        document.getElementById("showDate").innerHTML = "<b>Today is : </b>" + "<b>" + finalData[finalData.length-1].ourDateNow + "</b>";

        document.getElementById("showTemp").innerHTML = "<b>The Temprature : </b>" + "<b>" +  finalData[finalData.length-1].temp + "</b>";
        document.getElementById("showFeel").innerHTML = "<b>You Feel : </b>" + "<b>" +  finalData[finalData.length-1].fav + "</b>";



    } catch(error){

        console.log("error" , error);

    }



}



/*
** first : we post the zip code by funcion of post function in app.js amd make another post function in the server.js and also make another get function in server.js by /all to hold the returned data
** second : we post again the returned data but only temprature only in the /addCountry
** third : we get the data again by the get function which  in the app.js which has await method 
** fourth : we show the data on the screen by the updateUi function
*/


