// ++ Blog API 공통 returnData only
import { InternalResponseDTO } from "@/types/response";
import { baseFetch, baseFetchArgs } from "@/apiClient/baseFetch";
import { isEmptyObj } from "@/functions/utils";

export async function APIInternal<TresData>(baseFetchArgs: baseFetchArgs) {

    let response: InternalResponseDTO<TresData> | null = null;

    try {
        response = await baseFetch<InternalResponseDTO<TresData>>(baseFetchArgs);
        if(isEmptyObj(response) || response.returnCode != '00') {
            throw new Error(response.errorMessage || 'Unknown Error');
        }
        return response.returnData;

    } catch (e) {
        console.error(e);
        throw e;
    }
}
// --