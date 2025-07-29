import Usercards from "@/components/Usercards";
import Countchart from "@/components/Countchart";

import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

const AdminPage = () => {
  return (
    <div className="p-3 flex gap-6 flex-col  md:flex-row  ">
      <div className="w-full md:w-2/3 flex flex-col gap-5 ">
        <div className="flex flex-col gap-4 md:flex-row w-full justify-between flex-wrap">
          <Usercards type="Student" />
          <Usercards type="Teacher" />
          <Usercards type="Parent" />
          <Usercards type="Staff" />
        </div>

        {/* middel  */}
        <div className="flex flex-col lg:flex-row gap-4 mt-3">
          {/* count  */}
          <div className=" w-full lg:w-2/3  h-[350px] ">
            <Countchart />
          </div>
          {/* attendance  */}
          <div className=" w-full lg:1/3  h-[350px] ">
          
           <AttendanceChart />
          
          </div>
        </div>

        {/* bottom  */}

        <div className="w-full h-[400px] ">
          <FinanceChart />
        </div>
      </div>

      <div className="w-full md:w-1/3 h-full flex flex-col gap-3 "> 
      <EventCalendar />
      <Announcements />
      
      </div>
    </div>
  );
};

export default AdminPage;
