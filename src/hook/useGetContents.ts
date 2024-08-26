import {useQuery, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEY} from "@/const/queryKey";
import {APIInternal} from "@/apiClient/apis";
import {ResContents} from "@/types/response";
import {ENDPOINT} from "@/const/endpoint";
import {getZeroIndexString} from "@/functions/utils";

const useGetContents = () => {

    const prefetchedData = useQueryClient().getQueryData<ResContents>([QUERY_KEY.getContents]);

    return useQuery<ResContents | null>({
        queryKey : [QUERY_KEY.getContents],
        queryFn : () => prefetchedData || null,
        retry : false,
        gcTime : Infinity,
        staleTime : Infinity
    });
};

export default useGetContents;