import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

export const Circular = () => {
  return (
    <div className="md:h-screen h-[80vh] md:flex-[0.8]  md:relative w-full dark:bg-main-dark-bg bg-main-bg flex items-center justify-center">
      <div className="text-4xl">
        <CircularProgress xs={{color: "red"}} />
      </div>
    </div>
  )
}

