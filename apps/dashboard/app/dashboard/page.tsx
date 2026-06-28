"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      window.location.href = "/auth/login";
      return;
    }

    api
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("access_token");
        window.location.href = "/auth/login";
      });
  }, []);

  if (!user) {
    return <h1 className="p-10">Loading...</h1>;
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        Welcome {user.username}
      </h1>

      <p>{user.email}</p>
    </main>
  );
}