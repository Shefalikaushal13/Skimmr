import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";
import { Video } from "lucide-react";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {videos.map((video) => (
        <VideoComponent key={video._id?.toString()} video={video} />
      ))}

      {videos.length === 0 && (
        <div className="col-span-full text-center py-20">
          <Video className="w-16 h-16 mx-auto mb-4 text-base-content/30" />
          <h3 className="text-xl font-semibold mb-2">No reels found</h3>
          <p className="text-base-content/70">Be the first to share an amazing reel!</p>
        </div>
      )}
    </div>
  );
}