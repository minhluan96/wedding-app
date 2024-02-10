import {Prisma, User} from "@prisma/client";

type UserWithResponses = Prisma.UserGetPayload<{
    include: {
        responses: true;
    }
}>

export type UserResponse = UserWithResponses | null;