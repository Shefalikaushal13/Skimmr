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
      <div className="hero min-h-[80vh] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-50`}></div>
        
        <div className="hero-content text-center z-10">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Sparkles className="w-16 h-16 text-primary animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-bounce"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skimmr
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-base-content/80 max-w-2xl mx-auto leading-relaxed">
              Create, share and discover amazing video reels. 
              <span className="text-primary font-semibold"> Your creativity, amplified.</span>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Video className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">{videos.length}+</span>
                </div>
                <p className="text-sm text-base-content/60">Reels Created</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-2xl font-bold text-secondary">∞</span>
                </div>
                <p className="text-sm text-base-content/60">Possibilities</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-accent">Growing</span>
                </div>
                <p className="text-sm text-base-content/60">Community</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {session ? (
                <Link 
                  href="/upload" 
                  className="btn btn-primary btn-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Sparkles className="w-5 h-5" />
                  Create Your Reel
                </Link>
              ) : (
                <>
                  <Link 
                    href="/register" 
                    className="btn btn-primary btn-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="w-5 h-5" />
                    Get Started
                  </Link>
                  <Link 
                    href="/login" 
                    className="btn btn-outline btn-lg gap-3 hover:shadow-lg transition-all duration-300"
                  >
                    <Play className="w-5 h-5" />
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
          <h2 className="text-4xl font-bold mb-4 text-base-content">Latest Reels</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover amazing content from our community
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="text-center py-20 bg-base-100 rounded-3xl shadow-sm">
            <div className="relative inline-block mb-6">
              <Video className="w-20 h-20 mx-auto text-base-content/30" />
              <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-4">No reels yet</h3>
            <p className="text-base-content/70 mb-8 text-lg max-w-md mx-auto">
              Be the first to share an amazing reel!
            </p>
            <Link href={session ? "/upload" : "/register"} className="btn btn-primary btn-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300">
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
