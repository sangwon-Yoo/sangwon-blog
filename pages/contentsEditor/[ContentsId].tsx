import {dehydrate, QueryClient} from "@tanstack/react-query";
import {APIInternal} from "@/apiClient/apis";
import {ResContents} from "@/types/response";
import {ENDPOINT} from "@/const/endpoint";
import {GetServerSideProps} from "next";
import {getZeroIndexString} from "@/functions/utils";
import {QUERY_KEY} from "@/const/queryKey";
import useGetContents from "@/hook/useGetContents";
import Contents from "./index";
import {QUERY_PARAM} from "@/const/queryParam";
import ContentsEditor from "./index";

export default function ContentsEditorFromId() {

    return (
        <ContentsEditor isNew={false} />
    );
}


export const getServerSideProps: GetServerSideProps = async ({
                                                                 params,
                                                                 req,
                                                                 query
                                                             }) => {

    const queryClient = new QueryClient();
    const contentsId = getZeroIndexString(params?.ContentsId) || '';

    await queryClient.prefetchQuery({
        queryKey : [QUERY_KEY.getContents, contentsId],
        queryFn : () => APIInternal<ResContents>({
            url : `${process.env.NEXT_PUBLIC_HOST}${ENDPOINT.getContents}?${QUERY_PARAM.contentsSummaryId}=${contentsId}`
        }),
    });

    // For Remix:
    // return json({ dehydratedState: dehydrate(queryClient) })
    return { props: { dehydratedState: dehydrate(queryClient) } }
}