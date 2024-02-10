'use client'

import {useQuery} from "@tanstack/react-query";
import {GalleryInfo} from "@/types/gallery/gallery";
import {getGallery} from "@/app/queries/gallery";

export function useGetImages(): UseGetImagesOutput {
    const { data } = useQuery<GalleryInfo[]>({
        queryKey: ['getGallery'],
        queryFn: getGallery,
        staleTime: 5 * 1000,
    });
    
    return {
        images: data ?? []
    }
}

type UseGetImagesOutput = {
    images: GalleryInfo[];
}