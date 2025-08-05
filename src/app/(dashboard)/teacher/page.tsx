"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

const TeacherHomePage = () => {
  const [todayClasses] = useState([
    { id: 1, subject: "Mathematics", class: "5A", time: "08:00 - 09:00", students: 24, status: "upcoming" },
    { id: 2, subject: "Physics", class: "6B", time: "10:00 - 11:00", students: 22, status: "completed" },
    { id: 3, subject: "Chemistry", class: "7A", time: "13:00 - 14:00", students: 20, status: "upcoming" },
    { id: 4, subject: "Biology", class: "8B", time: "15:00 - 16:00", students: 18, status: "upcoming" }
  ]);

  const [recentAssignments] = useState([
    { id: 1, subject: "Mathematics", class: "5A", title: "Algebra Quiz", dueDate: "2024-01-15", submissions: 18, total: 24 },
    { id: 2, subject: "Physics", class: "6B", title: "Lab Report", dueDate: "2024-01-18", submissions: 15, total: 22 },
    { id: 3, subject: "Chemistry", class: "7A", title: "Periodic Table Test", dueDate: "2024-01-20", submissions: 12, total: 20 }
  ]);

  const [quickStats] = useState({
    totalStudents: 84,
    totalClasses: 4,
    pendingAssignments: 3,
    averageAttendance: 92
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
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Teacher"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--p)]">Welcome back, Mr. John Doe!</h1>
              <p className="text-[var(--text)]">You have {todayClasses.filter(c => c.status === "upcoming").length} classes today</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{quickStats.totalStudents}</div>
              <div className="text-sm text-[var(--p)]">Total Students</div>
            </div>
          </div>
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{quickStats.totalClasses}</div>
              <div className="text-sm text-[var(--p)]">Active Classes</div>
            </div>
          </div>
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{quickStats.pendingAssignments}</div>
              <div className="text-sm text-[var(--p)]">Pending Tasks</div>
            </div>
          </div>
          <div className="bg-[var(--h)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">{quickStats.averageAttendance}%</div>
              <div className="text-sm text-[var(--p)]">Avg. Attendance</div>
            </div>
          </div>
        </div>

        {/* Today's Classes */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[var(--p)]">Today's Classes</h2>
            <Link href="/list/lessons" className="text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {todayClasses.map((cls) => (
              <div key={cls.id} className="flex items-center justify-between p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    cls.status === "completed" ? "bg-green-500" : "bg-[var(--heading)]"
                  }`}></div>
                  <div>
                    <div className="font-medium">{cls.subject}</div>
                    <div className="text-sm opacity-75">{cls.class} • {cls.students} students</div>
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

        {/* Recent Assignments */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[var(--p)]">Recent Assignments</h2>
            <Link href="/list/assignments" className="text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {recentAssignments.map((assignment) => (
              <div key={assignment.id} className="p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{assignment.title}</div>
                    <div className="text-sm opacity-75">{assignment.subject} • {assignment.class}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Due: {new Date(assignment.dueDate).toLocaleDateString()}</div>
                    <div className="text-sm opacity-75">{assignment.submissions}/{assignment.total} submitted</div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div 
                      className="bg-[var(--heading)] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="w-full xl:w-1/3 flex flex-col gap-3">
        {/* Quick Actions */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/list/attendance" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--heading)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              <span>Take Attendance</span>
            </Link>
            <Link href="/list/assignments" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--text)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📝</span>
              </div>
              <span>Create Assignment</span>
            </Link>
            <Link href="/list/results" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--extra)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📈</span>
              </div>
              <span>Grade Assignments</span>
            </Link>
            <Link href="/list/messages" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--s)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💬</span>
              </div>
              <span>Send Message</span>
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
      </div>
    </div>
  );
};

export default TeacherHomePage;
