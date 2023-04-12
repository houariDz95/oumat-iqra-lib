import React from 'react'
import Image from 'next/image';
import {BsSearch} from 'react-icons/bs'
const Header = ({setDarkMode}) => {
  return (
    <div className="shadow-md sticky top-0 px-4 py-2 w-full flex justify-between flex-row-reverse">
        <Image 
          src="/images/oumat-iqraa-logo.png" 
          width={100}
          height={100}
          className='object-cover rounded-full'
          alt="logo" 
          onClick={() => setDarkMode((prev) => !prev)}
        />
        <form className='flex 
        items-center 
        w-[350px] 
        md:w-[500px]  
        border-1 
        boder-light-gray 
        rounded-full
        bg-white
        px-2
        '>
          <button type="submit">
            <BsSearch size={22} color="red" />
          </button>
          <input 
          type='text' 
          placeholder='...بحث' 
          className="flex-1 
          text-lg 
          text-gray-500
          focus:outline-none 
          text-right 
          bg-transparent" 
          />
        </form>
    </div>
  )
}

export default Header