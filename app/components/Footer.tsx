'use client';

import { Mail } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiPeerlist } from "react-icons/si";
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="w-full bg-black/30 backdrop-blur-md text-white border-t border-white/20 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
          <Link
            href="mailto:shefali2404kaushal@gmail.com"
            className="flex items-center gap-2 text-sm hover:underline"
          >
            <Mail className="w-4 h-4" /> shefali2404kaushal@gmail.com
          </Link>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect!</h3>
          <div className="flex gap-4 items-center">
            <Link
              href="https://www.linkedin.com/in/shefalikaushal/"
              target="_blank"
              className="hover:text-primary transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com/shefaliu_u"
              target="_blank"
              className="hover:text-primary transition"
            >
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://peerlist.io/shefalikaushal"
              target="_blank"
              className="hover:text-primary transition"
            >
              <SiPeerlist className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Made with love */}
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right gap-2">
          <p className="text-sm md:text-base">
            Made with <span className="text-red-500">❤️</span> by <span className="font-bold">Shefali Kaushal</span>
          </p>
          <p className="text-xs text-gray-400">
            © {year} Skimmr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
