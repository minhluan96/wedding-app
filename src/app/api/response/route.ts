import {NextResponse} from "next/server";
import ResponseService from "@/services/responseService/responseService";
import AuthService from "@/services/authService/authService";

type CreateResponseRequestPayload = {
    userId?: string;
    canCome: boolean;
    data: string;
}

export async function POST(request: Request) {
    const body: CreateResponseRequestPayload = await request.json();
    const { userId } = body;
    
    if (!!userId) {
        await ResponseService.getInstance().createUserResponse({
            userId,
            ...body,
        });
    } else {
        await ResponseService.getInstance().createAnonymousUserResponse(body);
    }
    
    return new Response(null, {
        status: 204,
    })
}