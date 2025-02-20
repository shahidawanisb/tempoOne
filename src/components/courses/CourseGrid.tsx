import React from "react";
import CourseCard from "./CourseCard";

interface Course {
  id: string;
  title: string;
  description: string;
  enrollmentStatus: "open" | "closed" | "in-progress";
  startDate: string;
  duration: string;
  enrolledStudents: number;
  maxStudents: number;
  creditHours: number;
}

interface CourseGridProps {
  courses?: Course[];
  onEnroll?: (courseId: string) => void;
}

const CourseGrid = ({
  courses = [
    {
      id: "1",
      title: "Introduction to React Development",
      description:
        "Learn the fundamentals of React including hooks, state management, and component architecture.",
      enrollmentStatus: "open",
      startDate: "2024-04-01",
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
      startDate: "2024-03-15",
      duration: "10 weeks",
      enrolledStudents: 28,
      maxStudents: 30,
      creditHours: 4,
    },
    {
      id: "3",
      title: "UI/UX Design Fundamentals",
      description:
        "Master the principles of user interface and user experience design.",
      enrollmentStatus: "closed",
      startDate: "2024-05-01",
      duration: "6 weeks",
      enrolledStudents: 30,
      maxStudents: 30,
      creditHours: 3,
    },
  ],
  onEnroll = (courseId: string) =>
    console.log(`Enrolling in course ${courseId}`),
}: CourseGridProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            enrollmentStatus={course.enrollmentStatus}
            startDate={course.startDate}
            duration={course.duration}
            enrolledStudents={course.enrolledStudents}
            maxStudents={course.maxStudents}
            creditHours={course.creditHours}
            onEnroll={() => onEnroll(course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
