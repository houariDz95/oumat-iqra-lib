import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { fetchFromAPI } from '@/utils/fetchData';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

const  Home = ({books, isLoading}) => {
  return (
    <main className="flex w-screen md:max-h-[90vh] h-full flex-col md:flex-row-reverse">
      <Sidebar  />
      <Feed books={books} isLoading={isLoading}  />
      <div className="block md:hidden">
       <Footer />
      </div>
    </main>
  )   
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { cat } = params;
  let isLoading = true;
  try {
    const data = await fetchFromAPI(`categories/${cat}`);
    isLoading = false

    return {
      props: { books: data, isLoading },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }finally{
    isLoading = false
  }
}

export default Home