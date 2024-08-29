import {useQuery, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEY} from "@/const/queryKey";
import {ResContents} from "@/types/response";
import {getZeroIndexString} from "@/functions/utils";
import {useRouter} from "next/router";
import {QUERY_PARAM} from "@/const/queryParam";

const useGetContents = () => {

    const prefetchedData = useQueryClient().getQueryData<ResContents>([QUERY_KEY.getContents]);
    const router = useRouter();
    const contentsId = getZeroIndexString(router.query[QUERY_PARAM.contentsId]) || '';

    return useQuery<ResContents | null>({
        queryKey : [QUERY_KEY.getContents, contentsId],
        queryFn : () => prefetchedData || null,
        retry : false,
        gcTime : Infinity,
        staleTime : Infinity
    });
};

export default useGetContents;