import React from 'react'
import './RequestMap.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState , useEffect} from 'react';
import { doc, onSnapshot, collection, query, where,addDoc, getDocs } from "firebase/firestore";
import Geocode from "react-geocode";
import db from '../../firebase/firestore'
import dummy from './dummy.json'
Geocode.setApiKey("AIzaSyBC7G3SeCjuYeTE3EaHSzSJMgA3LEgvkUE");
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
const containerStyle = {
  width: '100rem',
  height: '60rem'
};

const center = {
  lat: 43.651070,
  lng: -79.347015
};
const position = {
  lat: 37.772,
  lng: -122.214
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

function RequestMap() {

   // getting all the address in the array
   const [address, setAddresses] = useState([])
   const [update, setUpdate] = useState(false)
   const tempArray = []
   const tempCoorArr = []
   useEffect(async function getAllData() {
    const querySnapshot = await getDocs(collection(db, 'Requests'));
    querySnapshot.forEach((doc) => {
          if(doc.data().location !== undefined){
          //  console.log(doc.data().location)
            tempArray.push(doc.data().location)
          }
          


    })
   setAddresses(tempArray)
  },  [])
  useEffect(  function geoCode(){
 //converting all the addresses to the long and latitudes

  }, [])
  
  return (
    <>
    {
    }
    <LoadScript
      googleMapsApiKey="AIzaSyBC7G3SeCjuYeTE3EaHSzSJMgA3LEgvkUE"
      
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
      >

      {/* {
         address.map(add => {
          // Get latitude & longitude from address.
          Geocode.fromAddress(add).then(
          (response) => {
        const pos = response.results[0].geometry.location;
        <Marker
          onLoad={onLoad}
          position={pos}
    />  
          
        console.log(pos);
        },
        (error) => {
        console.error(error);
        }
        );
        })
      } */}
{
  dummy.map(data => (<Marker
    onLoad={onLoad}
    position={data}
/> ))
}
        
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </>
  )
}

export default RequestMap