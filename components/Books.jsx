import React from 'react'
import BookCard from './BookCard'

const Books = ({books}) => {
  return (
    <div className="w-full grid gird-cols-2 md:grid-cols-4 sm:grid-cols-3 overflow-scroll relative">
      {books?.map(book => (
        <BookCard book={book}/>
      ))}
    </div>
  )
}

export default Books