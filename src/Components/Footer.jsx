import React from 'react'
import Itemscontainer from './Itemscontainer'
import Socialicons from './Socialicons'
import {Icons} from './Menus'

const Footer = () => {
  return (
    <footer className='bg-blue-400  text-white '>
      <div className='md:flex md:justify-between md:items-center sm:px-12  px-4 bg-teal-400 py-7 '>
         <h1 className='lg:text-4xl yexy-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-600'>Subscribe</span> until youre ready to launch</h1>
         <div>
            <input type="text" placeholder='Enter your ph.no' className='text-gray-800 sm:w-72 w-fill sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
            <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[poppins] rounded-md text-white md:w-auto w-full' >Subscribe</button>
         </div>
      </div>
      <Itemscontainer/>, 
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-black  text-sm pb-8'>
         <span>2023 Appy. All rights reserved</span>
         <span>Terms . Privacy Policy</span>
         <Socialicons Icons = {Icons}/>
      </div>
    </footer>
  )
}

export default Footer
