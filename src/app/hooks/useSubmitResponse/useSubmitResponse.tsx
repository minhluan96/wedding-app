import React from 'react';
import {useMutation} from "@tanstack/react-query";
import {submitResponse} from "@/app/queries/response";
import {SubmitDataPayload} from "@/types/response/response";

export function useSubmitResponse() {
    const { mutate } = useMutation({
        mutationKey: ['submitResponse'],
        mutationFn: submitResponse
    });
    
    return {
        submit: async (data: SubmitDataPayload) => mutate(data)
    };
}