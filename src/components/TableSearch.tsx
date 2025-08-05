
import Image from "next/image"

const TableSearch = () => {
  return (
    <div className='flex items-center md:flex-row  w-full '>
      <div className="inputbox w-full md:w-auto items-center relative justify-between gap-2  ">
                  <Image src="/search.png" alt="Search Icon" width={20} height={20} className=" absolute right-2 top-[6px] drop-shadow-white z-88 " />
                  <input type="text" className="rounded-full border px-3 p-1 bg-[var(--h)] w-full hover:scale-102 text-black ring-[1px] outline-none  ring-gray-400 transition duration-200 ease-in-out " placeholder="Search..." />
              </div>
           

    </div>
  )
}

export default TableSearch