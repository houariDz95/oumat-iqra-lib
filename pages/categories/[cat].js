import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { fetchFromAPI } from '@/utils/fetchData';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';


const  Categories = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [totalBooks, setTotalBooks] = useState(null);

  const router = useRouter()
  const {cat} = router.query;

  const fetchData = async() => {
    setIsLoading(true);
    const data  = await fetchFromAPI(`categories/${cat}`, currentPage);
    setIsLoading(false)
    setBooks(data.books)
    setPages(data.totalPages)
    setTotalBooks(data.totalBooks)
  }
  useEffect(() => {
    fetchData()
  }, [cat, currentPage])

  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4378697867992790"
        crossorigin="anonymous"></script>
      </Head>
      <main className="flex w-screen md:max-h-[90vh] h-full flex-col md:flex-row-reverse">
        <Sidebar  setCurrentPage={setCurrentPage}/>
        <Feed 
        books={books} 
        isLoading={isLoading} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        pages={pages} 
        totalBooks={totalBooks}
        /> 
        <div className="block md:hidden">
        <Footer />
        </div>
      </main>
    </>
  )   
}

export default Categories