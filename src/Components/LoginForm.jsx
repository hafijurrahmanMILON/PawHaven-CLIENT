"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoFlashOutline,
} from "react-icons/io5";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAutoFill = () => {
    const mockEmail = "ezioAuditore@DaFirenze.com";
    const mockPass = "edwardKenway";

    setEmail(mockEmail);
    setPassword(mockPass);
    toast.success("Credentials filled! Ready to sign in.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ezioAuditore@DaFirenze.com" && password === "edwardKenway") {
      document.cookie = "auth=true; path=/";
      toast.success("Login successful! Welcome back.");
      window.location.href = "/products";
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="w-full md:w-1/2 p-8 md:p-16">
      <div className="max-w-sm mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl font-black text-base-content">Login</h2>
          <p className="text-base-content/50 mt-2">
            Enter your details to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-base-content/60 ml-1">
              Email Address
            </label>
            <div className="relative">
              <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="w-full bg-secondary/30 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-base-content placeholder:text-base-content/30"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/60">
                Password
              </label>
              <Link
                href="/resetPassword"
                className="text-xs font-bold text-primary hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-secondary/30 border-none rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-base-content placeholder:text-base-content/30"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/30 cursor-pointer hover:text-primary transition-colors"
              >
                {showPassword ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="hover:cursor-pointer w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-base-content/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-[0.2em]">
            <span className="bg-[#FAF9F6] px-4 text-base-content/40">
              OR
            </span>
          </div>
        </div>

        <button
          onClick={handleAutoFill}
          type="button"
          className=" hover:cursor-pointer w-full bg-accent/20 border border-accent/10 text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-accent/30 transition-all active:scale-95 border-dashed"
        >
          <IoFlashOutline className="text-xl animate-bounce" />
          Use Mock Credentials
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
