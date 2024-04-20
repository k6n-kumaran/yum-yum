import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context';

const Details = () => {

  const  {id} =  useParams();
  

  const {dishDetails, setDishDetails, handleAddFavorites,favoriteItems}  = useContext(GlobalContext);

  useEffect(()=> {
    async function getDishDetails() {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await res.json();
      
      if(data?.data) {
        setDishDetails(data?.data?.recipe);
      }
    }

    getDishDetails()
  },[])

  return (
    <div  className=' container mx-auto py-10 grid grid-cols-1 px-3 sm:px-0 lg:grid-cols-2  gap-10'>
       <div className=' row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-lg group  shadow-lg'>
          <img src={dishDetails?.image_url} alt={dishDetails?.title} 
          className='w-full h-full  object-cover block  duration-300' />
        </div>
       </div>
       <div className='flex flex-col gap-3'>
            <span className='text-md font-medium text-purple-400'>{dishDetails?.publisher}</span>
            <h2 className='text-3xl font-semibold  uppercase  truncate text-gray-500'>{dishDetails?.title}</h2>
            <div>
              <button 
              onClick={() => handleAddFavorites(dishDetails)} className=' p-2 px-5  font-semibold rounded-lg bg-gray-700 hover:bg-gray-800 text-white tracking-wide '>
              {favoriteItems && favoriteItems.length > 0 && favoriteItems.findIndex((item) => item.id === dishDetails?.id) !== -1
              ? "Remove From Favourites"
              :"Add to Favourites"}
              </button>
            </div>
            <div>
              <span className=' text-2xl font-semibold  text-black'>Ingredients : </span>
              <ul className='flex flex-col gap-2 mt-3'>
                 {
                  dishDetails?.ingredients.map((ingredient,index) => {
                    return <li key={index} className='p-1'>
                               <span className='text-lg font-medium text-black'>{ingredient.quantity} {ingredient.unit}</span>
                               <span className='text-lg font-medium text-black'> {ingredient.description} </span>
                            </li>
                  })
                 }
              </ul>
            </div>
       </div>
    </div>
  )
}

export default Details