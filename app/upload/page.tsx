"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import VideoUploadForm from "../components/VideoUploadForm";
import { Loader2 } from "lucide-react";

export default function VideoUploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center">
          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-3 text-primary" />
          <p className="text-sm text-base-content/70">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Create Your Reel
            </h1>
            <p className="text-lg text-base-content/70">
              Share your creativity with the world
            </p>
          </div>
          <VideoUploadForm />
        </div>
      </div>
    </div>
  );
}