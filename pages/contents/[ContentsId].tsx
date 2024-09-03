import {dehydrate, QueryClient} from "@tanstack/react-query";
import {APIInternal} from "@/apiClient/apis";
import {ResContents} from "@/types/response";
import {ENDPOINT} from "@/const/endpoint";
import {GetServerSideProps} from "next";
import {escapeHtml, getZeroIndexString} from "@/functions/utils";
import {QUERY_KEY} from "@/const/queryKey";
import useGetContents from "@/hook/useGetContents";
import {QUERY_PARAM} from "@/const/queryParam";
import Top from "@/components/top";
import {StyledLayoutFlex, StyledLayoutFlexItem} from "@/design-system/module/Layout";
import {StyledWrapper} from "@/design-system/module/Wrapper";
import ShowRepresentImg from "@/features/showContents/showRepresentImg";
import ShowCategory from "@/features/showContents/showCategory";
import ShowTitle from "@/features/showContents/showTitle";
import ShowSubTitle from "@/features/showContents/showSubTitle";
import ShowMidBox from "@/features/showContents/showMidBox";
import ShowMainContents from "@/features/showContents/showMainContents";
import {StyledContents, StyledContentsParagraph} from "@/design-system/module/Contents";
import Image from "next/image";
import Footer from "@/components/footer";

export default function ContentsFromId() {

    return (
        <Contents />
    );
}

// This gets called on every request
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

function Contents() {

    return (
        <>
            <Top />

            <StyledLayoutFlex
                $styled={{ flexDirection : 'column', alignItems : 'center' }}
                $styledMobile={{ flexDirection : 'column', alignItems : 'stretch' }}
            >
                <StyledLayoutFlexItem
                    $styled={{ flex : '0 0 auto' }}
                    $styledMobile={{ flex : '0 0 100%' }}
                >
                    <StyledWrapper
                        $styled={{ margin : '120px 24px 36px 24px' }}
                        $styledMobile={{ margin : '80px 24px 36px 24px' }}
                    >

                        <ShowRepresentImg />
                        <ShowCategory />
                        <ShowTitle />
                        <ShowSubTitle />
                        <ShowMidBox />
                        <ShowMainContents />

                    </StyledWrapper>
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>

            <Footer />
        </>
    );
}