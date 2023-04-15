import React from 'react'
import { categories } from '@/constants'
import SidebarItem from './SidebarItem'
const Sidebar = () => {
  return (
    <div className='flex-[0.2]'>
    <div className="h-auto md:h-[95vh]  md:w-[20%] md:border-l-1 border-gray-700 px-1 fixed right-0">
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
          <SidebarItem key={cat.name} name={cat.name} path={cat.path} icon={cat.icon}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Sidebar