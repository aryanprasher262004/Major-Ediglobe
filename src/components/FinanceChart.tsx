"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
  {
    month: 'Jan',
    expense: 4000,
    income: 2400,
  },
    {
        month: 'Feb',
        expense: 3000,
        income: 1398,

    },
    {
        month: 'Mar',
        expense: 2000,
        income: 9800,

    },
    {
        month: 'Apr',
        expense: 2780,
        income: 3908,
    
    },
    {
        month: 'May',
        expense: 1890,
        income: 4800,
    
    },
    {
        month: 'Jun',
        expense: 2390,
        income: 3800,
    },
    { 
        month: 'Jul',
        expense: 3490,
        income: 4300,
    
    },
    {
        month: 'Aug',
        expense: 2000,
        income: 2400,

    },
    {
        month: 'Sep',
        expense: 2780,
        income: 3908,
        
    },
    {
        month: 'Oct',
        expense: 1890,
        income: 4800,
     
    },
    {
        month: 'Nov',
        expense: 2390,
        income: 3800,
     
    },
    {
        month: 'Dec',
        expense: 3490,
        income: 4300,
       
    },
];

const FinanceChart = () => {
  return (
    <div className='h-full bg-[var(--h)] border-1 border-t-5 rounded-lg p-3'>
         <div className='flex items-center justify-between   rounded-t-lg'>
                    <span className='font-semibold text-xl text-[var(--a)]'>Finance</span>
                    <Image src="/more.png"  alt='' height={20} width={20} className='' />
                </div>

        <div className='chart h-full rounded-lg p-3'>
        <ResponsiveContainer width="90%" height="90%">
      <LineChart
        width={400}
        height={400}
        data={data}
        
     
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill:'var(--p)'}}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill:'var(--p)'}}/>
        <Tooltip />
        <Legend  align='center' verticalAlign='top' wrapperStyle={{paddingBottom:"15px", }} />
        <Line type="monotone" dataKey="expense" stroke="var(--s)"  strokeWidth={5} />
        <Line type="monotone" dataKey="income" stroke="var(--a)" strokeWidth={5} activeDot={{ r: 8 }}/>

      </LineChart>
    </ResponsiveContainer>
        </div>
                
    </div>
  )
}

export default FinanceChart