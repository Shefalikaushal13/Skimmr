//centralised code for frontend calls

import { IVideo } from "@/models/Video";

export type VideoFormData= Omit<IVideo,"_id">

type FetchOptions={
    method?: "GET" | "POST" | "DELETE" | "PUT";
    body?: any,
    headers?: Record<string,string>
}

class ApiClient {
    private async fetch<T>(
        endpoint: string,
        options:FetchOptions ={}
    ): Promise<T>{
        const {method="GET",body,headers={}} = options

        const defaulHeaders={
            "Cotent-Type": "application/json",
            ...headers
        }

        const response= await fetch(`/api${endpoint}`,{
            method,
            headers: defaulHeaders,
            body: body? JSON.stringify(body):undefined
        })
        
        if(!response.ok){
            throw new Error("await response.text()");
        }
        return response.json()

    }

    async getVideos(){
        return this.fetch<IVideo[]>("/videos")
    }

    async getOneVideo(id:string) {
        return this.fetch<IVideo>(`/videos/${id}`)
    }

    async createVideo(videoData: VideoFormData){
        return this.fetch("/videos",{
            method:"POST",
            body:videoData
        })
    }
}

export const apiClient = new ApiClient()