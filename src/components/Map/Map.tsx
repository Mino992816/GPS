import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { MAPS_CONFIG } from '../../config/maps';
import { MapView } from './MapView';

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

export function Map(props: MapProps) {
  return (
    <Wrapper apiKey={MAPS_CONFIG.API_KEY}>
      <MapView {...props} />
    </Wrapper>
  );
}