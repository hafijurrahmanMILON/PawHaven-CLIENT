"use client";

import React from "react";
import Link from "next/link";
import { IoEyeOffOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import LoginForm from "@/Components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-4">
      <div className="max-w-5xl w-full bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(203,153,126,0.15)] overflow-hidden flex flex-col md:flex-row border border-primary/5">
        
        <div className="hidden md:flex md:w-1/2 bg-primary p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-white text-4xl font-black leading-tight">
              Welcome Back to <br />
              <span className="italic">PawHaven</span>
            </h1>
            <p className="text-white/80 mt-4 max-w-xs">
              Your pet&#39;s happiness is just a login away. Ready to explore more?
            </p>
          </div>

          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <p className="text-white text-sm italic">
                The best place for my furry friends. Their service is truly professional and warm!
              </p>
              <p className="text-white font-bold mt-2 text-xs uppercase tracking-widest">— Happy Pet Parent</p>
            </div>
          </div>
        </div>

        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;