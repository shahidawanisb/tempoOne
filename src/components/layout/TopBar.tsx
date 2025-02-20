"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";

interface Profile {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

interface TopBarProps {
  currentProfile?: Profile;
  profiles?: Profile[];
  onProfileChange?: (profileId: string) => void;
  onLogout?: () => void;
}

const TopBar = ({
  currentProfile = {
    id: "1",
    name: "John Doe",
    role: "Student",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  profiles = [
    {
      id: "1",
      name: "John Doe",
      role: "Student",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      id: "2",
      name: "John Doe (Instructor)",
      role: "Instructor",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John2",
    },
  ],
  onProfileChange = (profileId: string) =>
    console.log("Profile changed", profileId),
  onLogout = () => console.log("Logout clicked"),
}: TopBarProps) => {
  return (
    <div className="w-full h-16 px-4 border-b bg-white flex items-center justify-between">
      <div className="flex-1" />

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={currentProfile.avatarUrl}
                  alt={currentProfile.name}
                />
                <AvatarFallback>{currentProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">
                  {currentProfile.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {currentProfile.role}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Profiles</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {profiles.map((profile) => (
              <DropdownMenuItem
                key={profile.id}
                onClick={() => onProfileChange(profile.id)}
                className="cursor-pointer"
              >
                <User className="mr-2 h-4 w-4" />
                <span>{profile.name}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
