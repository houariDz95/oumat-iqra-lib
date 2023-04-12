import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <main className="flex w-full flex-col md:flex-row-reverse">
      <Sidebar />
      <Feed />
    </main>
  )
}
