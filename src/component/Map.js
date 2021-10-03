// @refresh reset
import React, { useEffect, useRef } from "react";
import { Map as LeafletMap } from "leaflet";
import { FeatureLayer } from "esri-leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector";
import "leaflet/dist/leaflet.css";


function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // debugger;
    if (mapRef.current !== null) {

      const map = new LeafletMap(mapRef.current);
      map.setView([-6.20871, 106.83876], 12);

      // Add a basemap
      vectorBasemapLayer("ArcGIS:Imagery", {
        apiKey: "AAPK592d8a82b29e40dc910b964653f54da7s0lHrMAfEFi4ELnW5xzlwlfexjmrg8YrOM4gd7ekPt61KUO8If5F3mMPN9SpXZDQ", // https://developers.arcgis.com
      }).addTo(map);

      // Add a Feature Layer
      const fl = new FeatureLayer({
        url:
          "https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Histori_Banjir_2021/MapServer/0",
        simplifyFactor: 0.5,
        precision: 5,
        style: function (feature) {
        return { color: 'red', weight: 2 };
        }
      }).addTo(map);

      fl.bindPopup(function (layer) {
        return `<h3>Histori Banjir Jakarta 2021</h3>
                <p>
                  Kecamatan: ${layer.feature.properties.KECAMATAN}<br />
                  Kelurahan: ${layer.feature.properties.KELURAHAN}<br />
                  <strong> Luas Area: ${layer.feature.properties.LUAS_AREA}</strong><br /> 
                  Keterangan: ${layer.feature.properties.KETERANGAN.toLocaleString("en")}
                </p>`;
      });
      
    }
  }, [mapRef]);

  return <div className="map" ref={mapRef}></div>;
}

export default Map;