"use client";  // this is a client component
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'Total',
        count: 82,
   
        fill: '#90a955c5',
      },
    {
      name: 'Girls',
      count: 32,
 
      fill: '#143601',
    },

    {
      name: 'Boys',
      count: 50,
   
      fill: '#336e2cfa',
    },
   
  ];


const Countchart = () => {
  return (
    <div className='bg-[var(--extra)] rounded-lg h-full p-3 relative '>
        {/* top  */}
        <div className='flex items-center justify-between   rounded-t-lg'>
            <span className='font-semibold text-xl text-[var(--a)]'>Students</span>
            <Image src="/more.png"  alt='' height={20} width={20} className='' />
        </div>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-35 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        {/* chart  */}
        <div className='w-full h-[200px]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
          
            background
          
            
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>

        </div>
        {/* bottom  */}
        <div className='flex items-center justify-center p-3 gap-16 rounded-b-lg text-[var(--a)]'>
            <div className='flex flex-col  '>
            <div className='w-5 h-5 bg-[var(--s)] rounded-full '></div>
                <h2 className=' font-semibold'>1245</h2>
                <span className='text-sm'>Boys(55%) </span>
            </div>
            <div className='flex flex-col   '>
            <div  className='w-5 h-5 bg-[var(--a)] rounded-full '></div>
                <h2 className=' font-semibold'>1245</h2>
                <span className='text-sm'>Girls(45%) </span>
            </div>
        </div>
    </div>
  )
}

export default Countchart