import React from 'react'
import { Skeleton } from '@material-ui/lab'

const CardLoadingContainer = () => {
  return (
         <div className='w-full h-auto p-1 bg-white shadow-lg flex items-center justify-center flex-col rounded-md'>
      {/* Top */}
        <div className='flex items-center justify-between w-full'>
            <div className='flex-1 flex-col items-center justify-center gap-2 px-2'>
              {/* Title */}
                <div className='flex items-center justify-between px-1'>
                      <Skeleton animation="wave" height={10} width="100%" />
                </div>
                {/* Ratings */}
                <div className='flex items-center gap-1'>
                      <Skeleton animation="wave" height={10} width="100%" />
                </div>
                {/* Rankings */}
                <Skeleton animation="wave" height={10} width="100%" />
                {/* Status */}
                <Skeleton animation="wave" height={10} width="100%" />
                {/* Badges */}
                <div className='flex flex-1 items-center gap-2 flex-wrap'>
                    <Skeleton animation="wave" height={10} width="100%" />
                </div>
            </div>
            <Skeleton animation="wave" height={120} width={120} />
        </div>
        {/* Address */}
        <Skeleton animation="wave" height={10} width="100%" />
    </div>
  )
}

export default CardLoadingContainer