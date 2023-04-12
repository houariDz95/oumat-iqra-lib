import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
const SidebarItem = ({path, name, icon}) => {
  const router = useRouter();
  const {cat} = router.query;
  return (   
    <Link href={`/?cat=${path}`} 
    style={{ backgroundColor:  path === cat  ? "red" : "" }}
    className={`
    text-white
    hover:
    flex
    transition-all
    duration-500
    items-center 
    gap-3
    md:py-3 
    flex-row-reverse
    font-normal 
    shadow-md
    px-2 
    rounded-full
    md:ml-0
    ml-3
    md:mt-5 
    `}>
      <span 
      style={{ color:  path === cat  ? "white" : "red" }}
      >
        {icon}
      </span>
      <span 
      style={{ opacity: path === cat ? "1" : "0.8"}}
      className='w-[70px] md:w-[120px] text-right text-sm md:text-xl '>
        {name}
      </span>
    </Link>
  )
}

export default SidebarItem