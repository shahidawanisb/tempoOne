import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

const CreditHours = () => {
  const creditData = {
    totalRequired: 120,
    earned: 45,
    inProgress: 10,
    remaining: 65,
    categories: [
      { name: "Core Courses", required: 60, completed: 30 },
      { name: "Electives", required: 30, completed: 10 },
      { name: "Specialization", required: 30, completed: 5 },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Credit Hours</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress
              value={(creditData.earned / creditData.totalRequired) * 100}
            />
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold">{creditData.totalRequired}</p>
                <p className="text-sm text-muted-foreground">Required</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-green-600">
                  {creditData.earned}
                </p>
                <p className="text-sm text-muted-foreground">Earned</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-blue-600">
                  {creditData.inProgress}
                </p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-orange-600">
                  {creditData.remaining}
                </p>
                <p className="text-sm text-muted-foreground">Remaining</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {creditData.categories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress
                  value={(category.completed / category.required) * 100}
                />
                <div className="flex justify-between text-sm">
                  <span>
                    {category.completed} / {category.required} Credits
                  </span>
                  <span>
                    {Math.round((category.completed / category.required) * 100)}
                    %
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreditHours;
