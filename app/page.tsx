import Image from 'next/image'
import {redirect} from 'next/navigation'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {redirect('/register')}
    </main>
  )
}
