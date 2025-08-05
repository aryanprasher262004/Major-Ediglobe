import Tables from "@/components/Tables"
import TableSearch from "@/components/TableSearch"
import { role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

// Mock messages data
const messagesData = [
  {
    id: 1,
    sender: "John Doe",
    recipient: "Jane Smith",
    subject: "Math Assignment",
    date: "2025-01-01",
    status: "read"
  },
  {
    id: 2,
    sender: "Mike Johnson",
    recipient: "Sarah Wilson",
    subject: "Science Project",
    date: "2025-01-01",
    status: "unread"
  },
  {
    id: 3,
    sender: "David Brown",
    recipient: "Emily Davis",
    subject: "Parent Meeting",
    date: "2025-01-01",
    status: "read"
  },
  {
    id: 4,
    sender: "Lisa Martinez",
    recipient: "Michael Garcia",
    subject: "Exam Schedule",
    date: "2025-01-01",
    status: "unread"
  },
  {
    id: 5,
    sender: "Robert Anderson",
    recipient: "Jennifer Taylor",
    subject: "Field Trip",
    date: "2025-01-01",
    status: "read"
  },
  {
    id: 6,
    sender: "Amanda White",
    recipient: "Christopher Lee",
    subject: "Homework Reminder",
    date: "2025-01-01",
    status: "unread"
  },
  {
    id: 7,
    sender: "Daniel Clark",
    recipient: "Jessica Moore",
    subject: "Class Schedule",
    date: "2025-01-01",
    status: "read"
  },
  {
    id: 8,
    sender: "Michelle Hall",
    recipient: "Kevin Young",
    subject: "Library Books",
    date: "2025-01-01",
    status: "unread"
  },
  {
    id: 9,
    sender: "Steven Allen",
    recipient: "Nicole King",
    subject: "Sports Event",
    date: "2025-01-01",
    status: "read"
  },
  {
    id: 10,
    sender: "Rachel Green",
    recipient: "Thomas Wright",
    subject: "Art Exhibition",
    date: "2025-01-01",
    status: "unread"
  }
];

type Message = {
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  date: string;
  status: string;
}

const columns = [
  { header: 'Sender', accessor: 'sender' },
  { header: 'Recipient', accessor: 'recipient', className:"hidden md:table-cell" },
  { header: 'Subject', accessor: 'subject', className:"hidden md:table-cell" },
  { header: 'Date', accessor: 'date', className:"hidden lg:table-cell" },
  { header: 'Status', accessor: 'status', className:"hidden lg:table-cell" },
  { header: 'Actions', accessor: 'actions' }
]

const MessagesListPage = () => {

const renderRows=(item : Message) => (
  <tr key={item.id} className="odd:bg-gray-200 hover:bg-gray-400 transition-colors duration-200">
    <td className="p-2 rounded-l-lg">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[var(--text)] flex items-center justify-center">
          <span className="text-white font-semibold text-sm">{item.sender.charAt(0)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{item.sender}</span>
          <span className="text-xs text-gray-500">{item.subject}</span>
        </div>
      </div>
    </td>
    <td className="hidden md:table-cell text-sm">{item.recipient}</td>
    <td className="hidden md:table-cell text-sm">{item.subject}</td>
    <td className="hidden lg:table-cell text-sm">{new Date(item.date).toLocaleDateString()}</td>
    <td className="hidden lg:table-cell text-sm">
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
        item.status === 'read' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
      }`}>
        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
      </span>
    </td>
    <td className="rounded-r-lg">
      <div className="flex items-center gap-3">
        <Link href={`/list/messages/${item.id}`}>
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
        <h1 className="hidden md:block text-2xl font-semibold text-[var(--p)]">All Messages</h1>
        
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
        <Tables columns={columns} renderRows={renderRows} data={messagesData} />
      </div>
    </div>
  )
}

export default MessagesListPage 