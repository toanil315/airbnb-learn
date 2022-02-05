import { LocationMarkerIcon } from "@heroicons/react/solid";
import { getCenter } from "geolib";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function Map({ searchResult }) {
  const [selectedMarker, setSelectedMarker] = useState({
    long: 0,
    lat: 0,
    title: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const coordinates = searchResult.map((searchItem) => {
    return {
      latitude: searchItem.lat,
      longitude: searchItem.long,
    };
  });

  const center = getCenter(coordinates);

  return (
    <ReactMapGL
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      mapStyle="mapbox://styles/lonavan/ckz9lcf3q000114kyhrac7ybc"
      style={{ width: "100%", height: "100vh", position: "sticky", top: 0, right: 0 }}
      mapboxAccessToken={process.env.mapbox_key}
    >
      <div>
        {searchResult.map(({ long, lat, title }) => {
          return (
            <div
              key={lat}
              onClick={() => {
                setSelectedMarker({ long, lat, title });
                setShowPopup(true);
              }}
            >
              <Marker longitude={long} latitude={lat}>
                <LocationMarkerIcon className="h-8 text-red-400 animate-bounce cursor-pointer" />
              </Marker>
            </div>
          );
        })}
        {showPopup ? (
          <Popup
            longitude={selectedMarker.long}
            latitude={selectedMarker.lat}
            onClose={() => setShowPopup(false)}
            closeOnClick={false}
            offset={20}
          >
            {selectedMarker.title}
          </Popup>
        ) : (
          ""
        )}
      </div>
    </ReactMapGL>
  );
}
