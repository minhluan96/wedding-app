import {GalleryInfo} from "@/types/gallery/gallery";
import {API_ENDPOINT} from "@/utils/queries";

export async function getGallery(): Promise<GalleryInfo[]> {
    return (await fetch(`${API_ENDPOINT}/api/gallery`).then((resp) => resp.json())) as GalleryInfo[];
}