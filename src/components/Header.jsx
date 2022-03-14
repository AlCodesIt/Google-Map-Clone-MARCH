import React, { useState } from 'react'
import {IoSearch, IoStar, IoChevronDown,} from 'react-icons/io5'
import {MdRestaurant, MdLocalHotel, MdMap} from "react-icons/md"
import {Autocomplete} from '@react-google-maps/api'
import {Rating} from '@material-ui/lab'
import { AnimatePresence, motion } from "framer-motion"
const ratingsData = [
    { id: 1, ratings : 2.0, value : 2 },
    { id: 2, ratings : 3.0, value : 3 },
    { id: 3, ratings : 4.0, value : 4 },
    { id: 4, ratings : 5, value : 5 },
]

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)
  return (
      <AnimatePresence initial={false}>
    <div className='fixed flex items-center inset-x-0 top-2 p-4 gap-4 z-50'>
        {/* Search Box Starts */}
        <div className='flex items-center gap-2 bg-white w-400 py-1 px-3 rounded-lg shadow-lg'>

            {/* <Autocomplete> */}

            <input type="text" className='w-full h-full border-none outline-none text-gray-700 text-base' placeholder='Search Here......' />
                <IoSearch classname='text-lg text-gray-700' />
            {/* </Autocomplete> */}
                {/* Search Box Ends */}
        </div>

        {/* Ratings Starts Here */}

        <div className='relative ml-6'>
            <div onClick={() => setIsMenuActive(!isMenuActive)} className='bg-white py-2 px-3 flex items-center justify-center gap-2 rounded-lg shadow-lg cursor-pointer'>
                <IoStar classname=' text-base text-gray-700 '/> 
                <p>Choose Ratings</p> 
                <IoChevronDown className='text-base text-gray-700'/>
            </div>

                {
                    isMenuActive && (

            <motion.div
                initial={{opacity : 0, scale : 0.5}}
                animate={{opacity : 1, scale : 1 }}
                exit={{opacity : 0, scale : 0.5}}
             className='w-52 bg-white rounded-lg shadow-lg absolute top-11 inset-x-0 flex flex-col gap-1 items-start justify-evenly'>

                <p className='flex items-center gap-2 px-4 py-1 cursor-pointer hover:bg-gray-200 mt-2 w-full'>ALL Ratings</p>
                <div className='w-full mb-2 -mt-2'>
                    {
                        ratingsData && ratingsData.map(data => (

                            <p key={data.id} className='flex items-center gap-2 px-4 py-1 text-orange-500 text-base font-semibold cursor-pointer hover:bg-gray-200'>{data.ratings} <Rating size="small" value={data.value} readOnly /></p>
                        ))
                    }
                    </div>
            </motion.div>
                    )
                }


        </div>
        {/* Ratings Ends Here */}

        {/* Restaurants */}
            <motion.div 
            whileTap={{ scale: 0.8 }}
            className='bg-white px-4 py-2 shadow-lg rounded-lg cursor-pointer flex items-center gap-3'>
                <MdRestaurant className='text-lg text-gray-700'/> <p className='text-base pointer-events-none text-gray-700'>Restaurants</p>
            </motion.div>
        {/* Hotels */}
             <motion.div 
            whileTap={{ scale: 0.8 }}
            className='bg-white px-4 py-2 shadow-lg rounded-lg cursor-pointer flex items-center gap-3'>
                <MdLocalHotel className='text-lg text-gray-700'/> <p className='text-base pointer-events-none text-gray-700'>Hotels</p>
            </motion.div>
        {/* Attractions */}
         <motion.div 
            whileTap={{ scale: 0.8 }}
            className='bg-white px-4 py-2 shadow-lg rounded-lg cursor-pointer flex items-center gap-3'>
                <MdMap className='text-lg text-gray-700'/> <p className='text-base pointer-events-none text-gray-700'>Attractions</p>
            </motion.div>
    </div>
    </AnimatePresence>
  )
}

export default Header