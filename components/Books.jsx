import React from 'react'
import BookCard from './BookCard'

const Books = ({books}) => {
  return (
    <div className="
    w-full 
    flex
    flex-wrap
    justify-evenly
    md:justify-end
    md:gap-[30px]
    overflow-auto 
    relative 
    h-full 
    visible-scrollbar 
    md:px-2
    md:pb-[200px]
    ">
      {books?.map(book => (
        <BookCard book={book} key={book?.id} />
      ))}
    </div>
  )
}

export default Books