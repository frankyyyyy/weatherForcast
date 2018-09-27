// to disable same origin policy in Chrome use one of the following commands

//windows
//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//Mac
//open -a Google\ Chrome --args --disable-web-security --user-data-dir
//Linux
//google-chrome --disable-web-security
const CITIES = {
  sydney:{lat:'-33.8688',lon:'151.2093'},
  brisbane:{lat:'-27.4698',lon:'153.0251'},
  melbourne:{lat:'-37.8136',lon:'144.9631'},
  snowyMountains:{lat:'-36.5000',lon:'148.3333'},
}



//example of an ajax call to the weather api (demo purpose only)
/*
$.ajax({
  url: 'https://weatherbit-v1-mashape.p.mashape.com/forecast/3hourly?lat=-33.8688&lon=151.2093',
    headers:{"X-Mashape-Key": "wSo0LRcHZMmsh4rXshasAImNK7Ulp19zkGQjsnUjeMXsnpyilC"},
  success: function(res){console.log(res);},
  error: function(err){console.log(err);}  //network error
});
*/

//for more information about the weather api https://market.mashape.com/weatherbit/weather