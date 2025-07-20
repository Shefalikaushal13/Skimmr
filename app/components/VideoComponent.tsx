import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import { IVideo } from "@/models/Video";
import { Play, Eye } from "lucide-react";

export default function VideoComponent({ video }: { video: IVideo }) {
  return (
    <div className="card bg-base-100/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-base-300/30 hover:border-primary/50 hover:scale-[1.02] group">
      <figure className="relative">
        <Link href={`/videos/${video._id}`} className="relative group block w-full">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "9/16" }}
          >
            <IKVideo
              path={video.videoUrl}
              transformation={[
                {
                  height: "500",
                  width: "350",
                  quality: 100,
                },
              ]}
              controls={false}
              muted
              loop
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <div className="bg-gradient-to-r from-primary to-secondary backdrop-blur-sm rounded-full p-5 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            
            {/* Video duration badge */}
            <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
              <Eye className="w-3 h-3 inline mr-1" />
              Reel
            </div>
          </div>
        </Link>
      </figure>

      <div className="card-body p-5 pb-6">
        <Link
          href={`/videos/${video._id}`}
          className="hover:text-primary transition-colors"
        >
          <h2 className="card-title text-lg font-bold line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {video.title}
          </h2>
        </Link>

        <p className="text-sm text-base-content/70 line-clamp-3 mt-3 leading-relaxed">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between mt-5 pt-3 border-t border-base-200/50">
          <div className="text-xs text-base-content/50">
            {video.createdAt && new Date(video.createdAt).toLocaleDateString()}
          </div>
          <Link
            href={`/videos/${video._id}`}
            className="btn btn-primary btn-sm gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 border-0"
          >
            <Play className="w-4 h-4" />
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
}