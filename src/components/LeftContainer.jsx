import React, { useState } from 'react'
import DataCardContainer from '../components/DataCardContainer'
import CardLoadingContainer from './CardLoadingContainer'


const LeftContainer = ({isDataLoading}) => {


  return (
    <div className='h-full w-full overflow-x-hidden overflow-y-scroll flex flex-col items-start justify-start p-4 pt-24 gap-6 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400'>
      
          {
            isDataLoading ? (
              <>
              {Array.apply(null, {length : 8}).map((e,i) => (
                <CardLoadingContainer key={i+1} />
              ))}
              
              </>
            ) : (
              <DataCardContainer/>
            )
          }

         
    </div>
  )
}

export default LeftContainer