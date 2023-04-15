import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { fetchFromAPI } from '@/utils/fetchData';
import Spinner from '@/components/Spinner';
import Image from 'next/image'
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Book = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    setIsLoading(true)
    fetchFromAPI(`books/${id}`).then((data) => {
      setBookDetails(data);
      setIsLoading(false)
    }).catch((error) => console.log(error))
  }, [])

  console.log(bookDetails)
  if(isLoading) return  <Spinner />
  return (
    <div className='px-5 sm:px-10 md:px-20 h-full mt-10 overflow-auto visible-scrollbar'>
      <div className='w-full h-full flex flex-col md:flex-row-reverse gap-10 md:gap-2'>
        <div className='flex-1 max-h-[350px]'>
          <img 
          src={bookDetails?.img} 
          alt="book" 
          className='h-full object-cover border-1 border-light-gray'/>
        </div>
        <div className='flex-1 text-right'>
          <h1 className='text-lg text-teal-500 font-bold mb-3'>{bookDetails?.title}</h1>
          <h1 className='text-xl font-extrabold text-red-500 mb-4 hover:underline'>
            <Link href={'bookDetails?.authorId'} >{bookDetails?.author}</Link>
          </h1>
          <div className='w-full flex items-center justify-start gap-2 p-2 flex-row-reverse text-md'>
            <span className='p-2 rounded-full border-1 border-red-500 text-red-500'>
              <Link href={`/?cat/${bookDetails?.type?.url}`}>{bookDetails?.type?.genre}</Link>
            </span>
            <span className='p-2 rounded-full border-1 border-light-gray text-light-gray'>
              {bookDetails?.words}
            </span>
          </div>
          <hr className='w-full h-[0.3px] rounded-full shadow-md my-2' />
          <p className='text-light-gray leading-10'>
            {bookDetails?.text}
          </p>
        </div>
      </div>
      <div>
        <h1 className='text-5xl text-red-500'>tahmil</h1>
        <div>
          {bookDetails?.downloads?.map(download => (
            <a>
              <img src={download.downloadImg} />
              <span>{download.downloadTitle} </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Book