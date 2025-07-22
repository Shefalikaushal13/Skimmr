"use client";

import FileUpload from "./FileUpload";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVideoSuccess = (res: IKUploadResponse) => {
    setVideoUrl(res.url);
  };

  const handleThumbnailSuccess = (res: IKUploadResponse) => {
    setThumbnailUrl(res.url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !videoUrl || !thumbnailUrl) {
      setError("Please fill in all fields and upload video and thumbnail.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Reel created successfully!");
      setTitle("");
      setDescription("");
      setVideoUrl("");
      setThumbnailUrl("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-6">
      <div>
        <label className="block font-medium mb-2 text-white">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded bg-neutral text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter reel title"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-2 text-white">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 rounded bg-neutral text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter reel description"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-2 text-white">Upload Video</label>
        <p className="text-sm text-gray-400 mb-2">Max size: 100MB</p>
        <FileUpload fileType="video" onSuccess={handleVideoSuccess} />
        {videoUrl && (
          <video controls className="mt-2 rounded shadow-md w-full max-h-64">
            <source src={videoUrl} />
          </video>
        )}
      </div>

      <div>
        <label className="block font-medium mb-2 text-white">Upload Thumbnail</label>
        <p className="text-sm text-gray-400 mb-2">Max size: 5MB</p>
        <FileUpload fileType="image" onSuccess={handleThumbnailSuccess} />
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt="Thumbnail Preview"
            className="mt-2 rounded shadow-md w-full max-h-64 object-cover"
          />
        )}
      </div>

      {error && <div className="text-error text-sm">{error}</div>}

      <button
        type="submit"
        className={`bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
          uploading ? "cursor-not-allowed opacity-70" : "hover:scale-105"
        }`}
        disabled={uploading}
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
    </form>
  );
}
