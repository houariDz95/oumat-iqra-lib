import Image from 'next/image';
import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from '@/utils/fetchData';
import {useRouter } from 'next/router'
import { useEffect, useState } from 'react';


export default  function Feed(){
  const router = useRouter();
  const {cat} = router.query
  const[books, setBooks] = useState([])
  useEffect(() => {
    fetchFromAPI(`categories/${cat}`).then((data) => setBooks(data)
    )
  }, [cat])
  console.log(books)
  return (                               
    <div>
      hello
    </div>
  )
}


