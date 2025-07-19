import { notFound } from "next/navigation";
import VideoPlayer from "./VideoPlayer";

interface VideoPageProps {
  params: Promise<{ id: string }>;
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <VideoPlayer videoId={id} />
    </div>
  );
}