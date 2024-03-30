import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Map = () => {
  return (
    <main>
      <h2 className="text-center font-bold text-3xl text-primary pb-5 ">
        Our Location
      </h2>
      <MapContainer
        center={[43.6532, -79.3832]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          width: "500px",
          aspectRatio: "1",
        }}
        className="sm:w-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[43.6532, -79.3832]}>
          <Popup>Our Location</Popup>
        </Marker>
      </MapContainer>
    </main>
  )
}

export default Map
