import React from 'react'
import BookCard from './BookCard'

const Books = ({books}) => {
  return (
    <div className="w-full 
    flex
    flex-wrap
    justify-between
    overflow-auto 
    relative 
    h-full 
    visible-scrollbar 
    px-5
    mx-auto
    pb-[200px]
    ">
      {books?.map(book => (
        <BookCard book={book}/>
      ))}
    </div>
  )
}

export default Books