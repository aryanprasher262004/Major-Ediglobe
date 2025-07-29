"use client"

import { Calendar, momentLocalizer, View } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents,  } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>('work_week')
  return (
    <div className=''>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
     views={[ 'work_week', 'day']}
     view={view}
     min={new Date(2023, 9, 1, 8, 0, 0)}
        max={new Date(2023, 9, 1, 18, 0, 0)}
     onView={(newView) => setView(newView)}
        style={{ height: 800, width: '100%' }}
    
    />
        
    </div>
  )
}

export default BigCalendar