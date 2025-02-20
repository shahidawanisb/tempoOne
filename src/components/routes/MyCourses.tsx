"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseGrid from "../courses/CourseGrid";

const MyCourses = () => {
  const enrolledCourses = [
    {
      id: "1",
      title: "Introduction to React Development",
      description:
        "Learn the fundamentals of React including hooks, state management, and component architecture.",
      enrollmentStatus: "in-progress",
      startDate: "2024-03-15",
      duration: "8 weeks",
      enrolledStudents: 25,
      maxStudents: 30,
      creditHours: 3,
    },
    {
      id: "2",
      title: "Advanced JavaScript Concepts",
      description:
        "Deep dive into JavaScript concepts including closures, prototypes, and async programming.",
      enrollmentStatus: "in-progress",
      startDate: "2024-03-01",
      duration: "10 weeks",
      enrolledStudents: 28,
      maxStudents: 30,
      creditHours: 4,
    },
  ];

  const completedCourses = [
    {
      id: "3",
      title: "Web Development Basics",
      description: "Introduction to HTML, CSS, and JavaScript fundamentals.",
      enrollmentStatus: "completed",
      startDate: "2024-01-01",
      duration: "6 weeks",
      enrolledStudents: 30,
      maxStudents: 30,
      creditHours: 3,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Courses</h1>

      <Tabs defaultValue="enrolled" className="w-full">
        <TabsList>
          <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
          <TabsTrigger value="completed">Completed Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="enrolled">
          <CourseGrid courses={enrolledCourses} />
        </TabsContent>

        <TabsContent value="completed">
          <CourseGrid courses={completedCourses} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyCourses;
