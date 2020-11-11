////////////variables/////////////////
const api = '&appid=5910e41b3aa42587c5509f3e28fd0332';
//const zip = document.getElementById('country').value;
let zip = "85005";
const myUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
/////////////////////////////////////////////////////////

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

        const newData = await response.json();
        console.log(newData);
        return newData;
        res.send(newData);

        
    }

    catch(error){
        console.log('error', error);
    }

}


postData('/bonbon' , {'data' : 'is bonbon'});



///////////////////////////////////////////////
///////////////////////////////////////////////////////////

document.getElementById('generate').addEventListener('click' , performAction);

function performAction(e){
    getInfo(myUrl,zip,api);
}    


const getInfo = async (myUrl,zip,api)=>{
    const res = await fetch(myUrl+zip+api);
    

    try{
        const data = await res.json();
        console.log(data);
        res.send(data);
        return data;
    } catch(error){

        console.log("error" , error);

    }


}
const data = getInfo.data;
console.log(data);

///////////////////////

postData("/countryInfo" , data);



////////////////////////////////////////////////
/*document.getElementById('generate').addEventListener('click' , performAction);

function performAction(e){
    getInfo("/country");
}    


const getInfo = async (e)=>{
    const res = await fetch(e);
    

    try{
        const data = await res.json();
        console.log(data);
        return data;
        res.send(zip);
        console.log(zip);
    } catch(error){

        console.log("error" , error);

    }


}
*/

