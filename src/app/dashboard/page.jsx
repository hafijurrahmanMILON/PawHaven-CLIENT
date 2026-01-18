"use client";

import { useEffect, useState } from "react";
import { 
  IoLayersOutline, 
  IoTicketOutline, 
  IoPricetagOutline, 
  IoStatsChartOutline,
  IoChevronForwardOutline,
  IoPawOutline
} from "react-icons/io5";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await fetch(
        "https://paw-haven-server-livid.vercel.app/dashboard"
      );
      const data = await res.json();
      setStats(data);
    };

    fetchDashboard();
  }, []);

  if (!stats) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6]">
        <span className="loading loading-infinity loading-lg text-primary scale-150"></span>
        <p className="mt-4 text-primary font-bold animate-pulse">Analyzing PawHaven Stats...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-black text-base-content tracking-tight flex items-center gap-3">
              Admin <span className="text-primary italic">Dashboard</span>
              <IoPawOutline className="text-primary/20" />
            </h1>
            <p className="text-base-content/50 mt-1 font-medium">Real-time overview of your pet care empire.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-primary/5 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Live Updates</span>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Total Services Card */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(203,153,126,0.1)] border border-primary/5 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 relative z-10">
              <IoLayersOutline size={28} />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-base-content/40 relative z-10">Total Services</h2>
            <p className="text-4xl font-black text-base-content mt-2 relative z-10">{stats.totalServices}</p>
          </div>

          {/* Available Slots Card */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(203,153,126,0.1)] border border-primary/5 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-14 h-14 bg-secondary/50 rounded-2xl flex items-center justify-center text-primary mb-6 relative z-10">
              <IoTicketOutline size={28} />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-base-content/40 relative z-10">Available Slots</h2>
            <p className="text-4xl font-black text-base-content mt-2 relative z-10">{stats.totalSlots}</p>
          </div>

          {/* Average Price Card */}
          <div className="bg-primary p-8 rounded-[2.5rem] shadow-xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10">
              <IoPricetagOutline size={28} />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/60 relative z-10">Average Price</h2>
            <p className="text-4xl font-black text-white mt-2 relative z-10">${stats.averagePrice}</p>
          </div>
        </div>

        {/* Detailed Section: Categories */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-primary/5">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-primary">
              <IoStatsChartOutline size={22} />
            </div>
            <h2 className="text-2xl font-black text-base-content italic">Services by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {Object.entries(stats.categories).map(([cat, count]) => (
              <div key={cat} className="group cursor-default">
                <div className="flex justify-between items-end mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg font-bold text-base-content/80 group-hover:text-primary transition-colors">{cat}</span>
                  </div>
                  <span className="text-2xl font-black text-primary">{count}</span>
                </div>
                {/* Custom Progress Bar Style */}
                <div className="w-full h-3 bg-secondary/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(count / stats.totalServices) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Decoration Footer */}
          <div className="mt-16 pt-8 border-t border-dashed border-primary/10 flex justify-center">
             <button className="text-xs font-bold uppercase tracking-widest text-primary hover:tracking-[0.2em] transition-all flex items-center gap-2">
               View Full Category Report <IoChevronForwardOutline />
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}