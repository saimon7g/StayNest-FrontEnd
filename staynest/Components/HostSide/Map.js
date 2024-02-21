'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '@/app/styles/leaflet.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const BUET = { lng: 90.394 , lat: 23.726};
    const [zoom] = useState(7);
    maptilersdk.config.apiKey = '9TvH7aINcUcL3mYdyzPP';
    const[markerPosition, setMarkerPosition] = useState({lng: BUET.lng, lat: BUET.lat});

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [BUET.lng, BUET.lat],
            zoom: zoom
        });

        new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([BUET.lng, BUET.lat])
            .addTo(map.current);
    }, [BUET.lng, BUET.lat, zoom, markerPosition]);

    const handleMapClick = (e) => {
        setMarkerPosition({lng: e.lngLat.lng, lat: e.lngLat.lat});
    }



    return (
        <div className="map-wrap justify-center">
            <div ref={mapContainer} className="map"></div>
        </div>
    );
}
