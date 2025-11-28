"use client";


import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <Logo></Logo>
          <p className="mt-2 text-sm">
            Bringing warmth and care to your furry friends
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="footer-title">Shop Address</h3>
          <p className="mt-2 text-sm">
            123 Paw Street<br />
            Dhaka, Bangladesh<br />
            Phone: +880-123-456-789
          </p>
        </div>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <div className="flex flex-col space-y-1">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>

        {/* Subscribe Section */}
        <div>
          <h3 className="footer-title">Subscribe</h3>
          <form className="mt-2 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full sm:w-auto flex-1"
            />
            <button className="btn btn-primary border-0">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-base-300 pt-4 text-center text-sm">
        © {new Date().getFullYear()} PawHaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
