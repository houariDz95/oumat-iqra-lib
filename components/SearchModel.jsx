
import { useRouter } from 'next/router';
import {IoMdArrowDropleft} from 'react-icons/io';
import {TfiClose} from 'react-icons/tfi'
const SearchModel = ({ setModel, data, search, setSearch}) => {
  const router = useRouter()
  const handelClick = (url) => {
    router.push(url);
      setModel(false)
      setSearch("")
  }
  const handelClose = () => {
    setModel(false)
    setSearch("")

  }
  return (
    <div className="w-screen h-full fixed bg-black/80 z-10  top-0 left-0 flex items-center justify-center overflow-hidden">
      <div className="
      relative
      rounded-md
      shadow-sm
      w-[90%]
      md:w-[70%] 
      bg-main-bg 
      dark:bg-main-dark-bg 
      max-h-[80vh]
      h-full 
      overflow-auto 
      visible-scrollbar 
      p-2">
        <h1 onClick={handelClose} className="absolute right-5 top-2 cursor-pointer">
          <TfiClose size={25} color="#D65A31" />
        </h1>
        <div className="w-full flex items-center justify-center border-b-1 border-gray-500">
          <h1 className='text-3xl py-4 font-extrabold'>نتائج البحث <span className="underline">{search}</span></h1>
        </div>
        <div className="flex items-end flex-col pb-2">
          {Object.keys(data).length !== 0 ? data?.map(item => (
              <div key={item.bookId} className="flex items-center gap-2 p-2 flex-row-reverse text-md">
                <IoMdArrowDropleft className='dark:text-gray-300 text-gray-500'/>
                <button className="dark:text-teal-400 text-teal-500 cursor-pointer hover:underline" onClick={() => handelClick(item?.bookId)}>{item?.bookTitle} </button> · بقلم
                <button className="dark:text-teal-400 text-teal-500 cursor-pointer hover:underline"onClick={() => handelClick(item?.authorId)}> {item?.authorTitle}</button>
            </div> 
            )): <h1 className="text-5xl text-center dark:text-gray-300 text-gray-500 font-bold w-full py-20">😭 لا توجد نتائج للبحث</h1>}
        </div>
      </div>
    </div>
  )
}

export default SearchModel