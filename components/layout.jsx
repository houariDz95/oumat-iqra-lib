import Header from "./Header"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Noto_Kufi_Arabic } from 'next/font/google'
import { LinearProgress } from "@mui/material";


const kofi = Noto_Kufi_Arabic ({
  subsets: ['arabic'],
  weight: ["400", "700"],
  varible: "--font-kofi",
})

const Layout = ({children}) => {
  const [darkMode, setDarkMode] = useState(true);
  
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = null;
  
    const handleStart = () => {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            clearInterval(timer);
            return 90;
          }
          return prevProgress + 10;
        });
      }, 1000);
      setLoading(true);
    };
  
    const handleComplete = () => {
      setLoading(false);
      clearInterval(timer);
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 500);
    };
  
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Oumat Iqraa Library</title>
        <link rel="icon" href="/images/oumat-iqraa-website-favicon-color.png"  sizes="64x64" />
      </Head>
      <div className="fixed z-10 top-0 w-full">
        {loading &&  <LinearProgress sx={{color: "red"}} variant="determinate" color="info"  value={progress} />}
      </div>
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