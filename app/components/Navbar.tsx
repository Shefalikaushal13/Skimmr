'use client';

import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-wide">
          Skimmr
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* About Link */}
          <a
            href="#hero"
            className="px-3 py-2 rounded-lg hover:bg-primary/10 transition"
          >
            About
          </a>

          {/* Contact Link */}
          <a
            href="#contact"
            className="px-3 py-2 rounded-lg hover:bg-primary/10 transition"
          >
            Contact
          </a>

          {/* CTA Button */}
          <Link
            href="/upload"
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-focus transition-all border border-white/10 shadow-lg backdrop-blur-md"
>
            Start Creating
          </Link>



          {/* Avatar */}
          <div className="dropdown dropdown-end ml-4 hidden md:block">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary/10 transition-all cursor-pointer"
            >
              <User className="w-5 h-5 text-white" />
            </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] mt-4 py-3 w-72 rounded-2xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white"
          >
            <li>
              <Link href="/profile" className="px-4 py-2 hover:bg-primary/10 block">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/settings" className="px-4 py-2 hover:bg-primary/10 block">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/logout" className="px-4 py-2 hover:bg-primary/10 block">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-ghost btn-circle hover:bg-primary/10"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white/10 backdrop-blur-md border-t border-white/20">
          <a
            href="#hero"
            className="px-3 py-2 rounded-lg hover:bg-primary/10 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded-lg hover:bg-primary/10 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Link
            href="/upload"
            className="btn btn-primary text-center w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Upload Now
          </Link>
        </div>
      )}
      </div>
    </nav>
  );
}
