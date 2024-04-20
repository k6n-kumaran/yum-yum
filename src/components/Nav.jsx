import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoFastFood } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RiMenuAddFill } from "react-icons/ri";

import { GlobalContext } from '../context'

const Nav = () => {
    
    const {scroll,setScroll} = useContext(GlobalContext)
    const [menu,setMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    function handleMenu() {
      setMenu(!menu);
    }

    function handleRefresh() {
        window.location.href = '/yum-yum/'
    }
  return (
    <nav className={`flex  w-full justify-between sticky  z-10 navBg top-0 ${scroll ? 'navShadow' : ""}`}>
        <div className='flex gap-1 sm:gap-3 justify-center   items-center px-4 sm:px-10 md:px-20 py-8 h-full   '
        >
            <IoFastFood size={0} className='text-orange-500 text-3xl sm:text-4xl'/>
            <h1 onClick={handleRefresh} className='text-2xl sm:text-3xl font-semibold sm:font-bold cursor-pointer uppercase text-orange-500 '  >
               Yum Yum
            </h1>
        </div>
        <div className='  px-2 sm:px-10 md:px-20 flex items-center justify-center py-8 '>
        <div>
        {menu ?
          <IoMdClose  size={40} onClick={handleMenu} className='sm:hidden text-orange-500 cursor-pointer '/>
        : <RiMenuAddFill size={30} onClick={handleMenu} className='sm:hidden text-orange-500 cursor-pointer '/>
        }
        
        {menu? 
         <div className={`menu active`}>
            <ul className={`flex flex-col gap-5 pl-4 pt-6 navBg h-[100vh]  w-[45vw]   `}>
            <NavLink to={"/yum-yum"} onClick={handleMenu} className=" text-orange-500 font-semibold tracking-wider">
                    Home
                </NavLink>
                
                <NavLink to={"/yum-yum/favorites"} onClick={handleMenu} className=" text-orange-500 font-semibold tracking-wider">
                   Favourites
                </NavLink>
            </ul>
         </div>
         :null}
        </div>
  
        {/* <RiMenuAddFill size={30} onClick={handleMenu} className='sm:hidden text-orange-500 cursor-pointer '/>
        <IoMdClose  size={40} className='sm:hidden text-orange-500 cursor-pointer '/> */}
        
        <ul className=' hidden sm:flex gap-3 md:gap-6 text-md'>
                
                <NavLink to={"/yum-yum"} className=" text-orange-500 font-semibold tracking-wider">
                    Home
                </NavLink>
                
                <NavLink to={"/yum-yum/favorites"} className=" text-orange-500 font-semibold tracking-wider">
                   Favourites
                </NavLink>
        </ul>
        </div>
    </nav>
  )
}

export default Nav