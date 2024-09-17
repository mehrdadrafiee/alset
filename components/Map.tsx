/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client'

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

//Map's styling
const defaultMapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 34.0522,
  lng: -118.2437
}

const defaultMapOptions = {
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  clickableIcons: true
}

export default function Map() {
  return (
    <GoogleMap mapContainerStyle={defaultMapContainerStyle} center={center} zoom={10} options={defaultMapOptions} />
  )
};