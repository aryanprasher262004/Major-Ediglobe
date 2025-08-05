"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student"
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/sign-in");
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <p className="text-[var(--text)] text-lg">Join our educational community</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 hover:shadow-3xl transition-shadow duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[var(--p)] mb-2">Create Account</h3>
            <p className="text-gray-600">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-[var(--p)] mb-2">
                Register As
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300 bg-white text-[var(--p)]"
              >
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[var(--p)] mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[var(--p)] mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--p)] mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--p)] mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--p)] mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                placeholder="Confirm your password"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[var(--heading)] focus:ring-[var(--heading)] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <Link href="/terms" className="font-medium text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
                  Terms and Conditions
                </Link>
                {" "}and{" "}
                <Link href="/privacy" className="font-medium text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[var(--heading)] hover:bg-[var(--extra)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--heading)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
              <Image src="/google.png" alt="Google" width={20} height={20} className="mr-2" />
              Google
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
              <Image src="/microsoft.png" alt="Microsoft" width={20} height={20} className="mr-2" />
              Microsoft
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-medium text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
                Sign in here
              </Link>
            </p>
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

export default SignUpPage; 