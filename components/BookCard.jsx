import React from 'react'
import Link from 'next/link';
const BookCard = ({book}) => {
  return (
    <Link href={`${book.id}`} 
    className='
    cursor-pointer
    relative 
    sm:w-[220px] 
    sm:h-[300px]
    xs:w-[180px]
    xs:h-[260px]
    w-[160px]
    h-[240px]
    group
    '>
      <div className='w-full h-full md:group-hover:opacity-30 '>
        <img src={book.img} alt="book"  className='w-full h-full object-cover' />
      </div>
      <span 
      className='hidden
       absolute 
       top-[50%] 
       left-[50%] 
       translate-x-[-50%] 
       translate-y-[-50%] 
       md:group-hover:block
       bg-main-red
       text-white
       text-lg
       font-bold
       w-[80%]
       py-2
       rounded-full
       text-center
       opacity-1
       z-10
       '>
        شاهد التفاصيل
      </span>
    </Link>
  )
}

export default BookCard