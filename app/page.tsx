"use client";

import { IVideo } from "@/models/Video";
import { apiClient } from "@/utils/api-client";
import { useEffect, useState } from "react";
import VideoFeed from "./components/VideoFeed";
import { Loader2, Video, Sparkles, Play, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos", error);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-base text-base-content/70">Loading amazing reels...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center">
          <Video className="w-16 h-16 mx-auto mb-4 text-error" />
          <h2 className="text-2xl font-bold mb-2">Oops!</h2>
          <p className="text-base-content/70 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero min-h-[85vh] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        {/* Background Pattern */}
<<<<<<< HEAD
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-50`}></div>
=======
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23a855f7" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-pulse delay-500"></div>
>>>>>>> cefe7925a244401ac554d2050004a513206aeda7
        
        <div className="hero-content text-center z-10">
          <div className="max-w-5xl px-4">
            <div className="flex items-center justify-center mb-10">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl">
                  <Sparkles className="w-10 h-10 text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Skimmr
            </h1>
            
            <p className="text-xl md:text-3xl mb-4 text-base-content/90 max-w-3xl mx-auto leading-relaxed font-light">
              Create, share and discover 
              <span className="gradient-text font-semibold"> amazing video reels</span>
            </p>
            
            <p className="text-lg md:text-xl mb-12 text-base-content/70 max-w-2xl mx-auto">
              Your creativity, amplified. Join the next generation of content creators.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 mb-16">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{videos.length}+</div>
                <p className="text-sm text-base-content/60 font-medium">Reels Created</p>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-all">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-1">∞</div>
                <p className="text-sm text-base-content/60 font-medium">Possibilities</p>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-all">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-accent mb-1">Growing</div>
                <p className="text-sm text-base-content/60 font-medium">Community</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {session ? (
                <Link 
                  href="/upload" 
                  className="btn btn-primary btn-lg gap-3 px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-0"
                >
                  <Upload className="w-6 h-6" />
                  Create Your Reel
                </Link>
              ) : (
                <>
                  <Link 
                    href="/register" 
                    className="btn btn-primary btn-lg gap-3 px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-0"
                  >
                    <Sparkles className="w-6 h-6" />
                    Get Started
                  </Link>
                  <Link 
                    href="/login" 
                    className="btn btn-outline btn-lg gap-3 px-8 py-4 text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-6 h-6" />
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Feed Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Latest Reels</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover amazing content from our community
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="text-center py-20 bg-base-100/50 backdrop-blur-sm rounded-3xl shadow-xl border border-base-300/30">
            <div className="relative inline-block mb-6">
              <Video className="w-20 h-20 mx-auto text-base-content/30" />
              <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-4">No reels yet</h3>
            <p className="text-base-content/70 mb-8 text-lg max-w-md mx-auto">
              Be the first to share an amazing reel!
            </p>
            <Link href={session ? "/upload" : "/register"} className="btn btn-primary btn-lg gap-3 shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 border-0">
              <Sparkles className="w-5 h-5" />
              {session ? "Create First Reel" : "Join Skimmr"}
            </Link>
          </div>
        ) : (
          <VideoFeed videos={videos} />
        )}
      </div>
    </div>
  );
}
