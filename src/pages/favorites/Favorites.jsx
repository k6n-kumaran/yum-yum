import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import DishItem from '../../components/DishItem';

const Favorites = () => {
  
     const {favoriteItems} = useContext(GlobalContext);
     

  return (
    <div className='container py-8 mx-auto flex flex-wrap justify-center gap-10'>
           {
            favoriteItems && favoriteItems.length > 0?
               favoriteItems.map((item,index) => {
                return <DishItem  key={index} item={item}/>
               })
            : <div className='flex justify-center  items-center h-[60vh]'>
              <p className='lg:text-4xl text-2xl font-bold text-gray-600 text-center'>Nothing is added in favorites!</p>
            </div>
           }
    </div>
  )
}

export default Favorites