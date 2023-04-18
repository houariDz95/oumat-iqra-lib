import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div className="h-screen md:flex-[0.8]  md:relative w-full dark:bg-main-dark-bg bg-main-bg flex items-center justify-center">
      <div className="text-4xl">
        <CircularProgress />
      </div>
    </div>
  )
}

export default Spinner