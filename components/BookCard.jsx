import React from 'react'
import Image from 'next/image'

const BookCard = ({book}) => {
  return (
    <div>
        <img src={book.img} alt="book"  />
    </div>
  )
}

export default BookCard