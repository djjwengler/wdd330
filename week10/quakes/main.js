import { getJSON, getLocation } from 'utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

navigator.geolocation.getCurrentPosition(success, error, options);

function testGetQuakesForLocation() {
    // call the getLocation function to get the lat/long
    function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
  getLocation(success);
    // use that information to build out the correct URL
    const geoUrl = baseUrl + // add location information here
    // use the url to request the correct quakes 

    //log out the quakes for now.
    console.log(geoURL);
  }
  getQuakesForLocation();