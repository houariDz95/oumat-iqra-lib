import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { fetchFromAPI } from '@/utils/fetchData';

export default function Home() {
  let localCat = typeof window !== 'undefined' ? localStorage.getItem('cat') : null
  const [cat, setCat] = useState(localCat && localCat)
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchFromAPI(cat !== "new" ? `categories/${cat}` : 'new')
    .then((data) => {
      setBooks(data)
      setIsLoading(false)
    })
    .catch(error => console.log(error))
  }, [cat])
  return (
    <main className="flex w-screen max-h-[95vh] h-full flex-col md:flex-row-reverse">
      <Sidebar setCat={setCat} category={cat} />
      <Feed books={books} isLoading={isLoading} />
    </main>
  )   
}
