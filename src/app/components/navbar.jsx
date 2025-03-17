'use client'

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-6 md:px-12 lg:px-20">
        <div>
          <Image src="/Logo.png" alt="Company Logo" width={151} height={51} />
        </div>

        <div className="hidden md:flex space-x-10 text-lg font-[Inter]">
          <Link href="#" className="hover:text-gray-700">Services</Link>
          <Link href="#" className="hover:text-gray-700">Careers</Link>
          <Link href="#" className="hover:text-gray-700">About Us</Link>
          <Link href="#" className="hover:text-gray-700">Contact Us</Link>
        </div>

        <div className="hidden md:block">
          <button className="border-2 border-[#B77624] py-2 px-4 rounded-md">
            8973476298
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 space-y-4 text-center">
          <Link href="#" className="block py-2">Services</Link>
          <Link href="#" className="block py-2">Careers</Link>
          <Link href="#" className="block py-2">About Us</Link>
          <Link href="#" className="block py-2">Contact Us</Link>
          <button className="border-2 border-[#B77624] py-2 px-4 rounded-md w-full">
            8973476298
          </button>
        </div>
      )}
    </nav>
  );
}
