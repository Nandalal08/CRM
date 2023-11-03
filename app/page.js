import BarChart from '@/components/BarChart'
import Header from '@/components/Header'
import RecentOrder from '@/components/RecentOrder'
import Sidebar from '@/components/Sidebar'
import TopCards from '@/components/TopCards'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from './page.module.css'

export default function Home() {
  return (
    
<Sidebar>


    <main className=" bg-gray-200 min-h-screen">
      <Header />
      <TopCards />
      <div className=' p-4 grid md:grid-cols-3 grid-cols-1 gap-4 '>
      <BarChart />
      <RecentOrder/>
      </div>

      
    </main>
</Sidebar>

    

  )
}
