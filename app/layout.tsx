import "../src/index.css";
import { Inter } from "next/font/google";
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Course Management System",
  description: "A modern course management system for students and instructors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <TopBar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
