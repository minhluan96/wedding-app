import S3Service from "@/services/S3Service/S3Service";
import {GalleryInfo} from "@/types/gallery/gallery";

export default class GalleryService {
    static _instance: GalleryService;
    
    public static getInstance() {
        if (GalleryService._instance) return GalleryService._instance;
        
        return new GalleryService()
    }
    
    constructor() {
        if (GalleryService._instance) return GalleryService._instance;
        
        GalleryService._instance = this;
    }
    
    public async getImageUrl(imageName: string): Promise<string> {
        return await S3Service.getInstance().getObjectURL(imageName);
    }
    
    public async listAllImageURL(): Promise<GalleryInfo[]> {
        const { Contents } = await S3Service.getInstance().listAllObjects();
        if (!Contents?.length) return [];
        
        const images = Contents.map(({ Key }) => Key as string);
        
        return Promise.all(images.map(async (item) => {
            const url = await this.getImageUrl(item);
            
            return {
                label: item,
                url,
            } as GalleryInfo
        }))
    }
}