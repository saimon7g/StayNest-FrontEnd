'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '@/app/styles/leaflet.css';

export default function Map({ setLatlng }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    maptilersdk.config.apiKey = '9TvH7aINcUcL3mYdyzPP';

    const BUET = { lng: 90.394, lat: 23.726 };

    const [markerPosition, setMarkerPosition] = useState({ lng: BUET.lng, lat: BUET.lat });
    const [clickedLocation, setClickedLocation] = useState();
    const [zoom, setZoom] = useState(7);
    const [center, setCenter] = useState([BUET.lng, BUET.lat]);

    useEffect(() => {
        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: center,
            zoom: zoom
        });

        map.current.on('click', handleMapClick); // Attach click event handler
        map.current.on('zoom', () => {
            setZoom(map.current.getZoom());
            setCenter(map.current.getCenter());
        });
        setLatlng({ lng: markerPosition.lng, lat: markerPosition.lat });
        new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([markerPosition.lng, markerPosition.lat])
            .addTo(map.current);
    }, [clickedLocation]);

    const handleMapClick = (e) => {
        setClickedLocation({ lng: 23.0, lat: 23.0 }); // Update state with clicked location
        setMarkerPosition({ lng: e.lngLat.lng, lat: e.lngLat.lat });
        setLatlng({ lng: e.lngLat.lng, lat: e.lngLat.lat });
    };
    return (
        <div className="map-wrap justify-center">
            <div ref={mapContainer} className="map"></div>
        </div>
    );
}
