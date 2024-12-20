import React, { useEffect, useRef } from 'react';
import { MAPS_CONFIG } from '../../config/maps';

interface MapViewProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

export function MapView({ center, zoom }: MapViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      const map = new google.maps.Map(ref.current, {
        center,
        zoom,
        styles: MAPS_CONFIG.STYLES
      });
      
      return () => {
        // Cleanup if needed
      };
    }
  }, [center, zoom]);

  return <div ref={ref} className="w-full h-full rounded-lg" />;
}