"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isLoggingOut && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isLoggingOut && countdown === 0) {
      router.push("/sign-in");
    }
  }, [countdown, isLoggingOut, router]);

  const handleLogout = () => {
    setIsLoggingOut(true);
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg)] via-[var(--h)] to-[var(--s)] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[var(--heading)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/logo.png"
                alt="UniLearn Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[var(--p)] mb-2" style={{fontFamily:'head'}}>
            UniLearn
          </h2>
          <p className="text-[var(--text)] text-lg">Goodbye!</p>
        </div>

        {/* Logout Confirmation */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 hover:shadow-3xl transition-shadow duration-300">
          {!isLoggingOut ? (
            <>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--p)] mb-2">Sign Out</h3>
                <p className="text-gray-600">Are you sure you want to sign out of your account?</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleLogout}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105"
                >
                  Yes, Sign Out
                </button>
                <button
                  onClick={handleCancel}
                  className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--heading)] transition-all duration-300 transform hover:scale-105"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--p)] mb-2">Signed Out Successfully</h3>
                <p className="text-gray-600 mb-4">
                  You have been successfully signed out of your account.
                </p>
                <div className="text-sm text-gray-500">
                  Redirecting to login page in <span className="font-bold text-[var(--extra)]">{countdown}</span> seconds...
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/sign-in"
                  className="w-full flex justify-center py-3 px-4 border border-[var(--heading)] rounded-lg shadow-sm text-sm font-medium text-[var(--heading)] bg-white hover:bg-[var(--heading)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--heading)] transition-all duration-300 transform hover:scale-105"
                >
                  Go to Sign In
                </Link>
                <Link
                  href="/"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Session Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-lg font-semibold text-[var(--p)] mb-3">Session Information</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Last Login:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Session Duration:</span>
              <span>2 hours 15 minutes</span>
            </div>
            <div className="flex justify-between">
              <span>Device:</span>
              <span>Chrome on Windows</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-lg font-semibold text-[var(--p)] mb-3">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/profile"
              className="p-3 text-center bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300 text-sm"
            >
              View Profile
            </Link>
            <Link
              href="/settings"
              className="p-3 text-center bg-[var(--bg)] rounded-lg hover:bg-[var(--s)] hover:text-white transition-colors duration-300 text-sm"
            >
              Settings
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2024 UniLearn. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage; 