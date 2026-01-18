"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-secondary/40 pt-20 pb-10 px-6 lg:px-20 border-t border-primary/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform">
              <Logo />
            </Link>
            <p className="text-base-content/70 leading-relaxed max-w-xs">
              Bringing warmth, professional care, and pure joy to your furry family members. Your pet&#39;s happiness is our mission.
            </p>
            <div className="flex gap-4">
              {[IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-base-content relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary/30 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <IoLocationOutline className="text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-base-content/70 text-sm">123 Paw Street, Pet Valley, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 group">
                <IoCallOutline className="text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-base-content/70 text-sm">+880-123-456-789</span>
              </li>
              <li className="flex items-center gap-3 group">
                <IoMailOutline className="text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-base-content/70 text-sm">hello@pawhaven.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:pl-8">
            <h3 className="text-xl font-bold text-base-content relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary/30 rounded-full"></span>
            </h3>
            <ul className="flex flex-col space-y-3">
              {["Terms of use", "Privacy policy", "Cookie policy", "Support Center"].map((link) => (
                <li key={link}>
                  <a className="text-base-content/70 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm flex items-center gap-2 cursor-pointer">
                    <span className="w-1.5 h-1.5 bg-primary/30 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-base-content relative inline-block">
              Join Our Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary/30 rounded-full"></span>
            </h3>
            <p className="text-sm text-base-content/70">Receive pet care tips and special offers directly in your inbox.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-primary/10 rounded-2xl py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-xl hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center"
              >
                <IoMailOutline size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base-content/50 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} <span className="text-primary">PawHaven</span>. Made with 🐾 for pet lovers.
          </p>
          <div className="flex gap-6 text-xs text-base-content/50 font-medium">
            <a className="hover:text-primary cursor-pointer transition-colors">Sitemap</a>
            <a className="hover:text-primary cursor-pointer transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;