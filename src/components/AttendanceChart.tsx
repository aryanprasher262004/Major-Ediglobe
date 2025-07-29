"use client";

import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
  {
    name: 'Mon',
    present: 65,
    absent: 45,
    
  },
  {
    name: 'Tue',
    present: 75,
    absent: 63,
   
  },
  {
    name: 'Wed',
    present: 89,
    absent: 72,

  },
  {
    name: 'Thu',
    present: 72,
    absent: 65,
  },
  {
    name: 'Fri',
    present: 71,
    absent: 63,

  },
  
];


const AttendanceChart = () => {
  return (
    <div className='bg-[var(--heading)]  border-t-5 rounded-lg h-full p-3 '>
        <div className='flex items-center justify-between '>
            <span className='font-semibold text-xl text-[var(--a)]'>Attendance</span>
            <Image src="/more.png"  alt='' height={20} width={20} className='' />
        </div>

            <div className='chart h-full rounded-lg '>
            <ResponsiveContainer width="90%" height="90%">
        <BarChart
            width={300}
            height={300}
            barSize={20}
     
          data={data}
     
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'var(--p)'}} />
          <YAxis  axisLine={false}  tickLine={false} tick={{fill:'var(--p)'}} />
          <Tooltip />
            <Legend  align='left' verticalAlign='top' wrapperStyle={{paddingBottom:"15px", }} />
          <Bar dataKey="present" fill="var(--s)"  legendType='circle' radius={[10,10,0,0]}  />
          <Bar dataKey="absent" fill="var(--a)"  legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
                
            </div>

    </div>
  )
}

export default AttendanceChart