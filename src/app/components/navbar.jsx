"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import ButtonPage from "./ButtonPage";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY <= 50);
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
      <div className="container mx-auto flex justify-between items-center py-[10px] lg:py-2 px-[20px] lg:px-[120px] h-[70px]">
        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 lg:static">
            <Image src="/Logo.png" alt="Company Logo" width={151} height={51} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-10 text-md font-[inter] uppercase">
          {[
            { name: "Services", href: "/services" },
            { name: "Careers", href: "/careers" },
            { name: "About Us", href: "/about-us" },
            { name: "Contact Us", href: "/connect-us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#A96619] ${
                pathname === link.href ? "text-[#A96619] font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
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
      </div>

      {/* Mobile Menu - Smooth Animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center space-y-6 z-40 transition-transform duration-600 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } ${isTransparent ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-[#131122] transition-transform duration-600 ease-in-out "
        >
          <X size={35} />
        </button>

        {/* Mobile Nav Links */}
        <div className="flex flex-col items-center gap-8 text-md font-[inter] text-[#131122] uppercase">
          {[
            { name: "Services", href: "/services" },
            { name: "Careers", href: "/careers" },
            { name: "About Us", href: "/about-us" },
            { name: "Contact Us", href: "/connect-us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg ${
                pathname === link.href ? "text-[#E08F34] font-bold" : ""
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-between gap-8 items-center mt-12">
          <FaFacebookF size={30} color="#E08F34" />
          <FaLinkedin size={35} color="#E08F34" />
          <FaInstagram size={35} color="#E08F34" />
        </div>
      </div>
    </nav>
  );
}
