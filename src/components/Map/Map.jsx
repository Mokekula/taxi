import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

export const Map = () => {
  const mapContainerRef = useRef(null);

  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

  useEffect(() => {
    new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [36.686439514160156, 49.831975888250405],
      zoom: 14,
    });
  }, []);

  return (
    <div className="Map">
      <div className="Map-container" ref={mapContainerRef}></div>
    </div>
  );
};

// export default Map;
