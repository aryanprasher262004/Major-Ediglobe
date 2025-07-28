import Usercards from "@/components/Usercards";
import Countchart from "@/components/Countchart";

import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";

const AdminPage = () => {
  return (
    <div className="p-3 flex gap-6 flex-col  md:flex-row ">
      <div className="w-full md:w-2/3 flex flex-col gap-5 ">
        <div className="flex flex-col gap-4 md:flex-row w-full justify-between flex-wrap">
          <Usercards type="Student" />
          <Usercards type="Teacher" />
          <Usercards type="Parent" />
          <Usercards type="Staff" />
        </div>

        {/* middel  */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4 h-[450px]">
          {/* count  */}
          <div className=" w-full lg:w-2/3  ">
            <Countchart />
          </div>
          {/* attendance  */}
          <div className=" w-full lg:1/3  ">
          
           <AttendanceChart />
          
          </div>
        </div>

        {/* bottom  */}

        <div className="w-full h-[400px] ">
          <FinanceChart />
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-blue-300">r</div>
    </div>
  );
};

export default AdminPage;
