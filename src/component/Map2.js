// @refresh reset
import React, { useEffect, useRef } from "react";
import { Map as LeafletMap } from "leaflet";
import { FeatureLayer } from "esri-leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector";
import "leaflet/dist/leaflet.css";


function Map2() {
  const mapRef = useRef(null);

  useEffect(() => {
    // debugger;
    if (mapRef.current !== null) {

      const map = new LeafletMap(mapRef.current);
      map.setView([-6.20871, 106.83876], 12);

      // Add a basemap
      vectorBasemapLayer("ArcGIS:Streets", {
        apiKey: "AAPK592d8a82b29e40dc910b964653f54da7s0lHrMAfEFi4ELnW5xzlwlfexjmrg8YrOM4gd7ekPt61KUO8If5F3mMPN9SpXZDQ", // https://developers.arcgis.com
      }).addTo(map);

      const fl = new FeatureLayer({
        url:
          "https://jakartasatu.jakarta.go.id/server/rest/services/Penggunaan_Lahan/MapServer/0",
          
          style: function (feature) {
            if (feature.properties.D_PENGGUNA === 'BUDAYA') {
              return { color: '#20abb6', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'CAMPURAN') {
              return { color: '#a3205e', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'HUNIAN') {
              return { color: '#518e96', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'INDUSTRI') {
              return { color: '#cab56d', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'JASA') {
              return { color: '#fc096e', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'KEAGAMAAN') {
              return { color: '#a1df94', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'KHUSUS') {
              return { color: '#80aa79', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'LABORATORIUM') {
              return { color: '#9770b9', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'LAIN-LAIN') {
              return { color: '#dd11c7', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PELAYANAN KESEHATAN') {
              return { color: '#a493d1', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PELAYANAN PENDIDIKAN') {
              return { color: '#697cdc', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PELAYANAN UMUM') {
              return { color: '#ebbe86', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PEMERINTAHAN') {
              return { color: '#f2906f', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PENGGUNAAN LAIN') {
              return { color: '#85d7ef', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'USAHA') {
              return { color: '#bd558e', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PENYIMPANAN') {
              return { color: '#294270', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PERHOTELAN') {
              return { color: '#5768c9', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PERIKANAN') {
              return { color: '#f31649', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PERKANTORAN DAN PERDAGANGAN') {
              return { color: '#3e04be', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PERTANIAN') {
              return { color: '#c888ac', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'PETERNAKAN') {
              return { color: '#fe9170', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'TERMINAL') {
              return { color: '#c75910', weight: 2 };
            } else if (feature.properties.D_PENGGUNA === 'WISATA') {
              return { color: '#ee478a', weight: 2 };
            }
          }
      }).addTo(map);
      

      fl.bindPopup(function (layer) {
        return `<h3>Peta Penggunaan Lahan DKI Jakarta</h3>
                <p>
                    <strong> Penggunaan Lahan: ${layer.feature.properties.D_PENGGUNA}</strong><br />
                    Sub Penggunaan Lahan: ${layer.feature.properties.D_SUB_PENG}<br /> 
                    Kegiatan: ${layer.feature.properties.D_KEGIATAN}
                </p>`;
      });
      
    }
  }, [mapRef]);

  return <div className="map" ref={mapRef}></div>;
}

export default Map2;