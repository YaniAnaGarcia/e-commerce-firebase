import React from 'react'

export const Header = () => {
  return (
    <div className='fixed z-50 w-screen bg-slate-300 p-6 px-16'>
        {/* desktop */}
        <div className='hidden md:flex w-full h-full bg-red-600 p-4'></div>

        {/* mobile */}
        <div className='flex md:hidden w-full h-full bg-blue-500 p-4'></div>
    </div>
  )
}
