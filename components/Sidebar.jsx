import React from 'react'
import { categories } from '@/constants'
import SidebarItem from './SidebarItem'
const Sidebar = ({setCurrentPage}) => {
  return (
    <div className='flex-[0.2]'>
    <div className="h-auto max-h-[90vh] 
    md:pb-4

    md:w-[20%] 
    md:border-l-1 
    border-gray-200 
    dark:border-[#222831] 
    px-1 md:fixed right-0
    overflow-auto
    hidden-scrollbar
    ">
      <div      
      className="h-full 
      flex sm:flex-row 
      md:flex-col 
      w-screen
      px-2
      md:px-0 
      py-3 
      md:w-full 
      ">
        {categories.map(cat => (
          <SidebarItem 
          setCurrentPage={setCurrentPage}
          key={cat.name} 
          name={cat.name} 
          path={cat.path} 
          icon={cat.icon} 
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Sidebar