import Tables from "@/components/Tables"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Subject = {
  id: number;
  name: string;
  teachers: string[];
}

const columns = [
  { header: 'Subject', accessor: 'name' },
  { header: 'Teachers', accessor: 'teachers', className:"hidden md:table-cell" },
  { header: 'Actions', accessor: 'actions' }
]

const SubjectsListPage = () => {

const renderRows=(item : Subject) => (
  <tr key={item.id} className="odd:bg-gray-200 hover:bg-gray-400 transition-colors duration-200">
    <td className="p-2 rounded-l-lg">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[var(--s)] flex items-center justify-center">
          <span className="text-white font-semibold text-sm">{item.name.charAt(0)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{item.name}</span>
          <span className="text-xs text-gray-500">{item.teachers.length} teachers</span>
        </div>
      </div>
    </td>
    <td className="hidden md:table-cell text-sm">{item.teachers.join(", ")}</td>
    <td className="rounded-r-lg">
      <div className="flex items-center gap-3">
        <Link href={`/list/subjects/${item.id}`}>
          <button className="w-8 h-8 rounded-full items-center bg-[var(--heading)] flex justify-center hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/view.png" alt="" width={16} height={16} className="" />
          </button>
        </Link>
        {role === "admin" && (
          <button className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/delete.png" alt="" width={16} height={16} className="" />
          </button>
        )}
      </div>
    </td>
  </tr>
)

  return (
    <div className='bg-[var(--bg)] p-4 rounded-md flex-1 m-3'>
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-2xl font-semibold text-[var(--p)]">All Subjects</h1>
        
        <div className="flex flex-col md:flex-row gap-3 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-2 md:flex-row self-end">
            <button className="h-8 w-8 rounded-full bg-[var(--h)] flex items-center justify-center border-t-3 hover:scale-105 transition duration-300 ease-in-out">
              <Image src="/filter.png" alt="Filter Icon" width={14} height={14} className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out" />
            </button>
            <button className="h-8 w-8 rounded-full bg-[var(--h)] flex items-center justify-center border-t-3 hover:scale-105 transition duration-300 ease-in-out">
              <Image src="/sort.png" alt="Sort Icon" width={14} height={14} className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out" />
            </button>
            <button className="h-8 w-8 rounded-full bg-[var(--h)] flex items-center justify-center border-t-3 hover:scale-105 transition duration-300 ease-in-out">
              <Image src="/plus.png" alt="Add Icon" width={14} height={14} className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out" />
            </button>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="mt-4">
        <Tables columns={columns} renderRows={renderRows} data={subjectsData} />
      </div>
    </div>
  )
}

export default SubjectsListPage 