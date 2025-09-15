'use client'
import React, { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link"; 

function Navbar() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHome(window.scrollY > 1000); // changed from 900 → 2000
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
  
      {showHome && (
        <div className="fixed top-6 left-6 z-100">
          <Link href="/" passHref>
            <button
              className="w-12 h-12 flex items-center justify-center
                rounded-full bg-zinc-900/40 backdrop-blur-md
                border border-white/20 shadow-lg
                text-zinc-100 hover:text-zinc-900 hover:bg-zinc-100
                transition duration-200 ease-in-out"
            >
              <ArrowUpRight size={22} />
            </button>
          </Link>
        </div>
      )}

    
      <div className="navbar fixed top-6 left-1/2 -translate-x-1/2 z-40 
        w-[23%] max-w-screen-xl p-2 flex items-center justify-center
        rounded-2xl font-oswald 
        backdrop-blur-lg bg-zinc-900/30 border border-white/20 shadow-lg">

        <div className="flex items-center gap-8 text-zinc-100">
          {["Skills", "Works", "About"].map((item, index) => (
            <a
              key={index}
              data-scroll-to={`#${item.toLowerCase()}`}
              className="text-xl capitalize font-light tracking-tight 
                hover:text-zinc-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}

          <Link href="/Contact" passHref>
            <button className="text-xl hover:text-zinc-400 capitalize font-light tracking-tight 
              text-zinc-100 transition duration-200 ease-in-out rounded-2xl cursor-pointer">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
