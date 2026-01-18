"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonAddOutline,
} from "react-icons/io5";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(document.cookie.includes("auth=true"));
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=false; path=/;max-age=0";
    setIsLoggedIn(false);
    router.push("/");
    toast.success('logout successful')
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">All Products</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
      {isLoggedIn && (
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-[100] backdrop-blur-md bg-secondary/40 py-4  px-4 md:px-12 lg:px-20 transition-all duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-primary/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-4 w-60 p-4 shadow-2xl border border-primary/5 gap-2"
          >
            {links}
          </ul>
        </div>

        <Link
          href="/"
          className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          <Logo />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end">
        {/* <div className="flex items-center gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1 transition-all hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-full p-0.5">
            <Image
              className="w-11 h-11 rounded-full border-2 border-primary object-cover shadow-md"
              referrerPolicy="no-referrer"
              src={user?.photoURL || userImg}
              alt="user"
            />
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100/95 backdrop-blur-xl rounded-2xl z-[100] w-72 p-5 shadow-2xl border border-primary/10 space-y-4 mt-3">
            <div className="text-center pb-3 border-b border-base-200">
              <h1 className="text-primary font-bold text-lg truncate">{user.displayName}</h1>
              <h1 className="text-xs opacity-60 truncate">{user.email}</h1>
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-primary btn-md w-full rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              <IoLogOutOutline className="text-xl" />
              Log out
            </button>
          </ul>
        </div>
      </div> */}
        {isLoggedIn ? (
          <div>
            {" "}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm md:text-md py-2 px-5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
            >
              <IoLogOutOutline />
              Logout
            </button>{" "}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm md:text-md py-2 px-5 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
            >
              <IoLogInOutline className="text-xl" />
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
