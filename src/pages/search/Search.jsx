import React, { useContext, useLayoutEffect,useEffect, useRef } from 'react'
import gsap from 'gsap'
import { meal } from '../../assets'

import { GlobalContext } from '../../context'

const Search = () => {

   const {searchParam,setSearchParam,handleSubmit} = useContext(GlobalContext)
    const comp = useRef(null);



   
    

    useLayoutEffect(() => {
     let ctx = gsap.context(() => {
       
         gsap.from("#leftBanner", {
          xPercent: -100,
          duration: 1.2,
          opacity:0
          
         });
         gsap.from("#rightBanner", {
          xPercent: 100,
          duration: 1.3,
          opacity: 0
         })
     },comp)

     return ()=> ctx.revert()
    },[])

   

  return (
    <div ref={comp}>

   
    <div  className='w-full flex  flex-col-reverse md:flex-row  gap-1 text-center md:text-start  md:pl-20 '>
         <div id='leftBanner' className=' w-full md:w-1/2 flex flex-col gap-4  md:py-16 justify-center  h-full  '>
            <h1 className='text-5xl sm:text-4xl md:text-4xl lg:text-6xl text-gray-800 tracking-wide font-bold'>Eat Today</h1>
            <h2 className='tracking-wider text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Live Another Day</h2>
            <p className='text-lg mt-4 text-gray-500   lg:w-[100%]'>
             Welcome to <strong>Yum Yum</strong>, your go-to destination for discovering and exploring a world of culinary
             delights! Our Yum Yum web app is designed to help you easily find the perfect recipes to 
             satisfy your cravings and impress your taste buds.
            </p>
            <form onSubmit={handleSubmit}>
              <input 
              className='text-md outline-none py-2 pl-4 sm:pr-20 md:pr-28 
               rounded-sm shadow-lg  shadow-gray-200 focus:shadow-gray-300 mt-4 font-semibold text-gray-500'
              type="text" 
              name="search" 
              placeholder='Search Items' 
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
               />
            </form> 
          
         </div>
         <div id='rightBanner' className=' w-full md:w-1/2  h-full  md:px-1 '>
             <img src={meal} className=' object-cover flex justify-center items-center h-full md:h-[80vh] w-full' alt="Meal" />
         </div>
    </div>
    </div>
  )
}

export default Search