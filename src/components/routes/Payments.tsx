import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CreditCard, Download } from "lucide-react";

const Payments = () => {
  const payments = [
    {
      id: 1,
      course: "Introduction to React Development",
      amount: 499,
      date: "2024-03-15",
      status: "paid",
      invoice: "#INV-001",
    },
    {
      id: 2,
      course: "Advanced JavaScript Concepts",
      amount: 599,
      date: "2024-03-01",
      status: "paid",
      invoice: "#INV-002",
    },
    {
      id: 3,
      course: "UI/UX Design Fundamentals",
      amount: 399,
      date: "2024-04-01",
      status: "pending",
      invoice: "#INV-003",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Payments</h1>
        <Button>
          <CreditCard className="mr-2 h-4 w-4" />
          Add Payment Method
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <p className="font-medium">{payment.course}</p>
                  <p className="text-sm text-muted-foreground">
                    {payment.date}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Badge
                    variant={
                      payment.status === "paid" ? "default" : "secondary"
                    }
                  >
                    {payment.status}
                  </Badge>
                  <p className="font-medium">${payment.amount}</p>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;
