"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsTransparent(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav
      className={`${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      } fixed w-full top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6 md:px-12 lg:px-20">
        <Link href='/'>
        <div>
          <Image src="/Logo.png" alt="Company Logo" width={151} height={51} />
        </div>
        </Link>

        <div className="hidden lg:flex space-x-10 text-md font-[Inter]  uppercase">
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/careers" className="hover:text-gray-300">
            Careers
          </Link>
          <Link href="/about-us" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/connect-us" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        <div className="hidden lg:block">
          <button
            className="relative flex gap-1 items-center text-[#20973A] py-2 px-4 rounded-lg "
            style={{
              position: "relative",
              background: "transparent", // Keep the inside white
              borderRadius: "12px", // Make sure this is set
              padding: "10px 20px",
            }}
          >
            <span
              className="absolute inset-0 rounded-lg border-0"
              style={{
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "12px",
                padding: "2px", // Border thickness
                background: "linear-gradient(180deg, #326F46 0%, #20973A 100%)",
                WebkitMask:
                  "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              }}
            ></span>
            <Phone size={20} strokeWidth={1.75} color="#20973A" />
            +91 234557786
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden ${
            isTransparent ? "bg-black text-white" : "bg-white text-black"
          } shadow-md py-4 space-y-4 text-center`}
        >
          <Link href="/services" className="block py-2">
            Services
          </Link>
          <Link href="#" className="block py-2">
            Careers
          </Link>
          <Link href="#" className="block py-2">
            About Us
          </Link>
          <Link href="#" className="block py-2">
            Contact Us
          </Link>
          <button className="border-2 border-[#B77624] py-2 px-4 rounded-md w-full">
            8973476298
          </button>
        </div>
      )}
    </nav>
  );
}
