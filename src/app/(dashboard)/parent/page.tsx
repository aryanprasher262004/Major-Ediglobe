"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

const ParentHomePage = () => {
  const [children] = useState([
    { id: 1, name: "Sarah Johnson", class: "5A", grade: "A-", attendance: 95 },
    { id: 2, name: "Mike Johnson", class: "3B", grade: "B+", attendance: 88 }
  ]);

  const [recentActivities] = useState([
    { id: 1, child: "Sarah", activity: "Submitted Math Assignment", time: "2 hours ago", type: "assignment" },
    { id: 2, child: "Mike", activity: "Attended Science Class", time: "1 day ago", type: "attendance" },
    { id: 3, child: "Sarah", activity: "Received Grade: 92% in English", time: "2 days ago", type: "grade" },
    { id: 4, child: "Mike", activity: "Missed History Class", time: "3 days ago", type: "attendance" }
  ]);

  const [upcomingEvents] = useState([
    { id: 1, title: "Parent-Teacher Meeting", date: "2024-01-20", time: "15:00", type: "meeting" },
    { id: 2, title: "Science Fair", date: "2024-01-25", time: "10:00", type: "event" },
    { id: 3, title: "Sports Day", date: "2024-01-30", time: "09:00", type: "event" }
  ]);

  const [financialSummary] = useState({
    totalFees: 2500,
    paidFees: 2000,
    pendingFees: 500,
    nextDueDate: "2024-01-31"
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
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Parent"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--p)]">Welcome back, Mrs. Johnson!</h1>
              <p className="text-[var(--text)]">You have {children.length} children enrolled</p>
            </div>
          </div>
        </div>

        {/* Children Overview */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">My Children</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children.map((child) => (
              <div key={child.id} className="p-4 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[var(--heading)] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{child.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium">{child.name}</div>
                    <div className="text-sm opacity-75">Class {child.class}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="opacity-75">Grade:</span>
                    <span className="font-medium ml-1">{child.grade}</span>
                  </div>
                  <div>
                    <span className="opacity-75">Attendance:</span>
                    <span className="font-medium ml-1">{child.attendance}%</span>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link href={`/parent/child/${child.id}`} className="text-xs bg-[var(--heading)] text-white px-3 py-1 rounded hover:bg-[var(--extra)] transition-colors duration-300">
                    View Details
                  </Link>
                  <Link href={`/parent/child/${child.id}/grades`} className="text-xs border border-[var(--heading)] text-[var(--heading)] px-3 py-1 rounded hover:bg-[var(--heading)] hover:text-white transition-colors duration-300">
                    Grades
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[var(--p)]">Recent Activities</h2>
            <Link href="/parent/activities" className="text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === "grade" ? "bg-green-500" :
                  activity.type === "attendance" ? "bg-[var(--heading)]" : "bg-[var(--text)]"
                }`}></div>
                <div className="flex-1">
                  <div className="font-medium">{activity.activity}</div>
                  <div className="text-sm opacity-75">{activity.child} • {activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Financial Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--extra)]">${financialSummary.totalFees}</div>
              <div className="text-sm text-[var(--p)]">Total Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">${financialSummary.paidFees}</div>
              <div className="text-sm text-[var(--p)]">Paid</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">${financialSummary.pendingFees}</div>
              <div className="text-sm text-[var(--p)]">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--extra)]">{new Date(financialSummary.nextDueDate).toLocaleDateString()}</div>
              <div className="text-sm text-[var(--p)]">Next Due</div>
            </div>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div 
              className="bg-[var(--heading)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(financialSummary.paidFees / financialSummary.totalFees) * 100}%` }}
            ></div>
          </div>
          <div className="mt-3 flex gap-2">
            <Link href="/parent/payments" className="text-sm bg-[var(--heading)] text-white px-4 py-2 rounded hover:bg-[var(--extra)] transition-colors duration-300">
              Make Payment
            </Link>
            <Link href="/parent/invoices" className="text-sm border border-[var(--heading)] text-[var(--heading)] px-4 py-2 rounded hover:bg-[var(--heading)] hover:text-white transition-colors duration-300">
              View Invoices
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="w-full xl:w-1/3 flex flex-col gap-3">
        {/* Quick Actions */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/parent/children" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--heading)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">👨‍👩‍👧‍👦</span>
              </div>
              <span>View Children</span>
            </Link>
            <Link href="/parent/grades" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--text)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              <span>Check Grades</span>
            </Link>
            <Link href="/parent/attendance" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--extra)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📅</span>
              </div>
              <span>Attendance Report</span>
            </Link>
            <Link href="/list/messages" className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-[var(--s)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💬</span>
              </div>
              <span>Contact Teachers</span>
            </Link>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm opacity-75">{event.time}</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded ${
                    event.type === "meeting" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                  }`}>
                    {event.type}
                  </div>
                </div>
                <div className="text-sm opacity-75 mt-1">{new Date(event.date).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">Recent Announcements</h2>
          <Announcements />
        </div>

        {/* School Calendar */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-4">School Calendar</h2>
          <EventCalendar />
        </div>
      </div>
    </div>
  );
};

export default ParentHomePage;
