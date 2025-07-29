import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
  return (
    <div className="p-3 flex gap-6 flex-col  xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3 flex flex-col gap-5">
        <div className="h-full bg-[var(--h)] p-3 rounded-lg ">
          <h1 className="font-semibold text-xl">Schedule (4A)</h1>
          <BigCalendar />
        </div>

      </div>
      {/* right  */}
      <div className="w-full xl:w-1/3 h-full flex flex-col  ">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
