import { fetchFromAPI } from '@/utils/fetchData';
import {useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Books from './Books';
import Spinner from './Spinner';
import Pagination from '@mui/material/Pagination';
    
export default  function Feed({books, isLoading}){
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books?.slice(indexOfFirstBook, indexOfLastBook)

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }
 

  if(isLoading) return <Spinner />
  return (                               
    <div className='flex-[0.8] min-h-screen mt-10 md:mt-0'>
      <div className="flex items-center justify-between flex-col md:flex-row-reverse w-full mt-5 py-4 px-8">
        <h1 className="text-lg font-normal mb-4 md:mb-0">عرض من {" "}
          <span>{indexOfFirstBook}</span> {" "}
          - {" "}
          <span>{currentBooks?.length}</span> {""}
          من أصل {" "}
          <span>{books.length}</span> كتاب
         </h1>
        <div className='flex flex-row-riverse'>
        <Pagination
          variant="text"
          color="primary"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(books.length / booksPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
        />
        </div>
      </div>
      <Books books={currentBooks} />
    </div>
  )
}


