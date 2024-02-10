import {prisma} from "@/utils/prisma";
import {ResponseData} from "@/types/response/response";
import UserService from "@/services/userService/userService";
import {User} from "@prisma/client";

export default class ResponseService {
    static _instance: ResponseService;
    
    public static getInstance() {
        if (ResponseService._instance) return ResponseService._instance;
        
        return new ResponseService();
    }
    
    constructor() {
        if (ResponseService._instance) return ResponseService._instance;
        
        ResponseService._instance = this;
    }
    
    public async getAllResponsesByUserId(userId: string): Promise<ResponseData[]> {
        const responses = await prisma.response.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        
        return responses.map((item) => {
            return {
                canCome: item.canCome,
                data: item.data?.toString()
            }
        })
    }
    
    public async createUserResponse({ userId, canCome, data }: { userId: string, canCome: boolean, data?: string }): Promise<any> {
        const user = await UserService.getInstance().getUserById(userId) as User;
        return prisma.response.create({
            data: {
                canCome,
                data: data,
                fromUser: {
                    connect: {
                        id: user.id!,
                    }
                }
            } as any
        });
    }
    
    public async createAnonymousUserResponse(payload: any) {
        const user = await UserService.getInstance().createUser();
        return this.createUserResponse({ userId: user.id, ...payload });
    }
}