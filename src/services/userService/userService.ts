import {PrismaClient, User} from "@prisma/client";
import {UserResponse} from "@/types/user/user";
import {nanoid} from "nanoid";

const prisma = new PrismaClient();
export default class UserService {
    static _instance: UserService;
    
    public static getInstance() {
        if (UserService._instance) return UserService._instance;
        
        return new UserService();
    }
    
    constructor() {
        if (UserService._instance) return UserService._instance;
        
        UserService._instance = this;
    }
    
    public async getUserById(userId: string): Promise<UserResponse> {
        return prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                responses: {
                    select: {
                        canCome: true,
                        createdAt: true
                    }
                }
            }
        });
    }
    
    public async createUser(): Promise<User> {
        return prisma.user.create({
            data: {
                email: `${nanoid()}@mail.com`,
            }
        })
    }
    
}