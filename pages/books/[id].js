import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { fetchFromAPI } from '@/utils/fetchData';
import {  useQuery } from "@tanstack/react-query";
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import {IoMdArrowDropleft} from 'react-icons/io'
async function getBook(id){
  const response = await fetchFromAPI(`books/${id}`)
  return response
}

const Book = () => {
  const router = useRouter();
  const {id} = router.query;

  const {data, isLoading, error} = useQuery({
    queryKey: ['book'],
    queryFn: () => getBook(id)
  })

  const handelClick = (cat) => {
    router.push('/')
    window.localStorage.setItem("cat", cat)
  }


  if(isLoading) return  <Spinner />
  console.log(data)
  return (
      <>
      {data ? (<div className='px-5 sm:px-10 md:px-20 min-h-screen mt-10 '>
      <div className='w-full h-full flex flex-col items-center md:items-start md:flex-row-reverse gap-[30px] md:gap-10'>
        <div className='flex-1'>
          <img 
          src={data?.img} 
          alt="book" 
          className='max-h-[350px] object-cover border-1 border-light-gray'/>
        </div>
        <div className='flex-1 text-right'>
          <h1 className='text-lg text-teal-500 font-semibold mb-3'>{data?.title}</h1>
          <h1 className='text-xl font-bold text-[#D65A31] mb-4 hover:underline'>
            <Link href={`${data?.authorId}`} >{data?.author}</Link>
          </h1>
          <div className='w-full flex items-center justify-start gap-2 p-2 flex-row-reverse text-md'>
            <span 
            className='p-2 rounded-full border-1 
            border-[#D65A31] text-[#D65A31]
            hover:bg-main-red hover:text-white
            hover:border-white transition-all duration-250
            w-[100px] text-center
            '>
              <button onClick={() => handelClick(data?.type?.url)}>{data?.type?.genre}</button>
            </span>
            <span className='p-2 rounded-full border-1 border-gray-500 text-gray-500 w-[100px] text-center'>
              {data?.words}
            </span>
          </div>
          <hr className='w-full h-[0.3px] rounded-full shadow-md my-2 ' />
          <p className='dark:text-gray-300 text-[#222831] leading-10'>
            {data?.text}
          </p>
        </div>
      </div>
      <div className="md:pr-[280px] pr-0 mt-5">
        <h1 className='text-right w-full p-2 leading-10 text-xl font-semibold '>تحميل كتاب {data?.title} مجانا</h1>
        <div className="w-full flex items-center flex-wrap justify-end gap-5"> 
          {data?.downloadLinks?.map((item, i) => (
            <a 
            href={item?.downloadLink} 
            className="flex 
            items-center 
            pr-2
            pl-10 
            py-2 
            gap-4
            rounded-full 
            curso-pointer 
            border-1  
            border-gray-500
            flex-row-reverse
            hover:text-[#D65A31]
            ">
              <img src={item.downloadImg} alt="download" className="h-10 w-10" />
              <span>{item.downloadTitle}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="md:pr-[280px] text-right mt-10">
        <h1 className='text-right w-full text-lg font-semibold'>تاريخ إصدارات هذا الكتاب</h1>
        <p className="text-md ">
          صدر هذا الكتاب عام {" "}
          <span className="text-[#D65A31]">{data?.date}</span>
        </p>
      </div>
      <div className="md:pr-[280px] text-right mt-10">
        <h1 className='text-right w-full text-lg font-semibold'>محتوى الكتاب</h1>
        <div className="flex flex-col gap-4">
            {data?.contents?.map((item, i) => (
              <span key={item.id} className="text-md text-gray-500 font-semibold">
                {item.title}
                <IoMdArrowDropleft />
              </span>
            ))}
        </div>
      </div>
      <div className="md:pr-[280px] text-right mt-10">
        <h1 className='text-right w-full p-2  text-lg font-semibold'>عن المؤلف</h1>
        <p className="leading-10 text-md dark:text-gray-300 text-[#222831]">
          {data.aboutAuthor}
        </p>
      </div>
    </div>) : ""}
    </>
  ) 
}

export default Book