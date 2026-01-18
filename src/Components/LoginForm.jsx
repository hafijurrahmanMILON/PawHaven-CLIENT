"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  IoEyeOffOutline,
  IoLockClosedOutline,
  IoMailOutline,
} from "react-icons/io5";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log({ email, password, error });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ezioAuditore@DaFirenze.com" && password === "edwardKenway") {
      document.cookie = "auth=true; path=/";
      toast.success("login successful");
      window.location.href = "/products";
    } else {
      toast.error("something went wrong");
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="w-full bg-secondary/30 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-base-content placeholder:text-base-content/30"
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
                size="sm"
                className="text-xs font-bold text-primary hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl" />
              <input
                type="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-secondary/30 border-none rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-base-content placeholder:text-base-content/30"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/30 cursor-pointer hover:text-primary transition-colors">
                <IoEyeOffOutline size={20} />
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-base-content/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-[0.2em]">
            <span className="bg-white px-4 text-base-content/40">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Button */}
        <button className="w-full bg-white border border-base-content/10 text-base-content py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-secondary/20 transition-all active:scale-95">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google Account
        </button>

        <p className="text-center mt-10 text-sm text-base-content/60">
          New to PawHaven?{" "}
          <Link
            href="/register"
            className="text-primary font-bold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
