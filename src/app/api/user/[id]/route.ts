import {NextResponse} from "next/server";
import UserService from "@/services/userService/userService";

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const userId = params.id;
    const userService = UserService.getInstance();

    const user = await userService.getUserById(userId);
    
    return NextResponse.json({
        data: user
    });
}