<<<<<<< HEAD
import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import { IVideo } from "@/models/Video";
import { Play, Eye } from "lucide-react";

export default function VideoComponent({ video }: { video: IVideo }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-base-300/50 hover:border-primary/30">
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
                  height: "400",
                  width: "300",
                  quality: 100,
                },
              ]}
              controls={false}
              muted
              loop
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
            
            {/* Video duration badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              <Eye className="w-3 h-3 inline mr-1" />
              Reel
            </div>
          </div>
        </Link>
      </figure>

      <div className="card-body p-4 pb-6">
        <Link
          href={`/videos/${video._id}`}
          className="hover:text-primary transition-colors"
        >
          <h2 className="card-title text-lg font-bold line-clamp-2 leading-tight">
            {video.title}
          </h2>
        </Link>

        <p className="text-sm text-base-content/70 line-clamp-3 mt-2">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between mt-4 pt-2 border-t border-base-200">
          <div className="text-xs text-base-content/50">
            {video.createdAt && new Date(video.createdAt).toLocaleDateString()}
          </div>
          <Link
            href={`/videos/${video._id}`}
            className="btn btn-primary btn-sm gap-1 hover:scale-105 transition-transform"
          >
            <Play className="w-3 h-3" />
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
=======
import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import { IVideo } from "@/models/Video";
import { Play, Eye } from "lucide-react";

export default function VideoComponent({ video }: { video: IVideo }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-base-300/50 hover:border-primary/30">
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
                  height: "400",
                  width: "300",
                  quality: "80",
                },
              ]}
              controls={false}
              muted
              loop
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
            
            {/* Video duration badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              <Eye className="w-3 h-3 inline mr-1" />
              Reel
            </div>
          </div>
        </Link>
      </figure>

      <div className="card-body p-4 pb-6">
        <Link
          href={`/videos/${video._id}`}
          className="hover:text-primary transition-colors"
        >
          <h2 className="card-title text-lg font-bold line-clamp-2 leading-tight">
            {video.title}
          </h2>
        </Link>

        <p className="text-sm text-base-content/70 line-clamp-3 mt-2">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between mt-4 pt-2 border-t border-base-200">
          <div className="text-xs text-base-content/50">
            {video.createdAt && new Date(video.createdAt).toLocaleDateString()}
          </div>
          <Link
            href={`/videos/${video._id}`}
            className="btn btn-primary btn-sm gap-1 hover:scale-105 transition-transform"
          >
            <Play className="w-3 h-3" />
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
>>>>>>> cefe7925a244401ac554d2050004a513206aeda7
}