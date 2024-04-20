import React, { useContext, useLayoutEffect, useRef } from 'react'
import DishItem from '../../components/DishItem';
import { GlobalContext } from '../../context'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Results = () => {

  const {loading,dishList}  = useContext(GlobalContext);
 

  if(loading) {
    return <div className='flex items-center justify-center flex-col bg-black  text-white mt-5'>
       
    </div>
  }
//justify-center container py-8 mx-auto flex flex-wrap gap-10
  return (
    <div>
   

    
    <div  id='results' className=' mt-12 mb-10 grid md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-y-10'>
           {
            dishList && dishList.length > 0?
               dishList.map((item,index) => {
                return <DishItem  key={index} item={item}/>
               })
            : null
           }
           
    </div>

  </div>  
  )

 

  }
export default Results;