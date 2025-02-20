import "./globals.css";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import { TempoDevtools } from "tempo-devtools";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Course Management System",
  description: "A modern course management system for students and instructors",
};

// Initialize Tempo
if (process.env.NEXT_PUBLIC_TEMPO === "true") {
  TempoDevtools.init();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
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
