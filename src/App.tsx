import React from 'react';
import { Map } from './components/Map/Map';
import { MAPS_CONFIG } from './config/maps';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Location Tracker</h1>
        <div className="h-[600px] w-full">
          <Map
            center={MAPS_CONFIG.DEFAULT_CENTER}
            zoom={MAPS_CONFIG.DEFAULT_ZOOM}
          />
        </div>
      </div>
    </div>
  );
}

export default App;