import React, { useState } from "react"
import Header from "./Header"

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
    <div  className="h-full flex flex-col bg-main-bg dark:bg-main-dark-bg text-gray-500 dark:text-white overflow-hidden">
        <Header setDarkMode={setDarkMode} dark={darkMode} />
        <div className="flex-1">
            {children}
        </div>
    </div>
    </div>
  )
}

export default Layout