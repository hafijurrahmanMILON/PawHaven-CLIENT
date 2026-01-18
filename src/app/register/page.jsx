"use client";

import React from "react";
import Link from "next/link";
import { 
  IoEyeOffOutline, 
  IoMailOutline, 
  IoLockClosedOutline, 
  IoPersonOutline, 
  IoImageOutline 
} from "react-icons/io5";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-4 py-12 md:py-20">
      <div className="max-w-5xl w-full bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(203,153,126,0.15)] overflow-hidden flex flex-col md:flex-row-reverse border border-primary/5">
        
        <div className="hidden md:flex md:w-1/2 bg-primary p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 text-right">
            <h1 className="text-white text-4xl font-black leading-tight">
              Join the <br />
              <span className="italic">PawHaven</span> Family
            </h1>
            <p className="text-white/80 mt-4 max-w-xs ml-auto">
              Create an account today and give your pet the premium care they deserve.
            </p>
          </div>

          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white text-xl">🛡️</span>
                <p className="text-white font-bold text-xs uppercase tracking-widest">Secure & Trusted</p>
              </div>
              <p className="text-white/90 text-sm italic leading-relaxed">
                We ensure your data and your pet's information are always safe with us.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
          <div className="max-w-sm mx-auto">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-black text-base-content">Create Account</h2>
              <p className="text-base-content/50 mt-2 text-sm">Fill in the details to get started</p>
            </div>

            <form className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/60 ml-1">Full Name</label>
                <div className="relative">
                  <IoPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-base-content"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/60 ml-1">Photo URL</label>
                <div className="relative">
                  <IoImageOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg" />
                  <input
                    type="text"
                    placeholder="https://image.link"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-base-content"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/60 ml-1">Email Address</label>
                <div className="relative">
                  <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg" />
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-base-content"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/60 ml-1">Password</label>
                <div className="relative">
                  <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3.5 pl-11 pr-11 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-base-content"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/30 cursor-pointer">
                    <IoEyeOffOutline size={18} />
                  </span>
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 mt-2"
              >
                Create Account
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-base-content/10"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
                <span className="bg-white px-4 text-base-content/40">Or register with</span>
              </div>
            </div>

            {/* Google Button */}
            <button className="w-full bg-white border border-base-content/10 text-base-content py-3.5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-secondary/20 transition-all text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google Account
            </button>

            <p className="text-center mt-8 text-sm text-base-content/60">
              Already have an account? {" "}
              <Link href="/login" className="text-primary font-bold hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;