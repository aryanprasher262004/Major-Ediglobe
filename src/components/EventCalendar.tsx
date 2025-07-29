"use client";


import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Image from 'next/image';


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


const event = [
  {
    id:'1',
    title:"lorem ipsum dolor sit amet",
    time:"10:00 AM - 11:00 AM",
    data:"lorem ipsum dolor sit amet, conaejjt adaincairnknca ",
  },
  {
    id:'2',
    title:"lorem ipsum dolor sit amet",
    time:"12:00 AM - 3:00 PM",
    data:"lorem ipsum dolor sit amet, conaejjt adaincairnknca ",
  },
  {
    id:'3',
    title:"lorem ipsum dolor sit amet",
    time:"2:00 PM - 5:00 PM",
    data:"lorem ipsum dolor sit amet, conaejjt adaincairnknca ",
  },
]
  


const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='h-full flex flex-col gap-3  '>
      <div className='bg-[var(--s)] rounded-lg p-3 '>    
        <Calendar onChange={onChange} value={value} locale='en-GB' />
      
      </div>
     
        <div className='events flex flex-col bg-[var(--text)] p-3 rounded-lg max-h-[350px] mb-2 overflow-y-auto  cursor-pointer'>
        <div className='flex items-center justify-between font-semibold text-white '>
        <h1 className='font-semibold '>Events</h1>
        <Image src="/more.png" alt="" width={20} height={20} className='cursor-pointer' />
        
        </div>
      <div className='flex flex-col gap-3 my-3    '> 
        {event.map((e) => (
          <div className='flex flex-col gap-4 border-2 p-3 rounded-md border-t-5 odd:bg-[var(--heading)] even:bg-[var(--h)] ' key={e.id}>
            <div className='flex items-center justify-between  '>
              <h2 className='text-sm  '>{e.title}</h2>
              <span className='text-xs text-gray-400 '>{e.time}</span>
            </div>
            <p className='text-xs text-[var(--a)] ' style={{fontFamily:"times"}} >{e.data}</p>
          </div>
         
          
        ))}
      </div>
        
        </div>
   


    </div>
  )
}

export default EventCalendar