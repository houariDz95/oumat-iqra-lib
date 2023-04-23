import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { fetchFromAPI } from '@/utils/fetchData';
import Footer from '@/components/Footer';


const  Home = () => {
  const router = useRouter();
  const {cat} = router.query
  const [isLoading, setIsLoding] = useState(false);
  const [books, setBooks] = useState([])

  const fetchData = async () => {
    setIsLoding(true)
    const data = await fetchFromAPI(cat ? `categories/${cat}` : 'new');
    setBooks(data)
    setIsLoding(false)
  }

  useEffect(() => {
    fetchData()
  }, [cat])
  console.log(books ,cat )
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