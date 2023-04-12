import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div className="h-full flex-[0.8]  flex items-center justify-center">
      <div className="text-4xl">
        <CircularProgress />
      </div>
    </div>
  )
}

export default Spinner