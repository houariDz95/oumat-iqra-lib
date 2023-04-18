import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import QueryWrapper from './QueryWrapper';
import { Noto_Kufi_Arabic } from 'next/font/google'
const kofi = Noto_Kufi_Arabic ({
  subsets: ['arabic'],
  weight: ["400", "700"],
  varible: "--font-kofi",
})

const Layout = ({children}) => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? "dark" : ""}>
    <div  className="h-full flex flex-col bg-main-bg dark:bg-main-dark-bg text-[#222831] dark:text-white overflow-hidden">
      <QueryWrapper>
        <Header setDarkMode={setDarkMode}/>
        <div className="flex-1">
            {children}
        </div>
      </QueryWrapper>
    </div>
    </div>
  )
}

export default Layout