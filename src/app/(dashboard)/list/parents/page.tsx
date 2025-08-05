import Tables from "@/components/Tables"
import TableSearch from "@/components/TableSearch"
import { parentsData, role,  } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Parents = {
  id: number;
  name: string;
  photo: string; // Assuming photo is a URL or path to the image
 
  email?: string;
  
  students: string[];
  phone: number;
  address: string;
  
}
// This is the type for the teacher data, you can modify it based on your actual data structure
// creating props for the table headers 

const columns = [
  { header: 'Info', accessor: 'info' },
  {header:'Email',accessor:'email' ,className:"hidden md:table-cell" },    

  { header: 'Phone', accessor: 'phone', className:"hidden lg:table-cell" },
  { header: 'Address', accessor: 'address', className:"hidden lg:table-cell" },
  { header:'Students', accessor:'students', className:"hidden md:table-cell" },


  { header: 'Actions', accessor: 'actions' }

]


const StudentListPage = () => {

const renderRows=(item : Parents) => ( // this is also a prop that will be passes to the parent component i.e. Tables.tsx  HERE instead of using {} we are using ()to return the data to parent

  <tr key={item.id} className="odd:bg-gray-200  hover:bg-gray-400">
    <td className="p-2 rounded-l-lg">
      <div className="flex items-center gap-2 ">
        <Image src='/avatar.png' alt="Avatar" width={30} height={30} className="md:hidden xl:block w-10 h-10 rounded-full object-cover " />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{item.name}</span>
    
          </div>
      
      </div>
    </td>
    <td className="hidden md:table-cell text-sm ">{item.email} </td>
    <td className="hidden lg:table-cell text-sm ">{item.phone} </td>
    <td className="hidden lg:table-cell text-sm ">{item.address} </td>
    <td className="hidden md:table-cell text-sm ">{item.students.join()} </td>
    <td className="rounded-r-lg ">
      <div className="flex items-center gap-3">
        
       <Link href={`/list/parents/${item.id}`} > 
       <button className="w-8 h-8 rounded-full items-center bg-[var(--heading)] flex justify-center ">
        <Image src="/view.png" alt="" width={16} height={16}  className="" />
       </button>
       </Link>
       
      { role==="admin" && (<button className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center">
        <Image src="/delete.png" alt="" width={16} height={16}  className="" />
       </button>)} 
      </div>
    </td>


  </tr> 
)


  return (
    <div className='bg-[var(--bg)] p-4 rounded-md flex-1 m-3 '>
          {/* top  */}
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-2xl font-semibold"> Parents Information</h1>
        
        <div className="flex flex-col md:flex-row gap-3 items-center w-full md:w-auto">
        <TableSearch />
          <div className="flex items-center gap-2 md:flex-row self-end">
            <button className=" h-8 w-8 rounded-full bg-[var(--h)] flex items-center justify-center border-t-3  hover:scale-105 transition duration-300 ease-in-out">
             <Image src="/filter.png" alt="Filter Icon" width={14} height={14} className="cursor-pointer  hover:scale-105 transition duration-300 ease-in-out" />
            </button>
            <button className=" h-8 w-8 rounded-full bg-[var(--h)] flex items-center justify-center border-t-3  hover:scale-105 transition duration-300 ease-in-out">
             <Image src="/sort.png" alt="Filter Icon" width={14} height={14} className="cursor-pointer  hover:scale-105 transition duration-300 ease-in-out" />
            </button>
            <button className=" h-8 w-8 rounded-full bg-[var(--h)] flex items-center justify-center border-t-3  hover:scale-105 transition duration-300 ease-in-out">
             <Image src="/plus.png" alt="Filter Icon" width={14} height={14} className="cursor-pointer  hover:scale-105 transition duration-300 ease-in-out" />
            </button>
            
          </div>

        </div>

        
      </div>
      {/* table */}
      <div className="">
        <Tables columns={columns} renderRows={renderRows}  data={parentsData} />
      </div>

    </div>
  )
}

export default StudentListPage