import React, {useEffect} from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Spinner from '../../components/Spinner';
import { fetchFromAPI } from '@/utils/fetchData';
import Link from 'next/link';
import {IoMdArrowDropleft} from 'react-icons/io';

async function getSearch(title){
  const response = await fetchFromAPI(`search/${title}`)
  return response
}

const Search = () => {
  const router = useRouter()
  const {title} = router.query;
  const {data, isLoading, refetch,  isFetching, failureCount} = useQuery({
      queryKey: ['detail-search'],
      queryFn: () => getSearch(title)
    })
  
    useEffect(() => {
      refetch()
    }, [title])
    console.log(data)
    if(isLoading) return <Spinner />
    if (Object.keys(data).length === 0) return  <h1>Nothing found</h1>
    if( isFetching) return <h1>wait plese</h1>
    return (
    <div className="px-5 sm:px-10 md:px-20 min-h-screen mt-10">
      <div className="mt-10 text-right">
        <div className="w-full flex items-center justify-start border-b-1 border-gray-500">
          <h1 className='text-4xl py-8 font-bold'>نتائج البحث <span className="underline">{title}</span></h1>
        </div>
        <h2 className="text-xl p-2 mb-2 ">نتائج البحث</h2>
        <h2 className="text-xl p-2 mb-2 ">الكتب</h2>
        <div className="flex items-end flex-col">
          {data?.map(item => (
              <div key={item.bookId} className="flex items-center gap-2 p-2 flex-row-reverse text-md">
                <IoMdArrowDropleft className='text-gray-300'/>
                <Link className="dark:text-teal-400 text-teal-500 cursor-pointer hover:underline" href={item?.bookId}>{item?.bookTitle} </Link> · بقلم
                <Link className="dark:text-teal-400 text-teal-500 cursor-pointer hover:underline" href={item?.authorId}> {item?.authorTitle}</Link>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Search