import React from 'react'
import Spinner from '@/components/Spinner';
import {  useQuery } from "@tanstack/react-query";
import BookCard from '../../components/BookCard'
import { useRouter } from 'next/router';
import { fetchFromAPI } from '@/utils/fetchData';

async function getAuthor(id){
  const response = await fetchFromAPI(`contributors/${id}`)
  return response
}

const Author = () => {
  const router = useRouter()
  const {id} = router.query

  const {data, isLoading} = useQuery({
    queryKey: ['detail-autthor'],
    queryFn: () => getAuthor(id)
  })

  if(isLoading) return <Spinner />
  return (
    <>{data?.message !== "Request failed with status code 500" ?
      <div className='px-5 sm:px-10 md:px-20 min-h-screen mt-10 '>
        <div  className="w-full 
        h-full 
        flex 
        flex-col 
        items-center 
        md:items-start 
        md:flex-row-reverse 
        gap-[30px] 
        md:gap-10">
          <div className="flex-1"> 
            <img 
            src={data?.img} 
            alt="author" 
            className='w-[300px] h-full object-cover border-1 border-light-gray'
            />
          </div>
          <div className='flex-1 text-right'>
            <h1 className='text-lg text-teal-500 font-semibold mb-3'>{data?.name}</h1>
            <p className="dark:text-gray-300 text-[#222831] leading-10 mb-1">{data?.descreption}</p>
          </div>
        </div>
        <div className="md:pr-[280px] pr-0 mt-5 text-right">
          <h1>لكتب المُؤلّفة للكاتب  {data?.name} ({data?.books?.length} كتاب)</h1>
          <div className="
          w-full 
          flex
          flex-wrap
          justify-center
          gap-10
          relative 
          h-full 
          px-5
          mx-auto
          ">
            {data?.books?.map(book => (
              <BookCard book={book}/>
            ))}
          </div>
        </div>
      </div> : <Spinner />
      }
    </>
  )
}

export default Author