"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IKVideo } from "imagekitio-next";
import { apiClient } from "@/utils/api-client";
import { IVideo } from "@/models/Video";
import { ArrowLeft, Share2, Heart, MessageCircle, Loader2 } from "lucide-react";
import { useNotification } from "@/app/components/Notifications";

interface VideoPlayerProps {
  videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  const [video, setVideo] = useState<IVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getOneVideo(videoId);
        setVideo(data);
      } catch (error) {
        console.error("Error fetching video:", error);
        setError("Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      fetchVideo();
    }
  }, [videoId]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video?.title,
          text: video?.description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(window.location.href);
      showNotification("Link copied to clipboard!", "success");
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    showNotification(liked ? "Removed from favorites" : "Added to favorites", "success");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center text-white">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-base">Loading video...</p>
        </div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Video not found</h2>
          <p className="text-white/70 mb-4">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="btn btn-primary"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-20 btn btn-circle btn-ghost text-white hover:bg-white/20 backdrop-blur-sm"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Video Container */}
      <div className="relative w-full max-w-sm mx-auto h-screen">
        <IKVideo
          path={video.videoUrl}
          transformation={[
            {
              height: "1920",
              width: "1080",
              quality: "90",
            },
          ]}
          controls={true}
          autoPlay
          loop
          className="w-full h-full object-cover"
        />

        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
          <h1 className="text-xl font-bold mb-2">{video.title}</h1>
          <p className="text-white/80 text-sm mb-4 line-clamp-3">
            {video.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/60">
              {video.createdAt && new Date(video.createdAt).toLocaleDateString()}
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`btn btn-circle btn-ghost text-white hover:bg-white/20 backdrop-blur-sm transition-all ${
                  liked ? "text-red-500" : ""
                }`}
              >
                <Heart className={`w-6 h-6 ${liked ? "fill-current" : ""}`} />
              </button>
              
              <button
                onClick={handleShare}
                className="btn btn-circle btn-ghost text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Share2 className="w-6 h-6" />
              </button>
              
              <button className="btn btn-circle btn-ghost text-white hover:bg-white/20 backdrop-blur-sm">
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}