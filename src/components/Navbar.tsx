import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  p-4 bg-[var(--a)] '>

        <div className="inputbox hidden md:flex items-center relative justify-between gap-2 ">
            <Image src="/search.png" alt="Search Icon" width={20} height={20} className=" absolute right-2 top-[6px] drop-shadow-white z-88 " />
            <input type="text" className="rounded-full border px-3 p-1 bg-[var(--h)] w-[300px]  hover:scale-102 text-black ring-[1px] outline-none  ring-gray-400 transition duration-2 00 ease-in-out " placeholder="Search..." />
        </div>

        <div className="icons flex items-center justify-end w-full gap-4">
           <Link href="/messages" className=" bg-white/10 p-2 rounded-full hover:bg-[var(--h)] hover:scale-105 active:scale-98 transition duration-300 ease-in-out">
                <Image src="/message.png" alt="Message" width={25} height={25} className="" />
            </Link>
            <Link href="/announcements" className=" bg-white/10 p-2 rounded-full relative  hover:bg-[var(--h)] hover:scale-105 active:scale-98 transition duration-300 ease-in-out">
                <Image src="/announcement.png" alt="anc" width={25} height={25} />
                <span className="absolute top-0 right-0 bg-[var(--text)] text-white text-xs font-semibold rounded-full px-1">3</span>
            </Link>
            <Link href="/profile" className="flex items-center justify-center gap-2 bg-white/10 p-2 rounded-full hover:bg-[var(--h)] hover:scale-102  transition duration-300 ease-in-out">
            <Image src="/avatar.png" alt="avatar" width={25} height={25} className="rounded-full" />
              <div className="flex flex-col text-white">
                <span className="text-sm font-semibold">Aryan Prasher</span>
                <span className="text-xs ">Student</span>
              </div>
            </Link>

         </div>
       
    </div>
  )
}

export default Navbar