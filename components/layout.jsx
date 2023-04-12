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
    <div  className="h-screen flex flex-col bg-main-bg dark:bg-main-dark-bg text-secondary-dark-bg dark:text-white">
      <QueryWrapper>
        <Header setDarkMode={setDarkMode}/>
        <div className="flex-1">
            {children}
        </div>
        <Footer />
      </QueryWrapper>
    </div>
    </div>
  )
}

export default Layout