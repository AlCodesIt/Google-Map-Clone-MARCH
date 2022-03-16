import React, { useEffect, useState } from 'react'
import { getApiData } from '../API'
import Header from './Header'
import LeftContainer from './LeftContainer'
import MapContainer from './MapContainer'

const Home = () => {
  const [data, setdata] = useState([])
  const [filtereddata, setFiltereddata] = useState([])
  const [Coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [type, setType] = useState("restaurants")
  const [ratings, setRatings] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    setIsDataLoading(true)
    getApiData(bounds?.sw, bounds?.ne, type).then(data => {
      setdata(data)
      setIsDataLoading(false)
    });
  }, [Coordinates, bounds, type])

  useEffect(() => {
    const newData = data?.filter((n) => Number(n?.rating) > ratings);
    setFiltereddata(newData)
  }, [ratings])
  

  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-50 relative'>
      <Header setType={setType} setRatings={setRatings} setCoordinates={setCoordinates} />
      <div className='w-450 h-full overflow-hidden flex items-center justify-center'>
        <LeftContainer isDataLoading={isDataLoading} data= { filtereddata.length ? filtereddata : data} />
      </div>
      <div className='flex-1 h-full flex items-center justify-center'>
        <MapContainer setCoordinates={setCoordinates} Coordinates={Coordinates} setBounds={setBounds} data= {filtereddata.length ? filtereddata : data} />
      </div>
      </div>
  )
}

export default Home