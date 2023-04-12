import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
const SidebarItem = ({path, name, icon}) => {
  const router = useRouter();
  const {cat} = router.query;
  return (   
    <Link href={`/?cat=${path}`} 
    style={{ backgroundColor: cat === path ? "#E43F5A" : ""}}
    className='flex
    hover:bg-red-500
    transition-all
    duration-500
    items-center 
    gap-3
    sm:w-[200px]
    md:py-3 
    flex-row-reverse
    font-normal 
    shadow-md
    md:px-2 
    px-10
    rounded-full
    md:ml-0
    ml-3
    md:mt-5 
    '>
      <span 
      className={`${cat === name ? "text-white" : "text-red-500"} hover:text-white text-xl`}>
        {icon}
      </span>
      <span className='w-[70px] md:w-[120px] text-right text-sm md:text-xl '>
        {name}
      </span>
    </Link>
  )
}

export default SidebarItem