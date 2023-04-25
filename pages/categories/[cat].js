import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { fetchFromAPI } from '@/utils/fetchData';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const  Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const { cat } = router.query
    const fetchData = async () => {
      const data = await fetchFromAPI(`categories/${cat}`);
      setIsLoading(true)
      setBooks(data)
      setIsLoading(false)
    }
  
  useEffect(() => {
    fetchData()
  }, [cat])
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


export default Home