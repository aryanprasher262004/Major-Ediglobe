import Tables from "@/components/Tables"
import TableSearch from "@/components/TableSearch"
import { role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

// Mock attendance data
const attendanceData = [
  {
    id: 1,
    student: "John Doe",
    class: "1A",
    date: "2025-01-01",
    status: "present",
    subject: "Math"
  },
  {
    id: 2,
    student: "Jane Smith",
    class: "1A",
    date: "2025-01-01",
    status: "absent",
    subject: "Math"
  },
  {
    id: 3,
    student: "Mike Johnson",
    class: "1A",
    date: "2025-01-01",
    status: "present",
    subject: "Math"
  },
  {
    id: 4,
    student: "Sarah Wilson",
    class: "1A",
    date: "2025-01-01",
    status: "late",
    subject: "Math"
  },
  {
    id: 5,
    student: "David Brown",
    class: "1A",
    date: "2025-01-01",
    status: "present",
    subject: "Math"
  },
  {
    id: 6,
    student: "Emily Davis",
    class: "1A",
    date: "2025-01-01",
    status: "present",
    subject: "Math"
  },
  {
    id: 7,
    student: "Michael Garcia",
    class: "1A",
    date: "2025-01-01",
    status: "absent",
    subject: "Math"
  },
  {
    id: 8,
    student: "Lisa Martinez",
    class: "1A",
    date: "2025-01-01",
    status: "present",
    subject: "Math"
  },
  {
    id: 9,
    student: "Robert Anderson",
    class: "1A",
    date: "2025-01-01",
    status: "present",
    subject: "Math"
  },
  {
    id: 10,
    student: "Jennifer Taylor",
    class: "1A",
    date: "2025-01-01",
    status: "late",
    subject: "Math"
  }
];

type Attendance = {
  id: number;
  student: string;
  class: string;
  date: string;
  status: string;
  subject: string;
}

const columns = [
  { header: 'Student', accessor: 'student' },
  { header: 'Class', accessor: 'class', className:"hidden md:table-cell" },
  { header: 'Subject', accessor: 'subject', className:"hidden md:table-cell" },
  { header: 'Date', accessor: 'date', className:"hidden lg:table-cell" },
  { header: 'Status', accessor: 'status', className:"hidden lg:table-cell" },
  { header: 'Actions', accessor: 'actions' }
]

const AttendanceListPage = () => {

const renderRows=(item : Attendance) => (
  <tr key={item.id} className="odd:bg-gray-200 hover:bg-gray-400 transition-colors duration-200">
    <td className="p-2 rounded-l-lg">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[var(--a)] flex items-center justify-center">
          <span className="text-white font-semibold text-sm">{item.student.charAt(0)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{item.student}</span>
          <span className="text-xs text-gray-500">{item.subject}</span>
        </div>
      </div>
    </td>
    <td className="hidden md:table-cell text-sm">{item.class}</td>
    <td className="hidden md:table-cell text-sm">{item.subject}</td>
    <td className="hidden lg:table-cell text-sm">{new Date(item.date).toLocaleDateString()}</td>
    <td className="hidden lg:table-cell text-sm">
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
        item.status === 'present' ? 'bg-green-100 text-green-800' :
        item.status === 'absent' ? 'bg-red-100 text-red-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
      </span>
    </td>
    <td className="rounded-r-lg">
      <div className="flex items-center gap-3">
        <Link href={`/list/attendance/${item.id}`}>
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
        <h1 className="hidden md:block text-2xl font-semibold text-[var(--p)]">All Attendance</h1>
        
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
        <Tables columns={columns} renderRows={renderRows} data={attendanceData} />
      </div>
    </div>
  )
}

export default AttendanceListPage 