import React from 'react'
import { Link } from 'react-router-dom';

const DishItem = ({item}) => {
  return (
    <div data-scroll-animation className='flex flex-col w-64 sm:w-80 overflow-hidden p-5 bg-[#E1F7F5] shadow-xl gap-5  rounded-xl '>
      <div className='h-50  flex  justify-center overflow-hidden items-center  rounded-md'>
        <img className='block w-full h-[150px] brightness-90 hover:scale-105 hover:brightness-100 duration-300 cursor-pointer' src={item?.image_url} alt={item?.title} />
      </div>
      <div className='text-center'>
        <span className='text-sm font-medium text-purple-500'>{item?.publisher}</span>
        <h2 className='text-lg font-semibold  truncate uppercase text-gray-500'>{item?.title}</h2>
        <Link to={`/dish-item/${item?.id}`} className=' mt-4 text-sm p-2 px-6 rounded-md   font-medium tracking-wider  inline-block shadow-md bg-gray-600 hover:bg-gray-700 duration-200 text-white'>
           Dish Details
        </Link>
      </div>
    </div>
  )
}

export default DishItem;