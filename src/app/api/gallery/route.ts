import {NextResponse} from "next/server";
import GalleryService from "@/services/galleryService/galleryService";

export async function GET(request: Request) {
    const info = await GalleryService.getInstance().listAllImageURL();
    
    return NextResponse.json(info)
}
