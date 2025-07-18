import { useState } from "react";
import { useRouter } from "next/navigation";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import FileUpload from "./FileUpload";
import { apiClient } from "@/utils/api-client";
import { useNotification } from "./Notifications";
import { Upload, Video, Image as ImageIcon, Loader2 } from "lucide-react";

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

}