import React from 'react'
import { useRouter } from 'next/router'
const Author = () => {
  const router = useRouter()
  console.log(router.query.id)
  return (
    <div>Author</div>
  )
}

export default Author