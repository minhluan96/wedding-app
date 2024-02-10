import {useGetUserFromQueryParams} from "@/app/hooks/useGetUserFromQueryParams/useGetUserFromQueryParams";
import moment from "moment";
import {RSVPOption} from "@/types/response/response";

export function useGetUserResponse() {
    const { user } = useGetUserFromQueryParams();
    if (!user) return null;
    
    const { responses } = user;
    if (!responses?.length) return null;

    const sortedResponses = responses.sort((response1, response2) => {
        return moment(response1.createdAt).diff(response2.createdAt);
    });
    
    const lastResponse = sortedResponses[sortedResponses.length - 1];
    return lastResponse?.canCome ? RSVPOption.YES : RSVPOption.NO;
}