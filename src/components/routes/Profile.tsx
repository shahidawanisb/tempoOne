"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Profile = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Profile Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Avatar</Button>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Student" disabled />
            </div>
          </div>

          <Button className="w-full">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
