import React, { useEffect } from 'react';

interface MapMarkerProps {
  position: google.maps.LatLngLiteral;
  map?: google.maps.Map;
  color?: string;
}

export function MapMarker({ position, map, color = '#FFD700' }: MapMarkerProps) {
  useEffect(() => {
    if (!map) return;

    const marker = new google.maps.Marker({
      position,
      map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: color,
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: '#FFFFFF',
      },
    });

    return () => {
      marker.setMap(null);
    };
  }, [position, map, color]);

  return null;
}