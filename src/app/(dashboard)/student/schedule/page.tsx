"use client";

import { useState } from "react";
import BigCalendar from "@/components/BigCalendar";

const StudentSchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weeklySchedule] = useState({
    monday: [
      { time: "08:00 - 09:00", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 101" },
      { time: "09:15 - 10:15", subject: "English", teacher: "Ms. Johnson", room: "Room 102" },
      { time: "10:30 - 11:30", subject: "Science", teacher: "Mr. Brown", room: "Room 103" },
      { time: "11:45 - 12:45", subject: "History", teacher: "Ms. Davis", room: "Room 104" },
      { time: "13:30 - 14:30", subject: "Physical Education", teacher: "Mr. Wilson", room: "Gym" },
      { time: "14:45 - 15:45", subject: "Art", teacher: "Ms. Garcia", room: "Art Room" }
    ],
    tuesday: [
      { time: "08:00 - 09:00", subject: "English", teacher: "Ms. Johnson", room: "Room 102" },
      { time: "09:15 - 10:15", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 101" },
      { time: "10:30 - 11:30", subject: "Geography", teacher: "Mr. Lee", room: "Room 105" },
      { time: "11:45 - 12:45", subject: "Science", teacher: "Mr. Brown", room: "Room 103" },
      { time: "13:30 - 14:30", subject: "Music", teacher: "Ms. Taylor", room: "Music Room" },
      { time: "14:45 - 15:45", subject: "Computer Science", teacher: "Mr. Anderson", room: "Lab 1" }
    ],
    wednesday: [
      { time: "08:00 - 09:00", subject: "Science", teacher: "Mr. Brown", room: "Room 103" },
      { time: "09:15 - 10:15", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 101" },
      { time: "10:30 - 11:30", subject: "English", teacher: "Ms. Johnson", room: "Room 102" },
      { time: "11:45 - 12:45", subject: "Physical Education", teacher: "Mr. Wilson", room: "Gym" },
      { time: "13:30 - 14:30", subject: "History", teacher: "Ms. Davis", room: "Room 104" },
      { time: "14:45 - 15:45", subject: "Library", teacher: "Ms. White", room: "Library" }
    ],
    thursday: [
      { time: "08:00 - 09:00", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 101" },
      { time: "09:15 - 10:15", subject: "Science", teacher: "Mr. Brown", room: "Room 103" },
      { time: "10:30 - 11:30", subject: "English", teacher: "Ms. Johnson", room: "Room 102" },
      { time: "11:45 - 12:45", subject: "Art", teacher: "Ms. Garcia", room: "Art Room" },
      { time: "13:30 - 14:30", subject: "Geography", teacher: "Mr. Lee", room: "Room 105" },
      { time: "14:45 - 15:45", subject: "Computer Science", teacher: "Mr. Anderson", room: "Lab 1" }
    ],
    friday: [
      { time: "08:00 - 09:00", subject: "English", teacher: "Ms. Johnson", room: "Room 102" },
      { time: "09:15 - 10:15", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 101" },
      { time: "10:30 - 11:30", subject: "Science", teacher: "Mr. Brown", room: "Room 103" },
      { time: "11:45 - 12:45", subject: "Music", teacher: "Ms. Taylor", room: "Music Room" },
      { time: "13:30 - 14:30", subject: "Physical Education", teacher: "Mr. Wilson", room: "Gym" },
      { time: "14:45 - 15:45", subject: "History", teacher: "Ms. Davis", room: "Room 104" }
    ]
  });

  const getDaySchedule = (day: string) => {
    return weeklySchedule[day as keyof typeof weeklySchedule] || [];
  };

  const getCurrentDay = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[selectedDate.getDay()];
  };

  return (
    <div className="p-3 flex gap-6 flex-col xl:flex-row">
      {/* Left Column - Weekly Schedule */}
      <div className="w-full xl:w-2/3 flex flex-col gap-5">
        {/* Header */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-[var(--p)] mb-2">My Schedule</h1>
          <p className="text-[var(--text)]">Class 5A • Academic Year 2024-2025</p>
        </div>

        {/* Weekly Schedule Grid */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Weekly Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {Object.entries(weeklySchedule).map(([day, schedule]) => (
              <div key={day} className="space-y-2">
                <h3 className="font-semibold text-[var(--p)] text-center capitalize">{day}</h3>
                <div className="space-y-1">
                  {schedule.map((classItem, index) => (
                    <div key={index} className="p-2 bg-[var(--bg)] rounded text-xs hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                      <div className="font-medium">{classItem.time}</div>
                      <div className="opacity-75">{classItem.subject}</div>
                      <div className="opacity-75">{classItem.room}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Today's Schedule</h2>
          <div className="space-y-3">
            {getDaySchedule(getCurrentDay()).map((classItem, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--heading)] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{classItem.subject.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium">{classItem.subject}</div>
                    <div className="text-sm opacity-75">{classItem.teacher} • {classItem.room}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{classItem.time}</div>
                  <div className="text-sm opacity-75">Period {index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Calendar and Info */}
      <div className="w-full xl:w-1/3 flex flex-col gap-3">
        {/* Calendar */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Calendar</h2>
          <BigCalendar />
        </div>

        {/* Class Information */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Class Information</h2>
          <div className="space-y-3">
            <div className="p-3 bg-[var(--bg)] rounded-lg">
              <div className="font-medium">Class Teacher</div>
              <div className="text-sm opacity-75">Ms. Johnson (English)</div>
            </div>
            <div className="p-3 bg-[var(--bg)] rounded-lg">
              <div className="font-medium">Class Room</div>
              <div className="text-sm opacity-75">Room 102</div>
            </div>
            <div className="p-3 bg-[var(--bg)] rounded-lg">
              <div className="font-medium">Class Strength</div>
              <div className="text-sm opacity-75">24 Students</div>
            </div>
            <div className="p-3 bg-[var(--bg)] rounded-lg">
              <div className="font-medium">School Hours</div>
              <div className="text-sm opacity-75">8:00 AM - 3:45 PM</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300 text-left">
              📅 Download Schedule
            </button>
            <button className="w-full p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300 text-left">
              📧 Contact Teachers
            </button>
            <button className="w-full p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300 text-left">
              📚 View Assignments
            </button>
            <button className="w-full p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300 text-left">
              📊 Check Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSchedulePage; 