"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleBackToLogin = () => {
    router.push("/sign-in");
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
          <p className="text-[var(--text)] text-lg">Reset your password</p>
        </div>

        {/* Forgot Password Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 hover:shadow-3xl transition-shadow duration-300">
          {!isSubmitted ? (
            <>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[var(--p)] mb-2">Forgot Password?</h3>
                <p className="text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
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
                      Sending reset link...
                    </div>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </form>

              {/* Back to Login */}
              <div className="text-center">
                <button
                  onClick={handleBackToLogin}
                  className="text-sm font-medium text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300"
                >
                  ← Back to Sign In
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
                <h3 className="text-2xl font-semibold text-[var(--p)] mb-2">Check Your Email</h3>
                <p className="text-gray-600 mb-4">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full flex justify-center py-3 px-4 border border-[var(--heading)] rounded-lg shadow-sm text-sm font-medium text-[var(--heading)] bg-white hover:bg-[var(--heading)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--heading)] transition-all duration-300 transform hover:scale-105"
                >
                  Try Again
                </button>
                <button
                  onClick={handleBackToLogin}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300"
                >
                  Back to Sign In
                </button>
              </div>
            </>
          )}
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-lg font-semibold text-[var(--p)] mb-3">Need Help?</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Contact your school administrator</p>
            <p>• Call our support line: (555) 123-4567</p>
            <p>• Email us at: support@unilearn.edu</p>
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

export default ForgotPasswordPage; 