"use client";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardPage() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8">

          <h1 className="text-4xl font-bold">
            Welcome to Mintok 🚀
          </h1>

        </main>

      </div>

    </div>

  );
}