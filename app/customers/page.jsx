import React from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import TopCards from '@/components/TopCards'
import { data } from '@/data/data.js';
import { BsPersonFill ,BsThreeDotsVertical } from 'react-icons/Bs';


function page() {
  return (
     
<Sidebar>


    <main className=" bg-gray-100 min-h-screen">
      <div className='flex justify-between p-4 font-bold'>
        <h1>Customers</h1>
        <h1>Welcome Back, Chris</h1>
      </div>
      <div className='p-4'>
    <div className='w-full  m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
            <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
              <span>Name</span>
              <span className='sm:text-left text-right'>Email</span>
              <span className='hidden md:grid'>Last Order</span>
              <span className='hidden sm:grid'>Method</span>
            </div>
      
      <ul>
        
        {data.map((order,id)=>(
            <li key={id} className='bg-gray-200 hover:bg-gray-300 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  items-center justify-between'>
            <div className='flex items-center'>
            <div className='bg-purple-100 rounded-lg p-3 '>

                    <BsPersonFill className='text-purple-800' />
            </div>

            
                <p className='text-black text-bold pl-4'>{order.name.first+" "+order.name.last}</p>

            
               </div>

            <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
            <p className='text-black hidden md:flex'>{order.date}</p>
            {/* <p className='text-black sm:text-left text-right'>{order.status}</p> */}
              <div className='sm:flex hidden justify-between items-center'>
                        <p>{order.method}</p>
                        <BsThreeDotsVertical />
                    </div>


            </li>


        ))}

      </ul>

     
      </div>

      </div>
      
 

      
    </main>
</Sidebar>
  )
}

export default page