export type ResponseData = {
    canCome: boolean;
    data?: string;
}

export type SubmitDataPayload = {
    userId?: string;
    canCome: boolean;
    data?: string;
    token: string;
}

export enum RSVPOption {
    YES = 'YES',
    NO = 'NO'
}