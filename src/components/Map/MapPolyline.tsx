import React, { useEffect } from 'react';

interface MapPolylineProps {
  path: google.maps.LatLngLiteral[];
  map?: google.maps.Map;
  color?: string;
}

export function MapPolyline({ path, map, color = '#FF0000' }: MapPolylineProps) {
  useEffect(() => {
    if (!map) return;

    const polyline = new google.maps.Polyline({
      path,
      map,
      geodesic: true,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    return () => {
      polyline.setMap(null);
    };
  }, [path, map, color]);

  return null;
}