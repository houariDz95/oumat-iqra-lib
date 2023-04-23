import React from 'react'
import BookCard from './BookCard'

const Books = ({books}) => {
  return (
    <div className="w-full 
    flex
    flex-wrap
    justify-between
    md:justify-end
    md:gap-x-[50px]
    overflow-auto 
    relative 
    h-full 
    visible-scrollbar 
    px-2
    md:px-5
    pb-[200px]
    ">
      {books?.map(book => (
        <BookCard book={book} key={book?.id} />
      ))}
    </div>
  )
}

export default Books