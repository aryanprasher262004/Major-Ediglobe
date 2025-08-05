"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@unilearn.edu",
    phone: "+1 (555) 123-4567",
    role: "Administrator",
    department: "Administration",
    joinDate: "2023-01-15",
    bio: "Experienced administrator with over 10 years in educational management. Passionate about creating efficient learning environments and supporting student success."
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data
  };

  return (
    <div className="p-3 flex gap-6 flex-col lg:flex-row">
      {/* Left Column - Profile Info */}
      <div className="w-full lg:w-1/3 space-y-6">
        {/* Profile Card */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-[var(--heading)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <button className="absolute bottom-4 right-4 w-8 h-8 bg-[var(--extra)] rounded-full flex items-center justify-center hover:bg-[var(--s)] transition-colors duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold text-[var(--p)] mb-2">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-[var(--text)] font-medium mb-1">{profileData.role}</p>
            <p className="text-gray-600 text-sm mb-4">{profileData.department}</p>
            
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-[var(--heading)] text-white rounded-lg hover:bg-[var(--extra)] transition-colors duration-300 transform hover:scale-105"
              >
                Edit Profile
              </button>
              <Link
                href="/settings"
                className="px-4 py-2 border border-[var(--heading)] text-[var(--heading)] rounded-lg hover:bg-[var(--heading)] hover:text-white transition-colors duration-300 transform hover:scale-105"
              >
                Settings
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-[var(--p)] mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <span className="font-medium">Total Logins</span>
              <span className="font-bold text-[var(--extra)]">1,247</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <span className="font-medium">Last Login</span>
              <span className="font-bold text-[var(--extra)]">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <span className="font-medium">Member Since</span>
              <span className="font-bold text-[var(--extra)]">Jan 2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="w-full lg:w-2/3 space-y-6">
        {/* Personal Information */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-[var(--p)]">Personal Information</h3>
            {isEditing && (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors duration-300"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--p)] mb-2">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-700">{profileData.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--p)] mb-2">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-700">{profileData.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--p)] mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-700">{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--p)] mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-700">{profileData.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--p)] mb-2">Role</label>
              <p className="text-gray-700">{profileData.role}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--p)] mb-2">Department</label>
              <p className="text-gray-700">{profileData.department}</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-[var(--p)] mb-4">About</h3>
          {isEditing ? (
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
              placeholder="Tell us about yourself..."
            />
          ) : (
            <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-[var(--p)] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-2 h-2 bg-[var(--extra)] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Logged into the system</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-2 h-2 bg-[var(--text)] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Updated student records</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300">
              <div className="w-2 h-2 bg-[var(--heading)] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Created new announcement</p>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 