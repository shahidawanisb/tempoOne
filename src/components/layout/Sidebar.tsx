import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Settings,
  UserCircle,
  Users,
  Clock,
  CreditCard,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  userRole?: "admin" | "student" | "instructor";
}

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const Sidebar = ({ className = "", userRole = "student" }: SidebarProps) => {
  const commonNavItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: "/dashboard",
    },
    {
      label: "Profile",
      icon: <UserCircle className="w-5 h-5" />,
      href: "/profile",
    },
  ];

  const roleSpecificNavItems: Record<string, NavItem[]> = {
    admin: [
      {
        label: "User Management",
        icon: <Users className="w-5 h-5" />,
        href: "/users",
      },
      {
        label: "Course Management",
        icon: <BookOpen className="w-5 h-5" />,
        href: "/courses/manage",
      },
      {
        label: "Settings",
        icon: <Settings className="w-5 h-5" />,
        href: "/settings",
      },
    ],
    student: [
      {
        label: "My Courses",
        icon: <BookOpen className="w-5 h-5" />,
        href: "/courses",
      },
      {
        label: "Credit Hours",
        icon: <Clock className="w-5 h-5" />,
        href: "/credits",
      },
      {
        label: "Payments",
        icon: <CreditCard className="w-5 h-5" />,
        href: "/payments",
      },
    ],
    instructor: [
      {
        label: "My Classes",
        icon: <GraduationCap className="w-5 h-5" />,
        href: "/classes",
      },
      {
        label: "Students",
        icon: <Users className="w-5 h-5" />,
        href: "/students",
      },
    ],
  };

  const navItems = [...commonNavItems, ...roleSpecificNavItems[userRole]];

  return (
    <div className={cn("w-[280px] h-screen bg-background border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Course Management</h2>
          <ScrollArea className="h-[900px] px-1">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <a href={item.href}>
                    {item.icon}
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
