import {API_ENDPOINT} from "@/utils/queries";
import {SubmitDataPayload} from "@/types/response/response";

export async function submitResponse({ token, userId, canCome, data }: SubmitDataPayload): Promise<any> {
    return (await fetch(`${API_ENDPOINT}/api/response`, {
        method: 'POST',
        body: JSON.stringify({ userId, canCome, data }),
        headers: {
            token
        }
    }).then((resp) => resp.json()));
}