import ResponseService from "@/services/responseService/responseService";
import { NextResponse } from "next/server";

type ResponseParams = {
    params: {
        id: string;
    }
}

type CreateResponseRequestPayload = {
    canCome: boolean;
    data: string;
}

export async function GET(_: Request, { params }: ResponseParams) {
    const userId = params.id;
    
    const responseService = ResponseService.getInstance();
    const responses = await responseService.getAllResponsesByUserId(userId);
    
    return NextResponse.json({
        data: responses
    });
}

export async function POST(request: Request, { params }: ResponseParams) {
    const body: CreateResponseRequestPayload = await request.json();
    const userId = params?.id;
    
    const response = await ResponseService.getInstance().createUserResponse({ userId, ...body });
    
    return NextResponse.json({
        data: response,
    })
}
