import React from 'react'

function TopCards() {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
{/* #1 */}
<div className='lg:col-span-2 col-span-1 bg-white flex justify-between rounded-lg border p-4'>

<div className='flex flex-col w-full p-4'>
    <p className='text-2xl font-bold'>$17,896</p>
    <p className='text-green-500'>Daily Revenue</p>

</div>
    <p className='bg-green-300 flex justify-center items-center p-2 rounded-lg'>
    <span>+18%</span>
    </p>

</div>

{/* #2 */}

<div className='lg:col-span-2 col-span-1 bg-white flex justify-between rounded-lg border p-4'>
<div className='flex flex-col w-full p-4'>
    <p className='text-2xl font-bold'>$1,234</p>
    <p className='text-red-500'>YTD Revenue</p>

</div>
    <p className='bg-red-300 flex justify-center items-center p-2 rounded-lg'>
    <span>-11%</span>
    </p>
</div>

{/* #3 */}

<div className=' bg-white flex justify-between rounded-lg border p-4'>
<div className='flex flex-col w-full p-4'>
    <p className='text-2xl font-bold'>$9,090</p>
    <p className='text-green-500'>Customers </p>

</div>
    <p className='bg-green-300 flex justify-center items-center p-2 rounded-lg'>
    <span>+39%</span>
    </p>
</div>


    </div>


  )
}

export default TopCards