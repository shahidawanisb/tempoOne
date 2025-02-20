import React from "react";
import { Progress } from "../ui/progress";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, GraduationCap, AlertCircle } from "lucide-react";

interface StatusOverviewProps {
  totalCreditHours?: number;
  earnedCreditHours?: number;
  upcomingDeadlines?: Array<{
    courseName: string;
    daysRemaining: number;
    type: "enrollment" | "completion";
  }>;
}

const StatusOverview = ({
  totalCreditHours = 120,
  earnedCreditHours = 45,
  upcomingDeadlines = [
    { courseName: "React Fundamentals", daysRemaining: 5, type: "enrollment" },
    {
      courseName: "Advanced JavaScript",
      daysRemaining: 12,
      type: "completion",
    },
    { courseName: "Web Security", daysRemaining: 15, type: "enrollment" },
  ],
}: StatusOverviewProps) => {
  const creditProgress = (earnedCreditHours / totalCreditHours) * 100;

  return (
    <Card className="w-full bg-white">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Credit Hours Progress Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Credit Hours Progress</h3>
              </div>
              <span className="text-sm text-muted-foreground">
                {earnedCreditHours}/{totalCreditHours} Credits
              </span>
            </div>
            <Progress value={creditProgress} className="h-2" />
          </div>

          {/* Upcoming Deadlines Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Upcoming Deadlines</h3>
            </div>
            <div className="space-y-2">
              {upcomingDeadlines.slice(0, 2).map((deadline, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-muted/20 p-2 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    {deadline.daysRemaining <= 7 && (
                      <AlertCircle className="w-4 h-4 text-destructive" />
                    )}
                    <span className="text-sm truncate">
                      {deadline.courseName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        deadline.type === "enrollment" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {deadline.type}
                    </Badge>
                    <span className="text-sm font-medium">
                      {deadline.daysRemaining}d
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusOverview;
