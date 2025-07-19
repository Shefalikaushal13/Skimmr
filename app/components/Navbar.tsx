<<<<<<< HEAD
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
        <div className="navbar bg-base-100/95 backdrop-blur-md border-b border-base-300/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex-1 px-2 lg:flex-none">
          <Link
            href="/"
            className="btn btn-ghost text-xl gap-2 normal-case font-bold text-primary hover:text-primary-focus"
            prefetch={true}
            onClick={() =>
              showNotification("Welcome to Skimmr ✨", "info")
            }
          >
            <Sparkles className="w-6 h-6" />
            Skimmr
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex flex-none gap-2">
          <Link
            href="/"
            className="btn btn-ghost gap-2 text-sm"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          {session && (
            <Link
              href="/upload"
              className="btn btn-ghost gap-2 text-sm"
            >
              <Upload className="w-4 h-4" />
              Create
            </Link>
          )}
        </div>
        
        <div className="flex flex-1 justify-end px-2">
          <div className="flex items-stretch gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hover:bg-primary/10"
              >
                <User className="w-5 h-5 text-primary" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] shadow-xl bg-base-100 rounded-box w-64 mt-4 py-2 border border-base-300"
              >
                {session ? (
                  <>
                    <li className="px-4 py-1">
                      <span className="text-sm text-base-content/70 font-medium">
                        {session.user?.email?.split("@")[0]}
                      </span>
                    </li>
                    <div className="divider my-1"></div>

                    <li className="md:hidden">
                      <Link
                        href="/"
                        className="px-4 py-2 hover:bg-base-200 block w-full flex items-center gap-2"
                      >
                        <Home className="w-4 h-4" />
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/upload"
                        className="px-4 py-2 hover:bg-base-200 block w-full flex items-center gap-2"
                        onClick={() =>
                          showNotification("Create your next viral reel! 🎬", "info")
                        }
                      >
                        <Upload className="w-4 h-4" />
                        Create Reel
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-error hover:bg-error/10 w-full text-left flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      className="px-4 py-2 hover:bg-base-200 block w-full flex items-center gap-2"
                      onClick={() =>
                        showNotification("Please sign in to continue", "info")
                      }
                    >
                      <User className="w-4 h-4" />
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
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
        <div className="navbar bg-base-100/95 backdrop-blur-md border-b border-base-300/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex-1 px-2 lg:flex-none">
          <Link
            href="/"
            className="btn btn-ghost text-xl gap-2 normal-case font-bold text-primary hover:text-primary-focus"
            prefetch={true}
            onClick={() =>
              showNotification("Welcome to Skimmr ✨", "info")
            }
          >
            <Sparkles className="w-6 h-6" />
            Skimmr
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex flex-none gap-2">
          <Link
            href="/"
            className="btn btn-ghost gap-2 text-sm"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          {session && (
            <Link
              href="/upload"
              className="btn btn-ghost gap-2 text-sm"
            >
              <Upload className="w-4 h-4" />
              Create
            </Link>
          )}
        </div>
        
        <div className="flex flex-1 justify-end px-2">
          <div className="flex items-stretch gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hover:bg-primary/10"
              >
                <User className="w-5 h-5 text-primary" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] shadow-xl bg-base-100 rounded-box w-64 mt-4 py-2 border border-base-300"
              >
                {session ? (
                  <>
                    <li className="px-4 py-1">
                      <span className="text-sm text-base-content/70 font-medium">
                        {session.user?.email?.split("@")[0]}
                      </span>
                    </li>
                    <div className="divider my-1"></div>

                    <li className="md:hidden">
                      <Link
                        href="/"
                        className="px-4 py-2 hover:bg-base-200 block w-full flex items-center gap-2"
                      >
                        <Home className="w-4 h-4" />
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/upload"
                        className="px-4 py-2 hover:bg-base-200 block w-full flex items-center gap-2"
                        onClick={() =>
                          showNotification("Create your next viral reel! 🎬", "info")
                        }
                      >
                        <Upload className="w-4 h-4" />
                        Create Reel
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-error hover:bg-error/10 w-full text-left flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      className="px-4 py-2 hover:bg-base-200 block w-full flex items-center gap-2"
                      onClick={() =>
                        showNotification("Please sign in to continue", "info")
                      }
                    >
                      <User className="w-4 h-4" />
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cefe7925a244401ac554d2050004a513206aeda7
