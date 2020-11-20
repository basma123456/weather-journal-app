weather-journal-app
=======

In that project we make an application which is enabling to put zip code of any country and also the user enter a statement of what he feel 
then the app will be connected to an web server api which has the data of the weather which is named openWeatherMap api,
then the app will post that request and gets the data that is required which is the temprature from the api and also the statement that the user has entered

---------------------------------------


### Functions:

  *  **getInfo** : is a function which has concept of asyenc method which enabling to use await method
  that me function has three parameters which is url , zip code , and my api that i obtained from the openWeatherMap api
 
  * **postData** : 
      >  the function of post request which has 2 parameters
      >  the first is the url of the distination that we want to post in it
      >  the second parameter is the object that contains the data that we want to post it
      >  and that function we must to make another function in the server.js which is
      >  related to that post function and having the same url of that function


  * **updateUi** : that function is enabling to show on the screen of the data that we post it and then get it

 ----------------------------------
## Summary :
* **first** : we post the zip code by funcion of post function in app.js amd make another post function in the server.js and also make another get function in server.js by /all to hold the returned data
* **second** : we post again the returned data but only temprature only in the /addCountry
* **third** : we get the data again by the get function which  in the app.js which has await method 
* **fourth** : we show the data on the screen by the updateUi function



