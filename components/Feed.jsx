
import Books from './Books';
import {Circular} from './Spinner';

import Pagination from '@mui/material/Pagination';

export default  function Feed({books, currentPage, setCurrentPage, pages, isLoading, totalBooks}){
  const booksPerPage = 25
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage

  const paginate = (e, value) => {
    setCurrentPage(value);
  }

  if(isLoading) return <Circular />
  return (                               
    <div className='md:flex-[0.8] min-h-screen mt-3 md:mt-0'>
      <div className="flex items-center justify-between flex-col md:flex-row-reverse w-full  py-4 md:px-8">
        <h1 className="text-lg font-normal mb-4 md:mb-0">عرض من {" "}
          <span>{indexOfFirstBook + 1 || 1}</span> {" "}
          - {" "}
          <span>{indexOfLastBook <= totalBooks ? indexOfLastBook : totalBooks || books.length}</span> {""}
          من أصل {" "}
          <span>{totalBooks|| books.length}</span> كتاب
         </h1>
        <div >
        <Pagination
          variant="text"
          color="primary"
          shape="rounded"
          defaultPage={1}
          count={pages}
          page={currentPage}
          onChange={paginate}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row-reverse!important",
            "& .MuiPaginationItem-root": {
              color: "#D65A31",
              fontWeight: "bold"
            },
            "& .Mui-selected": {
              backgroundColor: "#D65A31!important",
              color: "white"
            }
          }}
        />
        </div>
      </div>
      <Books books={books} />
    </div>
  )
}


