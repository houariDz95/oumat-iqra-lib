import Image from 'next/image';
import {  useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from '@/utils/fetchData';
import {useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Books from './Books';
import Spinner from './Spinner';

export default  function Feed(){
  const router = useRouter();
  const {cat} = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetchFromAPI(`categories/${cat}`).then((data) => {
      setBooks(data);
      setIsLoading(false)
    })
  }, [cat])

  if(isLoading) return <Spinner />
  return (                               
    <div className='flex-[0.8] px-5 md:px-40'>
      <div className="flex items-center justify-between flex-row-reverse w-full mt-10 py-5">
        <h1 className="text-xl font-semibold text-white"><span className="text-red-500 underline" >{cat}</span> كتب</h1>
        <div>pagination</div>
      </div>
      <Books books={books} />
    </div>
  )
}


