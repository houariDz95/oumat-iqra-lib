import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { fetchFromAPI } from '@/utils/fetchData';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const  Categories = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {cat} = router.query;

  const fetchData = async() => {
    setIsLoading(true);
    const data  = await fetchFromAPI(`categories/${cat}`);
    setIsLoading(false)
    setBooks(data)
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

export default Categories