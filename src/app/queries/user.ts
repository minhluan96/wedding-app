import {UserResponse} from "@/types/user/user";
import { API_ENDPOINT } from "@/utils/queries";

export async function getUser({ queryKey }: any): Promise<UserResponse> {
    const [_, id] = queryKey;

    if (!id) return null;

    return (await fetch(`${API_ENDPOINT}/api/user/${id}`).then(async (resp) => {
        const response = await resp.json();
        return response?.data as UserResponse;
    }));
}