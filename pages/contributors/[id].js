import Spinner from '@/components/Spinner';
import BookCard from '../../components/BookCard'
import { fetchFromAPI } from '@/utils/fetchData';
import Footer from '@/components/Footer'

const Author = ({author, isLoading}) => {

  if(isLoading) return <Spinner />
  return (
    <div>
      <div className='px-5 sm:px-10 min-h-screen mt-10 '>
        <div  className="w-full 
        h-full 
        flex 
        flex-col 
        items-center 
        md:items-start 
        md:flex-row-reverse 
        gap-[30px] 
        md:gap-10">
          <div className="flex-[0.4]"> 
            <img 
            src={author?.img} 
            alt="author" 
            className='w-[300px] h-full object-cover border-1 border-light-gray'
            />
          </div>
          <div className='flex-[0.6] text-right max-w-[600px]'>
            <h1 className='text-2xl text-teal-500 font-semibold mb-3'>{author?.name}</h1>
            <div className="p-4">
              <p className="max-w-prose mx-auto leading-relaxed">{author?.descreption}</p>
            </div>
          </div>
        </div>
        <div className="md:pr-[190px] pr-0 mt-5 text-right mb-10 mx-auto">
          <h1 className='mb-4 text-gray-900 text-lg font-semibold dark:text-white'>لكتب المُؤلّفة للكاتب  {author?.name} ({author?.books?.length} كتاب)</h1>
          <div className="flex justify-center md:justify-end gap-4 flex-wrap  md:items-start">
            {author?.books?.map(book => (
              <BookCard book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div> 
      <Footer />
    </div>
  )
}


export async function getServerSideProps({ params }) {
  let isLoading = true;
  try{
  const data = await fetchFromAPI(`contributors/${params.id}`)
  isLoading = false;
  return { props: { author: data, isLoading } };
  }catch(error){
    console.log(error)
  }finally{
    isLoading = false;
  }
}



export default Author