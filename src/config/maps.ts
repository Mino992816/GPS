// Google Maps configuration
export const MAPS_CONFIG = {
  API_KEY: 'AIzaSyCUQPXDe5rLiOnx7jDestNV8819qcwAToA',
  DEFAULT_CENTER: {
    lat: 48.8566,
    lng: 2.3522
  },
  DEFAULT_ZOOM: 13,
  STYLES: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#242f3e" }]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#242f3e" }]
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#746855" }]
    }
  ]
};