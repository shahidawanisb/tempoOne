import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Clock, Calendar, Users } from "lucide-react";

interface CourseCardProps {
  title?: string;
  description?: string;
  enrollmentStatus?: "open" | "closed" | "in-progress";
  startDate?: string;
  duration?: string;
  enrolledStudents?: number;
  maxStudents?: number;
  creditHours?: number;
  onEnroll?: () => void;
}

const CourseCard = ({
  title = "Introduction to React Development",
  description = "Learn the fundamentals of React including hooks, state management, and component architecture.",
  enrollmentStatus = "open",
  startDate = "2024-04-01",
  duration = "8 weeks",
  enrolledStudents = 25,
  maxStudents = 30,
  creditHours = 3,
  onEnroll = () => console.log("Enroll clicked"),
}: CourseCardProps) => {
  const enrollmentPercentage = (enrolledStudents / maxStudents) * 100;

  const statusColors = {
    open: "bg-green-100 text-green-800",
    closed: "bg-red-100 text-red-800",
    "in-progress": "bg-yellow-100 text-yellow-800",
  };

  return (
    <Card className="w-[380px] h-[280px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-2 line-clamp-2">
              {description}
            </CardDescription>
          </div>
          <Badge className={statusColors[enrollmentStatus]}>
            {enrollmentStatus.charAt(0).toUpperCase() +
              enrollmentStatus.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Starts: {startDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>
                  {enrolledStudents}/{maxStudents} Students
                </span>
              </div>
              <span>{creditHours} Credit Hours</span>
            </div>
            <Progress value={enrollmentPercentage} className="h-2" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onEnroll}
          className="w-full"
          variant="default"
          disabled={enrollmentStatus === "closed"}
        >
          {enrollmentStatus === "closed" ? "Enrollment Closed" : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
