import { useState } from "react";
import { useRouter } from "next/navigation";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import FileUpload from "./FileUpload";
import { apiClient } from "@/utils/api-client";
import { useNotification } from "./Notifications";
import { Upload, Video, Image as ImageIcon, Loader2, Sparkles } from "lucide-react";

export default function VideoUploadForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [thumbnailProgress, setThumbnailProgress] = useState(0);
  
  const router = useRouter();
  const { showNotification } = useNotification();

  const handleVideoUpload = (response: IKUploadResponse) => {
    setVideoUrl(response.url);
    setVideoProgress(0);
  };

  const handleThumbnailUpload = (response: IKUploadResponse) => {
    setThumbnailUrl(response.url);
    setThumbnailProgress(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoUrl || !thumbnailUrl) {
      showNotification("Please upload both video and thumbnail", "error");
      return;
    }

    setUploading(true);
    
    try {
      await apiClient.post("/api/reels", {
        title,
        description,
        videoUrl,
        thumbnailUrl,
      });
      
      showNotification("Reel created successfully!", "success");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating reel:", error);
      showNotification("Failed to create reel", "error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300/50">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Title</span>
            </label>
            <input
              type="text"
              placeholder="Give your reel an amazing title..."
              className="input input-bordered w-full focus:input-primary"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              placeholder="Describe your reel..."
              className="textarea textarea-bordered h-24 resize-none focus:textarea-primary"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Video Upload */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium flex items-center gap-2">
                <Video className="w-4 h-4" />
                Video File
              </span>
            </label>
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
              <div className="text-center mb-4">
                <Video className="w-12 h-12 mx-auto text-primary/60 mb-3" />
                <p className="text-sm text-base-content/70 mb-2">
                  Drag and drop your video file here, or click to browse
                </p>
                <p className="text-xs text-base-content/50">
                  Supports: MP4, MOV, AVI, MKV, WebM (Max: 100MB)
                </p>
              </div>
              <FileUpload
                onSuccess={handleVideoUpload}
                onProgress={setVideoProgress}
              />
              {videoProgress > 0 && videoProgress < 100 && (
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Uploading video...</span>
                    <span>{videoProgress}%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value={videoProgress} max="100"></progress>
                </div>
              )}
              {videoUrl && (
                <div className="alert alert-success mt-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Video uploaded successfully!</span>
                </div>
              )}
            </div>
            </div>
          </div>

          {/* Thumbnail Upload */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                Thumbnail Image
              </span>
            </label>
            <div className="border-2 border-dashed border-secondary/30 rounded-2xl p-8 bg-gradient-to-br from-secondary/5 to-accent/5 hover:from-secondary/10 hover:to-accent/10 transition-all duration-300">
              <div className="text-center mb-4">
                <ImageIcon className="w-12 h-12 mx-auto text-secondary/60 mb-3" />
                <p className="text-sm text-base-content/70 mb-2">
                  Upload a thumbnail for your reel
                </p>
                <p className="text-xs text-base-content/50">
                  Supports: JPEG, PNG, WebP, GIF (Max: 5MB)
                </p>
              </div>
              <FileUpload
                onSuccess={handleThumbnailUpload}
                onProgress={setThumbnailProgress}
              />
              {thumbnailProgress > 0 && thumbnailProgress < 100 && (
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Uploading thumbnail...</span>
                    <span>{thumbnailProgress}%</span>
                  </div>
                  <progress className="progress progress-secondary w-full" value={thumbnailProgress} max="100"></progress>
                </div>
              )}
              {thumbnailUrl && (
                <div className="alert alert-success mt-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Thumbnail uploaded successfully!</span>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-8">
            <button
              type="submit"
              className={`btn btn-primary btn-lg gap-3 shadow-2xl hover:shadow-primary/25 transition-all duration-300 border-0 ${
                uploading ? "loading" : "hover:scale-105"
              }`}
              disabled={uploading || !videoUrl || !thumbnailUrl}
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating Reel...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6" />
                  Create Reel
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}