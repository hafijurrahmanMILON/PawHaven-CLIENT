"use client";

import React from "react";
import { 
  IoLocationOutline, 
  IoCallOutline, 
  IoMailOutline, 
  IoTimeOutline, 
  IoWarningOutline, 
  IoSend
} from "react-icons/io5";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-base-content leading-tight">
            We’d Love to Hear <br /> 
            From <span className="text-primary italic">You & Your Pet</span>
          </h1>
          <p className="mt-6 text-base-content/60 text-lg">
            Have questions about our services or need to book a special session? 
            Our pet care experts are here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_100px_rgba(203,153,126,0.12)] border border-primary/5">
            <h2 className="text-3xl font-bold mb-8 text-base-content">
              Send us a <span className="text-primary">Message</span>
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-base-content/50 ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-base-content/50 ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-base-content/50 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-secondary/30 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-base-content/50 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-secondary/30 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-base-content/50 ml-1">Message</label>
                <textarea 
                  placeholder="Tell us about your pet's needs..."
                  className="w-full bg-secondary/30 border-none rounded-2xl py-4 px-6 h-40 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95">
                <IoSend size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5">
              <h3 className="text-2xl font-bold mb-8 text-base-content">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <IoLocationOutline size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-base-content">Visit Our Haven</p>
                    <p className="text-base-content/60 text-sm mt-1 leading-relaxed">
                      123 Pet Street, Barkville, <br /> Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <IoCallOutline size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-base-content">Call Us Directly</p>
                    <p className="text-base-content/60 text-sm mt-1">+880 (555) 123-PAWS</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <IoMailOutline size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-base-content">Email Support</p>
                    <p className="text-base-content/60 text-sm mt-1">hello@pawhaven.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/40 p-10 rounded-[2.5rem] border border-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <IoTimeOutline className="text-primary text-2xl" />
                <h3 className="text-2xl font-bold text-base-content">Store Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: "Mon - Fri", time: "9:00 AM - 8:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
                  { day: "Sunday", time: "Closed", special: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-primary/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-base-content/70 font-medium">{item.day}</span>
                    <span className={`font-bold ${item.special ? 'text-primary' : 'text-base-content'}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-primary p-10 rounded-[2.5rem] relative overflow-hidden shadow-xl shadow-primary/20">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-white/90">
                  <IoWarningOutline size={28} className="animate-pulse" />
                  <h3 className="text-2xl font-bold text-white">Emergency?</h3>
                </div>
                <p className="text-white/80 mb-6 text-sm">
                  For urgent pet care needs after hours, our emergency team is ready.
                </p>
                <p className="text-3xl font-black text-white leading-none">
                  (555) 911-PETS
                </p>
              </div>
              <IoWarningOutline className="absolute -bottom-4 -right-4 text-white/10 w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;