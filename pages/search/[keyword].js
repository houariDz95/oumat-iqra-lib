import {Circular} from '../../components/Spinner';
import { fetchFromAPI } from '@/utils/fetchData';
import Link from 'next/link';
import {IoMdArrowDropleft} from 'react-icons/io';
import {useRouter} from 'next/router'
import Head from 'next/head';
const Search = ({data, isLoading}) => {
  const router = useRouter()
  const {keyword} = router.query

    if(isLoading) return <Circular />
    return (
      <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4378697867992790"
        crossorigin="anonymous"></script>
      </Head>
      <div className="px-5 sm:px-10 md:px-20 min-h-screen mt-10">
        <div className="mt-10 text-right">
          <div className="w-full flex items-center justify-start border-b-1 border-gray-500">
            <h1 className='text-4xl py-8 font-bold'>نتائج البحث <span className="underline">{keyword}</span></h1>
          </div>
          <h2 className="text-xl p-2 mb-2 ">نتائج البحث</h2>
          <div className="flex items-end flex-col">
            {data.length ? data?.map(item => (
                <div key={item.bookId} className="flex items-center gap-2 p-2 flex-row-reverse text-md">
                  <IoMdArrowDropleft className='text-gray-300'/>
                  <Link className="dark:text-teal-400 text-teal-500 cursor-pointer hover:underline" href={item?.bookId}>{item?.bookTitle} </Link> · بقلم
                  <Link className="dark:text-teal-400 text-teal-500 cursor-pointer hover:underline" href={item?.authorId}> {item?.authorTitle}</Link>
              </div>
              )) : <h1 className='text-4xl font-extrabold text-center py-4 px-10'> 😢لا توجد نتائج للبحث </h1>}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  let isLoading = true;
  try{
  const data = await fetchFromAPI(`search/${params.keyword}`)
  isLoading = false;
  return { props: { data, isLoading } };
  }catch(error){
    console.log(error.message)
  }finally{
    isLoading = false;
  }
}

export default Search