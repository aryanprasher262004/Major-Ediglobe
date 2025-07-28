import Image from "next/image"
const Usercards = ({type}:{type:string}) => {
  return (
    <div className='rounded-lg odd:bg-[var(--text)] even:bg-[var(--s)] p-3 flex-1 min-w-[130px] space-y-2  justify-between hover:scale-105 transition duration-200 ease-in-out cursor-pointer'>
     <div className="flex items-center justify-between">
        <span className="text-[var(--a)] text-sm bg-white rounded-full p-1 px-2 cursor-pointer  ">2025/7/27</span>
        <Image src="/more.png" alt="" height={20} width={20}className="cursor-pointer " ></Image>
        </div>
        <h1 className="text-2xl text-white font-semibold shadow-2xl ">2,254</h1>
        <h2 className="text-gray-700">{type}s</h2>   
     </div>
     
  )
}

export default Usercards