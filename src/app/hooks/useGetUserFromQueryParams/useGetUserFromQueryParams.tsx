'use client'

import React from 'react';
import {useSearchParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {UserResponse} from "@/types/user/user";
import {getUser} from "@/app/queries/user";

export function useGetUserFromQueryParams() {
    const searchParams = useSearchParams();
    const mCode = searchParams.get('m');
    
    const { data } = useQuery<UserResponse>({
        queryKey: ['getUserInfo', mCode],
        queryFn: getUser
    });
    
    return {
        user: data
    };
}