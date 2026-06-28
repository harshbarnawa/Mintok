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

      alert("Login Success");

      console.log(res.data);
    } catch (err) {
      alert("Login Failed");
      console.error(err);
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