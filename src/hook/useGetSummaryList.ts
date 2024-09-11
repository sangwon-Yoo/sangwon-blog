import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/const/queryKey";
import { ResSummaryList } from "@/types/response";

const useGetSummaryList = () => {

    const prefetchedData = useQueryClient().getQueryData<ResSummaryList>([QUERY_KEY.getSummaryList]);

    return useQuery<ResSummaryList | null>({
        queryKey : [QUERY_KEY.getSummaryList],
        queryFn : () => prefetchedData || null,
        retry : false,
        gcTime : Infinity,
        staleTime : Infinity
    });
};

export default useGetSummaryList;