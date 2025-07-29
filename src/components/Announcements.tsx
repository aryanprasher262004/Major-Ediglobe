

const event = [
    {
      id:'1',
      title:"lorem ipsum dolor sit amet",
      time:"10:00 AM - 11:00 AM",
      data:"lorem ipsum dolor sit amet, conaejjt adaincairnknca adiah aoindawoinx ionaodnakjab ijanna ",
    },
    {
      id:'2',
      title:"lorem ipsum dolor sit amet",
      time:"12:00 AM - 3:00 PM",
      data:"lorem ipsum dolor sit amet,conaejjt adaincairnknca adiah aoindawoinx ionaodnakjab ijanna ",
    },
    {
      id:'3',
      title:"lorem ipsum dolor sit amet",
      time:"2:00 PM - 5:00 PM",
      data:"lorem ipsum dolor sit amet, cconaejjt adaincairnknca adiah aoindawoinx ionaodnakjab ijann ",
    },
  ]



const Announcements = () => {
  return (
    <div className='annoucement h-full '>
        <div className='flex flex-col bg-[var(--s)] p-3 cursor-pointer rounded-lg h-full max-h-[250px] overflow-y-auto '>
            <div className='flex items-center justify-between '>
            <h1 className="text-white font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400 ">View all</span>
            </div>
            <div className='flex flex-col gap-3 my-2 '>
            {event.map((e) => (
                <div className='flex flex-col gap-3 border-2 p-3 rounded-md border-t-5 odd:bg-[var(--heading)] even:bg-[var(--h)] ' key={e.id}>
                <div className='flex items-center justify-between'>
                    <h2 className='text-sm'>{e.title}</h2>
                    <span className='text-sm text-[var(--a)]'>{e.time}</span>
                </div>
                <p className='text-xs text-[var(--a)]' style={{fontFamily:"times"}}>{e.data}</p>
                </div>
            ))}
            </div>
        </div> 
    </div>
  )
}

export default Announcements