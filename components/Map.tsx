import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type MapProps = {
  latitude: number;
  longitude: number;
  popper: string;
};

const Map = ({ latitude, longitude, popper }: MapProps) => (
  <MapContainer
    center={[latitude, longitude]}
    zoom={14}
    scrollWheelZoom={false}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2lkbWFuIiwiYSI6ImNraWdnaXZpczB0Y2QyeW54Zml5eDBxc3kifQ.tE9zGaBuIEj6BEww06XOsQ`}
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
    />

    <Marker position={[latitude, longitude]} draggable={true}>
      <Popup>{popper}</Popup>
    </Marker>
  </MapContainer>
);

export default Map;
