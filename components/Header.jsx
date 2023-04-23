import React, {useState} from 'react'
import {MdDarkMode, MdLightMode} from 'react-icons/md';
import {AiFillFacebook} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs'
import {useRouter} from 'next/router';
import Link from 'next/link';

const Header = ({setDarkMode, dark}) => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!search) return 
    router.push(`/search/${search}`)
    setSearch("")
  }
  
  return (
    <div className="md:px-[40px] 
    sm:px-4 
    px-1 
    items-center 
    max-h-[10vh] 
    py-5 
    w-full 
    flex 
    justify-between 
    flex-row-reverse 
    border-b-1
    shadow-md
    ">
        <Link href="/" className="logo">
          <h1 className="sm:text-lg text-center sm:text-left  text-sm font-bold uppercase">
            oumat {" "}
            <span className="text-[#D65A31]">iqraa</span>
          </h1>
        </Link>
        <div className="flex items-center sm:gap-2 gap-1 flex-row-reverse">
          <form onSubmit={onSubmit} className='px-2 py-1 border-1 border-gray-400 flex items-center rounded-lg'>
            <button type="submit">
              <BsSearch size={20} color="#D65A31" />
            </button>
            <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text' 
            placeholder='...بحث' 
            className="flex-1 bg-transparent focus:outline-none text-right" 
            />
          </form>
          <div className='h-full w-[1px] bg-gray-500 sm:mx-2 mx-1 '/>
          <div className="flex items-center sm:gap-2 gap-1">
            <AiFillFacebook size={25} className='text-gray-500 hover:text-gray-400'/>
            {dark ? 
            <MdDarkMode size={25} color="#D65A31" onClick={() => setDarkMode(false)}/> : 
            <MdLightMode size={25} color="#D65A31" onClick={() => setDarkMode(true)}/>
            }
          </div>
        </div>
    </div>
  )
}

export default Header