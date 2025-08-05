"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

const StudentHomePage = () => {
  const [todaySchedule] = useState([
    { id: 1, subject: "Mathematics", teacher: "Mr. Smith", time: "08:00 - 09:00", room: "Room 101", status: "upcoming" },
    { id: 2, subject: "English", teacher: "Ms. Johnson", time: "09:15 - 10:15", room: "Room 102", status: "completed" },
    { id: 3, subject: "Science", teacher: "Mr. Brown", time: "10:30 - 11:30", room: "Room 103", status: "upcoming" },
    { id: 4, subject: "History", teacher: "Ms. Davis", time: "13:00 - 14:00", room: "Room 104", status: "upcoming" }
  ]);

  const [myAssignments] = useState([
    { id: 1, subject: "Mathematics", title: "Algebra Quiz", dueDate: "2024-01-15", status: "submitted", grade: 85 },
    { id: 2, subject: "English", title: "Essay Writing", dueDate: "2024-01-18", status: "pending", grade: null },
    { id: 3, subject: "Science", title: "Lab Report", dueDate: "2024-01-20", status: "submitted", grade: 92 }
  ]);

  const [academicStats] = useState({
    currentGrade: "A-",
    attendance: 95,
    completedAssignments: 12,
    totalAssignments: 15,
    averageScore: 87
  });

  return (
    <div className="p-3 flex gap-6 flex-col xl:flex-row">
      {/* Left Column - Main Content */}
      <div className="w-full xl:w-2/3 flex flex-col gap-5">
        {/* Welcome Section */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[var(--heading)] rounded-full flex items-center justify-center">
              <Image
                src="https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Student"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--p)]">Welcome back, Sarah!</h1>
              <p className="text-[var(--text)]">Class 5A • Grade {academicStats.currentGrade}</p>
            </div>
          </div>
        </div>

        {/* Academic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{academicStats.currentGrade}</div>
              <div className="text-sm text-[var(--p)]">Current Grade</div>
            </div>
          </div>
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{academicStats.attendance}%</div>
              <div className="text-sm text-[var(--p)]">Attendance</div>
            </div>
          </div>
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{academicStats.averageScore}%</div>
              <div className="text-sm text-[var(--p)]">Avg. Score</div>
            </div>
          </div>
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{academicStats.completedAssignments}/{academicStats.totalAssignments}</div>
              <div className="text-sm text-[var(--p)]">Assignments</div>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[var(--p)]">Today's Schedule</h2>
            <Link href="/student/schedule" className="text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
              View Full Schedule →
            </Link>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((cls) => (
              <div key={cls.id} className="flex items-center justify-between p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    cls.status === "completed" ? "bg-green-500" : "bg-[var(--heading)]"
                  }`}></div>
                  <div>
                    <div className="font-medium">{cls.subject}</div>
                    <div className="text-sm opacity-75">{cls.teacher} • {cls.room}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{cls.time}</div>
                  <div className="text-sm opacity-75 capitalize">{cls.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Assignments */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[var(--p)]">My Assignments</h2>
            <Link href="/list/assignments" className="text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {myAssignments.map((assignment) => (
              <div key={assignment.id} className="p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{assignment.title}</div>
                    <div className="text-sm opacity-75">{assignment.subject}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Due: {new Date(assignment.dueDate).toLocaleDateString()}</div>
                    <div className={`text-sm font-medium ${
                      assignment.status === "submitted" ? "text-green-500" : "text-orange-500"
                    }`}>
                      {assignment.status === "submitted" && assignment.grade ? `Grade: ${assignment.grade}%` : assignment.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Weekly Schedule</h2>
          <BigCalendar />
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="w-full xl:w-1/3 flex flex-col gap-3">
        {/* Quick Actions */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/list/assignments" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--heading)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📝</span>
              </div>
              <span>Submit Assignment</span>
            </Link>
            <Link href="/list/results" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--text)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              <span>View Grades</span>
            </Link>
            <Link href="/list/attendance" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--extra)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📅</span>
              </div>
              <span>Check Attendance</span>
            </Link>
            <Link href="/list/messages" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--s)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💬</span>
              </div>
              <span>Contact Teacher</span>
            </Link>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Upcoming Events</h2>
          <EventCalendar />
        </div>

        {/* Recent Announcements */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Recent Announcements</h2>
          <Announcements />
        </div>

        {/* Study Resources */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Study Resources</h2>
          <div className="space-y-3">
            <Link href="#" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--heading)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📚</span>
              </div>
              <span>Library</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--text)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🎥</span>
              </div>
              <span>Video Lessons</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--extra)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📖</span>
              </div>
              <span>Study Guides</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHomePage;
