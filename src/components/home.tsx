"use client";

import React, { useState } from "react";
import StatusOverview from "@/components/dashboard/StatusOverview";
import CourseGrid from "@/components/courses/CourseGrid";
import EnrollmentModal from "@/components/enrollment/EnrollmentModal";

interface HomeProps {
  userRole?: "admin" | "student" | "instructor";
  currentProfile?: {
    id: string;
    name: string;
    role: string;
    avatarUrl?: string;
  };
}

const Home = ({
  userRole = "student",
  currentProfile = {
    id: "1",
    name: "John Doe",
    role: "Student",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
}: HomeProps) => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");

  const handleEnrollClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    setIsEnrollmentModalOpen(true);
  };

  const handleEnrollmentComplete = (data: any) => {
    console.log("Enrollment completed", {
      courseId: selectedCourseId,
      ...data,
    });
    setIsEnrollmentModalOpen(false);
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">
        Welcome Back, {currentProfile.name}
      </h1>
      <StatusOverview
        totalCreditHours={120}
        earnedCreditHours={45}
        upcomingDeadlines={[
          {
            courseName: "React Fundamentals",
            daysRemaining: 5,
            type: "enrollment",
          },
          {
            courseName: "Advanced JavaScript",
            daysRemaining: 12,
            type: "completion",
          },
        ]}
      />
      <CourseGrid onEnroll={handleEnrollClick} />

      <EnrollmentModal
        open={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
        onComplete={handleEnrollmentComplete}
        courseTitle="Introduction to React Development"
        profiles={[
          { id: "1", name: "Student Profile", type: "student" },
          { id: "2", name: "Professional Profile", type: "professional" },
        ]}
      />
    </div>
  );
};

export default Home;
