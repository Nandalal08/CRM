import Sidebar from '@/components/Sidebar'
import { data } from '@/data/data.js'
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/Bs';
import React from 'react'

function page() {
  return (
    <Sidebar>
    <main className='min-h-screen bg-gray-200'>

        <div className=' flex justify-between p-4'>
            <h1>Orders</h1>
            <h1>Welcome Back, Chris</h1>
        </div>

        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between font-bold'>
                    <span>Orders</span>
                    <span className='sm:text-left text-right '>Status</span>
                    <span className='hidden md:grid'>Last Orders</span>
                    <span className='hidden sm:grid'>Method</span>

                 </div> 

                 <div>
                    <ul>   
                        <ul>
                            <li>
                                
                            </li>
                        </ul>

                       { data.map((order,id)=>(

                                <li key={id} className='bg-gray-200 hover:bg-gray-300 my-3 p-2 rounded-lg grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                
                              <div className='flex items-center'>
                                    <div className='bg-purple-100 rounded-lg p-3'>
                                        <FaShoppingBag className='text-purple-800'/>
                                        
                                    </div>

                                    <div className='pl-4'>
                                        <p className='font-bold'>${order.total.toLocaleString()}</p>
                                        <p className='text-sm text-gray-600'>{order.name.first}</p>
                                    </div>

                              </div>
                                 <p className='text-gray-600 sm:text-left text-right'>
                                    <span className={
                                            order.status == 'Processing'
                                            ? 'bg-green-200 p-2 rounded-lg'
                                            : order.status =='Completed'
                                            ? 'bg-blue-200 p-2 rounded-lg '
                                            : 'bg-yellow-200 p-2 rounded-lg'

                                    }>
                                        {order.status}

                                        </span>
                                </p>
                                <p className='hidden md:flex'>{order.date}</p>

                                <div className='sm:flex hidden justify-between items-center'>
                        <p>{order.method}</p>
                        <BsThreeDotsVertical />
                    </div>

                             
                                    
                                </li>


                       ))}

                    </ul>

                 </div>

            </div>
         </div>
    </main>
    </Sidebar>
  )
}

export default page