import React from 'react'
import Pepsi from '../../../assets/Images/pepsi.png'

function MenuCard() {
  return (
    <div className='w-[100%] md:w-1/2 lg:w-1/3 inline-flex'>
        <div className='flex flex-col items-center bg-gray-400 m-6 rounded-md px-12 w-[100%]'>
            <img src={Pepsi} alt="Pepsi" className='h-56 w-64' />
            <h1 className='text-4xl font-semibold text-gray-700'>Pepsi</h1>
        </div>
    </div>
  )
}

export default MenuCard
