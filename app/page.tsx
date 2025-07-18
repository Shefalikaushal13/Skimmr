"use client"
import { IVideo } from "@/models/Video";
import { apiClient } from "@/utils/api-client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const[videos,setVideos] = useState<IVideo[]>([])

  useEffect(()=>{
    const fetchVideos=async()=>{
      try {
        const data= await apiClient.getVideos()
        setVideos(data)
      } catch (error) {
        console.error("Error fetching videos",error)
      }
    }

    fetchVideos()
  }, [])

  return (
    <div>
      <h1>Skimmr</h1>
    </div>
  );
}
