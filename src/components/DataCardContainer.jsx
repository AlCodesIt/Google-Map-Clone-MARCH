import React from 'react'
import { Rating } from '@material-ui/lab'
import {MdLocationPin} from 'react-icons/md'
import CardLoadingContainer from './CardLoadingContainer'

const DataCardContainer = () => {


    return (
    <div className='w-full h-auto p-1 bg-white shadow-lg flex items-center justify-center flex-col rounded-md'>
      {/* Top */}
        <div className='flex items-center justify-between w-full'>
            <div className='flex-1 flex-col items-center justify-center gap-2 px-2'>
              {/* Title */}
                <div className='flex items-center justify-between px-1'>
                      <p className='text-base text-gray-800 font-semibold'>Mix Bar Lounge...</p>
                      <p className='text-xs font-semibold text-gray-500'>$14-25$</p>
                </div>
                {/* Ratings */}
                <div className='flex items-center gap-1'>
                      <Rating size= 'small' value={4} readOnly />
                      <p className='text-xs text-gray-500' > (1471) </p>
                      <p className='text-sm text-gray-500 ml-auto'> $$-$$ </p>
                </div>
                {/* Rankings */}
                <div>
                      <p className='text-xs text-gray-500 font-semibold'>#438 of 1238 Restaurant in Somewhere</p>
                </div>
                {/* Status */}
                <div >
                  <p className='text-sm my-1 text-gray-500'> Open Now </p>
                </div>
                {/* Badges */}
                <div className='flex flex-1 items-center gap-2 flex-wrap'>
                      <p className='bg-green-200 px-[2px] shadow-sm text-[10px] font-semibold rounded-sm uppercase'>VEGAN OPTIONS</p>
                      <p className='bg-green-200 px-[2px] shadow-sm text-[10px] font-semibold rounded-sm uppercase'>VEGAN OPTIONS</p>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80" className='w-28 h-28 object-cover rounded-lg' alt="" />
        </div>
        {/* Address */}
        <p className='text-xs text-gray-700 gap-1 flex items-center mr-auto mt-2'>
          <MdLocationPin className='text-base text-gray-700' /> Some Address Over Here
        </p>
    </div>
  )
}

export default DataCardContainer