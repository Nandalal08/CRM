import Link from 'next/link'
import React from 'react'
import { RxGlobe ,RxMoon ,RxDashboard} from "react-icons/rx";
import {HiOutlineShoppingBag} from "react-icons/Hi";

import {GoPerson} from "react-icons/go";
import{FiSettings} from "react-icons/fi"



function Sidebar({children}) {
  return (
    // <div>Sidebar
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 border-r-[1px] flex flex-col justify-between'>

                 <div className='flex flex-col items-center'>
                 <Link href='/' >
                 <div className='bg-violet-800 text-white p-3 rounded-lg inline-block'> 
                    
                    <RxMoon size={20}/>
                    
                </div>
            </Link>

                <div className='border-gray-200  border-b-[1px] w-full p-2'></div>
                <Link href='/' >
                 <div className='bg-gray-200 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'> 
                <RxDashboard size={20}/>
                </div>
                </Link>

                <Link href='/customers' >
                 <div className='bg-gray-200 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'> 
                < GoPerson size={20}/>
                </div>
                </Link>

                <Link href='/orders' >
                 <div className='bg-gray-200 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'> 
                <HiOutlineShoppingBag size={20}/>
                </div>
                </Link>
                 <Link href='/' >
                 <div className='bg-gray-200 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'> 
                <FiSettings size={20}/>
                </div>
                </Link>

           

        </div>
</div>
        <main className='ml-20 w-full'>{children}</main>
    </div>

  )
}

export default Sidebar