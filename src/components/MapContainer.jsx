import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapContainer = ({setCoordinates, Coordinates}) => {
  return (
    <div className='w-full h-full'>
        <GoogleMapReact
            bootstrapURLKeys={{ key : process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
            defaultCenter={Coordinates}
            center={Coordinates}
            defaultZoom={10}
            margin={[50,50,50,50]}
            options={''}
            onChange={() => {}}
            onChildClick={() => {}}
        />
    </div>
  )
}

export default MapContainer