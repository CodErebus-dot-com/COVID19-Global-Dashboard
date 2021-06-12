import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "../utils";
import "./Map.css";

const Map = ({ mapCountries, casesType, center, zoom }) => {
  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map">
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'

      />

      {/* Looping through countries and draw circles based on no of cases */}
      {showDataOnMap(mapCountries, casesType)}
    </MapContainer>
  );
}

export default Map;