import React, {useState} from 'react'
import Image from 'next/image';
import {BsSearch} from 'react-icons/bs'
import {useRouter} from 'next/router';

const Header = ({setDarkMode}) => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const onSubmit = () => {
    router.push(`/search/${search}`)
    setSearch("")
  }
  
  return (
    <div className="shadow-md sticky top-0 px-4 h-[5vh] w-full flex justify-between flex-row-reverse">
        <Image   
          src="/images/oumat-iqraa-logo.png" 
          width={50}     
          height={50}
          className='object-cover rounded-full'
          alt="logo"  
          onClick={() => setDarkMode((prev) => !prev)}
        />
        <form 
        onSubmit={onSubmit}
        className='flex 
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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