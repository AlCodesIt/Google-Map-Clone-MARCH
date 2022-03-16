import React from 'react'
import { Rating } from '@material-ui/lab'
import {MdLocationPin} from 'react-icons/md'
import CardLoadingContainer from './CardLoadingContainer'

const DataCardContainer = ({data}) => {


    return (
    <div className='w-full h-auto p-1 bg-white shadow-lg flex items-center justify-center flex-col rounded-md'>
      {/* Top */}
        <div className='flex items-center justify-between w-full'>
            <div className='flex-1 flex-col items-center justify-center gap-2 px-2'>
              {/* Title */}
                <div className='flex items-center justify-between px-1'>
                      <p className='text-base text-gray-800 font-semibold'>{data?.name?.length > 30 ? `${data?.name?.slice(0,30)}` : data?.name}</p>
                      <p className='text-xs font-semibold text-gray-500'>{data?.price}</p>
                </div>
                {/* Ratings */}
                <div className='flex items-center gap-1'>
                      <Rating size= 'small' value={Number(data?.rating)} readOnly />
                      <p className='text-xs text-gray-500' > ({data?.num_reviews}) </p>
                      <p className='text-sm text-gray-500 ml-auto'> {data?.price_level} </p>
                </div>
                {/* Rankings */}
                <div>
                      <p className='text-xs text-gray-500 font-semibold'>{data?.ranking}</p>
                </div>
                {/* Status */}
                <div >
                  <p className='text-sm my-1 text-gray-500'> {data?.open_now_text} </p>
                </div>
                {/* Badges */}

                    {
                      data?.dietary_restrictions && (

                <div className='flex flex-1 items-center gap-2 flex-wrap'>
                  {data?.dietary_restrictions.map((n) => (

                      <p key={n.key} className='bg-green-200 px-[2px] shadow-sm text-[10px] font-semibold rounded-sm uppercase'>{n.name}</p>
                  ))}
                </div>
                      )
                    }

            </div>
            <img src={data?.photo ? data?.photo.images.large.url : "https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?compress=1&resize=400x300&vertical=top"} className='w-28 h-28 object-cover rounded-lg' alt={data?.name} />
        </div>
        {/* Address */}
        <p className='text-xs text-gray-700 gap-1 flex items-center mr-auto mt-2'>
          <MdLocationPin className='text-base text-gray-700' /> {data?.address}
        </p>
    </div>
  )
}

export default DataCardContainer