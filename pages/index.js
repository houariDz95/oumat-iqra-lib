import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { fetchFromAPI } from '@/utils/fetchData';


const  Home = ({books, isLoading}) => {
  const router = useRouter();
  const { cat } = router.query;

  return (
    <main className="flex w-screen max-h-[90vh] h-full flex-col md:flex-row-reverse">
      <Sidebar  />
      <Feed books={books} isLoading={isLoading}  />
    </main>
  )   
}

export async function getServerSideProps(context) {
  const { cat } = context.query;
  let isLoading = true;
  try {
    const data = await fetchFromAPI(cat ? `categories/${cat}` : 'new');
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