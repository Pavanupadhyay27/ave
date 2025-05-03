import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Locations.css'

// Fix for Leaflet marker icons
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Locations = () => {
  useEffect(() => {
    document.title = 'Our Locations - ACE Storage Solution';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const locations = [
    {
      id: 1,
      name: 'Downtown Facility',
      address: '123 Storage Ave, Anytown, USA 12345',
      phone: '(123) 456-7890',
      hours: 'Mon-Sun: 6AM - 10PM',
      access: '24/7 Access Available',
      features: ['Climate Control', 'Drive-Up Units', 'Indoor Units', 'Vehicle Storage'],
      position: [40.7128, -74.0060], // New York coordinates as example
      image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Westside Facility',
      address: '456 Secure Blvd, Anytown, USA 12345',
      phone: '(123) 456-7891',
      hours: 'Mon-Sun: 7AM - 9PM',
      access: '24/7 Access Available',
      features: ['Climate Control', 'Drive-Up Units', 'RV & Boat Storage'],
      position: [34.0522, -118.2437], // Los Angeles coordinates as example
      image: 'https://images.pexels.com/photos/3951378/pexels-photo-3951378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Eastside Facility',
      address: '789 Lockbox Lane, Anytown, USA 12345',
      phone: '(123) 456-7892',
      hours: 'Mon-Sun: 6AM - 9PM',
      access: 'Extended Hours Access Available',
      features: ['Business Storage', 'Climate Control', 'Moving Supplies'],
      position: [41.8781, -87.6298], // Chicago coordinates as example
      image: 'https://images.pexels.com/photos/3760616/pexels-photo-3760616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="locations-page">
      <section className="section">
        <div className="container">
          <motion.div 
            className="locations-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Storage Facilities Conveniently Located Near You</h2>
            <p>
              ACE Storage Solution operates multiple facilities in strategic locations, 
              making it easy to find a storage unit close to your home or business. 
              Each of our locations offers a range of unit sizes and amenities to meet your specific needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="locations-map"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MapContainer center={[39.8283, -98.5795]} zoom={4} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map(location => (
                <Marker key={location.id} position={location.position}>
                  <Popup>
                    <div className="map-popup">
                      <h3>{location.name}</h3>
                      <p>{location.address}</p>
                      <a href={`#location-${location.id}`}>View Details</a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>
          
          <div className="locations-list">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id}
                id={`location-${location.id}`}
                className="location-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="location-image">
                  <img src={location.image} alt={location.name} />
                </div>
                <div className="location-details">
                  <h3>{location.name}</h3>
                  <div className="location-info">
                    <div className="info-group">
                      <h4>Address</h4>
                      <p>{location.address}</p>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="directions-link"
                      >
                        Get Directions
                      </a>
                    </div>
                    <div className="info-group">
                      <h4>Contact</h4>
                      <p><a href={`tel:${location.phone}`}>{location.phone}</a></p>
                    </div>
                    <div className="info-group">
                      <h4>Hours</h4>
                      <p>{location.hours}</p>
                      <p className="access-note">{location.access}</p>
                    </div>
                    <div className="info-group">
                      <h4>Facility Features</h4>
                      <ul className="features-list">
                        {location.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="location-actions">
                    <a href="/contact" className="btn btn-primary">Rent a Unit</a>
                    <a href={`/locations/${location.id}`} className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="find-location"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Can't Find a Location Near You?</h2>
            <p>We're constantly expanding to serve more communities. Let us know where you'd like to see an ACE Storage facility.</p>
            <a href="/contact" className="btn btn-primary">Request a Location</a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Locations