"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  KeyRound,
  Play,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-10">
        Mintok
      </h1>

      <nav className="space-y-4">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 hover:text-green-400"
        >
          <LayoutDashboard size={20}/>
          Dashboard
        </Link>

        <Link
          href="/playground"
          className="flex items-center gap-3 hover:text-green-400"
        >
          <Play size={20}/>
          Playground
        </Link>

        <Link
          href="/apikeys"
          className="flex items-center gap-3 hover:text-green-400"
        >
          <KeyRound size={20}/>
          API Keys
        </Link>

        <Link
          href="/analytics"
          className="flex items-center gap-3 hover:text-green-400"
        >
          <BarChart3 size={20}/>
          Analytics
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 hover:text-green-400"
        >
          <Settings size={20}/>
          Settings
        </Link>

      </nav>
    </aside>
  );
}