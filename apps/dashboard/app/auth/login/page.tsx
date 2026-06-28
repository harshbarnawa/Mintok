"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem(
      "access_token",
      res.data.access_token
    );

    alert("Login Success");

    window.location.href = "/dashboard";

  } catch (err) {
    console.error(err);
    alert("Login Failed");
  }
}

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Login</h1>

      <input
        className="border p-2 rounded w-80"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 rounded w-80"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-black text-white px-5 py-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </main>
  );
}