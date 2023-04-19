import React from 'react'
import { categories } from '@/constants'
import SidebarItem from './SidebarItem'
const Sidebar = ({setCat, category}) => {
  return (
    <div className='flex-[0.2]'>
    <div className="h-auto md:h-screen pb-10 md:w-[20%] md:border-l-1 border-gray-200 dark:border-[#222831] px-1 fixed right-0">
      <div      
      className="h-full 
      flex sm:flex-row 
      md:flex-col 
      w-screen 
      py-3 
      md:w-full 
      hidden-scrollbar
      hover:md:overflow-y-auto
      hover:overflow-x-auto
      md:overflow-x-hidden
      ">
        {categories.map(cat => (
          <SidebarItem key={cat.name} name={cat.name} path={cat.path} icon={cat.icon} setCat={setCat} cat={category} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Sidebar