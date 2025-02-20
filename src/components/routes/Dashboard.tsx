import React from "react";
import StatusOverview from "@/components/dashboard/StatusOverview";
import CourseGrid from "@/components/courses/CourseGrid";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <StatusOverview />
      <CourseGrid />
    </div>
  );
};

export default Dashboard;
