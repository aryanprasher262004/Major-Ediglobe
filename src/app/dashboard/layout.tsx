import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";




export default function DashboardLayout({
   
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      
        <div className="h-screen flex">
          {/* left box */}
          <div className=" left w-[14%] md:w-[8%] lg:w-[16%] bg-[var(--p)]  overflow-y-scroll  " >
            <Link href="/" className="flex flex-col items-center justify-center gap-2  p-3" >
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="mt-3"
              />
              <span className="hidden lg:block text-3xl text-white  " style={{fontFamily:'head'}}>UniLearn</span>
            
            </Link>
            <Menu />
          </div>
          {/* right box */}
          <div className="w-[86%] md:w-[92%] lg:w-[86%] bg-white">
            <Navbar/>
            { children }
      
          </div>
        </div>
     
    );
  }