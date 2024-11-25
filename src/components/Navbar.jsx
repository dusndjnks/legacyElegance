import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import image from "../images/img1.png"

const Navbar = () => {

    const [extendNavbar,setExtendNAvbar] = useState(false)

  return (
    <div>
        <div className="font-serif bg-white justify-center h-24 items-center z-[+1] ">
            <nav className={`flex h-24  justify-between duration-500 bg-white relative md:px-20 px-10 md:static ${extendNavbar ? "h-80 pt-8" : "h-24 items-center"}`}>
                <div>
                <div className='flex '>
			    <img src={image} alt="" className='lg:w-24 w-20 '/>
                <Link to="/" className='md:text-5xl text-3xl s:text-4xl py-5 items-center  xs:static h-24'>Legacy Elegance</Link>
                </div>
                </div>
                <div className={`md:text-2xl text-xl gap-3 flex md:flex-row  duration-500 md:static absolute   xs:flex flex-col ${extendNavbar ? " left-10 top-28" : "left-[-200px] top-28"}  `}>
			        <Link to="/product">Product</Link>
			        <Link to="/cart">Cart</Link>
			        <Link to="/about">About</Link>
			        <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link> 
                </div>
                <div className='md:hidden' onClick={() => {setExtendNAvbar(open => !open)}}>
                    {
                        extendNavbar ? <CloseIcon/> : <MenuIcon/>
                    }
                </div>
            </nav>
        </div>  
    </div>
  )
}

export default Navbar

