import React from 'react'
import GoogleMapReact from 'google-map-react'
import {MdLocationPin} from 'react-icons/md'

const MapContainer = ({setCoordinates, Coordinates, setBounds, data}) => {
  return (
    <div className='w-full h-full'>
        <GoogleMapReact
            bootstrapURLKeys={{ key : process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
            defaultCenter={Coordinates}
            center={Coordinates}
            defaultZoom={10}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e) => { setCoordinates({lat : e.center.lat, lng: e.center.lng}); setBounds({ne : e.marginBounds.ne, sw : e.marginBounds.sw}) }}
            onChildClick={() => {}}
        >
          {
            data?.map((n, i) => (
              <div key={i} lat={Number(n.latitude)} lng={Number(n.longitude)} className="cursor-pointer relative" >
                  <MdLocationPin className='text-red-500 text-3xl' />
              </div>
            ))
          }
          </GoogleMapReact>
    </div>
  )
}

export default MapContainer