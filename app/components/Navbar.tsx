"use client"

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { Home, User, Upload, Sparkles, Video } from "lucide-react";
import { useNotification } from './Notifications';


export default function Navbar() {

    const {data:session} = useSession();
    const { showNotification } = useNotification();

    const handleSignOut= async () => {
        try {
            await signOut();
            showNotification("Signed out successfully", "success");
        } catch {
            showNotification("Failed to sign out", "error");
        }
    };

    return (
        <nav className="navbar bg-base-100/90 backdrop-blur-xl border-b border-base-300/30 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="navbar-start">
          <Link
            href="/"
            className="btn btn-ghost text-xl gap-2 normal-case font-bold gradient-text hover:scale-105 transition-transform"
            onClick={() => showNotification("Welcome to Skimmr ✨", "info")}
          >
            <div className="relative">
              <Sparkles className="w-7 h-7 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
            </div>
            Skimmr
          </Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link
                href="/"
                className="btn btn-ghost gap-2 hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </li>
            {session && (
              <li>
                <Link
                  href="/upload"
                  className="btn btn-ghost gap-2 hover:bg-secondary/10 hover:text-secondary transition-all"
                >
                  <Upload className="w-4 h-4" />
                  Create
                </Link>
              </li>
            )}
            <li>
              <Link
                href="#"
                className="btn btn-ghost gap-2 hover:bg-accent/10 hover:text-accent transition-all"
              >
                <Video className="w-4 h-4" />
                Discover
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-primary/10 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-72 mt-4 py-3 border border-base-300/50"
            >
              {session ? (
                <>
                  <li className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-base-content">
                          {session.user?.email?.split("@")[0]}
                        </p>
                        <p className="text-xs text-base-content/60">
                          {session.user?.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  <div className="divider my-2"></div>

                  <li className="lg:hidden">
                    <Link
                      href="/"
                      className="px-4 py-3 hover:bg-base-200/50 flex items-center gap-3 rounded-lg mx-2"
                    >
                      <Home className="w-4 h-4 text-primary" />
                      <span>Home</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/upload"
                      className="px-4 py-3 hover:bg-base-200/50 flex items-center gap-3 rounded-lg mx-2"
                      onClick={() =>
                        showNotification("Create your next viral reel! 🎬", "info")
                      }
                    >
                      <Upload className="w-4 h-4 text-secondary" />
                      <span>Create Reel</span>
                    </Link>
                  </li>

                  <li className="lg:hidden">
                    <Link
                      href="#"
                      className="px-4 py-3 hover:bg-base-200/50 flex items-center gap-3 rounded-lg mx-2"
                    >
                      <Video className="w-4 h-4 text-accent" />
                      <span>Discover</span>
                    </Link>
                  </li>

                  <div className="divider my-2"></div>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="px-4 py-3 text-error hover:bg-error/10 flex items-center gap-3 rounded-lg mx-2 w-full text-left"
                    >
                      <User className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="px-4 py-3 hover:bg-base-200/50 flex items-center gap-3 rounded-lg mx-2"
                      onClick={() =>
                        showNotification("Please sign in to continue", "info")
                      }
                    >
                      <User className="w-4 h-4 text-primary" />
                      <span>Sign In</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className="px-4 py-3 hover:bg-base-200/50 flex items-center gap-3 rounded-lg mx-2"
                    >
                      <Sparkles className="w-4 h-4 text-secondary" />
                      <span>Join Skimmr</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}