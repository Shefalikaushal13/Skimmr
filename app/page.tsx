"use client";

import { IVideo } from "@/models/Video";
import { apiClient } from "@/utils/api-client";
import { useEffect, useState } from "react";
import VideoFeed from "./components/VideoFeed";
import { Loader2, Video, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-lg">Loading amazing reels...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
      <div className="hero bg-gradient-to-br from-primary to-secondary text-primary-content py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 mr-3" />
              <h1 className="text-5xl font-bold">Skimmr</h1>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Create and share amazing video reels with AI-powered features
            </p>
            <Link href="/upload" className="btn btn-accent btn-lg gap-2">
              <Video className="w-5 h-5" />
              Create Your First Reel
            </Link>
          </div>
        </div>
      </div>

      {/* Video Feed Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Latest Reels</h2>
          <p className="text-base-content/70">
            Discover amazing content from our community
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="text-center py-20">
            <Video className="w-20 h-20 mx-auto mb-6 text-base-content/30" />
            <h3 className="text-2xl font-bold mb-2">No reels yet</h3>
            <p className="text-base-content/70 mb-6">
              Be the first to share an amazing reel!
            </p>
            <Link href="/upload" className="btn btn-primary gap-2">
              <Video className="w-5 h-5" />
              Upload First Reel
            </Link>
          </div>
        ) : (
          <VideoFeed videos={videos} />
        )}
      </div>
    </div>
  );
}
