"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { role } from "@/lib/data";

const HomePage = () => {
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState(role);

  useEffect(() => {
    // Redirect to role-specific pages
    if (currentRole === "admin") {
      router.push("/admin");
    } else if (currentRole === "teacher") {
      router.push("/teacher");
    } else if (currentRole === "student") {
      router.push("/student");
    } else if (currentRole === "parent") {
      router.push("/parent");
    }
  }, [currentRole, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg)] via-[var(--h)] to-[var(--s)] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--heading)] mx-auto mb-8"></div>
        <h1 className="text-2xl font-bold text-[var(--p)]">Loading...</h1>
        <p className="text-[var(--text)] mt-2">Redirecting to your dashboard</p>
      </div>
    </div>
  );
};

export default HomePage;