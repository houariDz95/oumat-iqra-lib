import { fetchFromAPI } from '@/utils/fetchData';
import {Circular} from '@/components/Spinner';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {IoMdArrowDropleft} from 'react-icons/io'
import Footer from '@/components/Footer'
import Head from 'next/head';

const Book = ({data, isLoading}) => {
  const router = useRouter();
  
  const handelClick = (cat) => {
    router.push(`/categories/${cat}`)
  }
  if(isLoading) return  <Circular />
  return (
    <>
    <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4378697867992790"
      crossorigin="anonymous"></script>
    </Head>
      <div>
        <div className='px-5 sm:px-10 md:px-20 min-h-screen my-10 '>
        <div className='w-full h-full flex flex-col items-center md:items-start md:flex-row-reverse gap-[30px] md:gap-10'>
          <div className='flex-[0.4]'>
            <img 
            src={data?.img} 
            alt="data" 
            className='max-h-[350px] object-cover border-1 border-light-gray'/>
          </div>
          <div className='flex-[0.6] text-right '>
            <h1 className='text-2xl text-teal-500 font-semibold mb-3'>{data?.title}</h1>
            <h1 className='text-xl font-bold text-[#D65A31] mb-4 hover:underline'>
              <Link href={`${data?.authorId}`} >{data?.author}</Link>
            </h1>
            <div className='w-full flex items-center justify-start gap-2 p-2 flex-row-reverse text-md'>
              <span 
              className='p-2 rounded-full border-1 
              border-[#D65A31] text-[#D65A31]
              hover:bg-main-red hover:text-white
              hover:border-white transition-all duration-250
              w-[120px] text-center
              '>
                <button onClick={() => handelClick(data?.type?.url)}>{data?.type?.genre}</button>
              </span>
              <span className='p-2 rounded-full border-1 border-gray-500 text-gray-500 w-[120px] text-center'>
                {data?.words}
              </span>
            </div>
            <hr className='w-full h-[0.3px] rounded-full shadow-md my-2 ' />
            <p className='dark:text-gray-300 text-[#222831] leading-10'>
              {data?.text}
            </p>
          </div>
        </div>
        <div className="md:pr-[190px] pr-0 mt-5">
          <h1 className='text-right w-full p-4 leading-10 text-2xl font-semibold text-[#20232A] dark:text-[#eeeeee]'>تحميل كتاب {data?.title} مجانا</h1>
          <div className="w-full flex items-center flex-wrap justify-end gap-5"> 
            {data?.downloadLinks?.map((item, i) => (
              <a 
              href={item?.downloadLink} 
              key={i}
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
        <div className="md:pr-[190px] text-right mt-10">
          <h1 className='text-right w-full text-2xl p-4 font-semibold mb-2 text-[#20232A] dark:text-[#eeeeee]'>تاريخ إصدارات هذا الكتاب</h1>
          <p className="text-md ">
            صدر هذا الكتاب عام {" "}
            <span className="text-[#D65A31]">{data?.date}</span>
          </p>
        </div>
        <div className="md:pr-[190px] text-right mt-10">
          <h1 className='text-right w-full text-2xl font-semibold p-4 mb-2 text-[#20232A] dark:text-[#eeeeee]'>محتوى الكتاب</h1>
          <div className="flex flex-col items-end gap-4">
              {data?.contents?.map((item, i) => (
                <span key={item.id} className="text-md text-gray-500 font-semibold flex items-center">
                  {item.title}
                  <IoMdArrowDropleft size={20} color="#D65A31" />
                </span>
              ))}
          </div>
        </div>
        <div className="md:pr-[190px] text-right mt-10">
          <h1 className='text-right w-full p-4 text-2xl font-semibold text-[#20232A] dark:text-[#eeeeee]'>عن المؤلف</h1>
            <div className="p-2 ">
              <p className="leading-relaxed">{data?.aboutAuthor}</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  ) 
}

export async function getServerSideProps({ params }) {
  let isLoading = true;
  try{
  const data = await fetchFromAPI(`books/${params.id}`)
  isLoading = false;
  return { props: { data, isLoading } };
  }catch(error){
    console.log(error)
  }finally{
    isLoading = false;
  }
}

export default Book