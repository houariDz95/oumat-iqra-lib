import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <main className="flex w-screen max-h-[95vh] h-full flex-col md:flex-row-reverse overflow-auto">
      <Sidebar />
      <Feed />
    </main>
  )
}
