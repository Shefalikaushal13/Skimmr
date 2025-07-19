import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";
import { Sparkles, Video } from "lucide-react";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {videos.map((video) => (
        <VideoComponent key={video._id?.toString()} video={video} />
      ))}

      {videos.length === 0 && (
        <div className="col-span-full text-center py-20 bg-base-100 rounded-3xl shadow-sm">
          <div className="relative inline-block mb-6">
            <Video className="w-16 h-16 mx-auto text-base-content/30" />
            <Sparkles className="w-6 h-6 text-primary absolute -top-1 -right-1 animate-pulse" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">No reels found</h3>
          <p className="text-base-content/70 text-lg">Be the first to share an amazing reel!</p>
        </div>
      )}
    </div>
  );
}