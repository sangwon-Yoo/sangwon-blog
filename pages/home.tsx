import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsAnchor,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import {
    StyledLayoutFlex,
    StyledLayoutFlexItem,
} from "@/design-system/module/Layout";
import Image from "next/image";
import Top from "@/components/top";
import Footer from "@/components/footer";
import {GetServerSideProps} from "next";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {QUERY_KEY} from "@/const/queryKey";
import {APIInternal} from "@/apiClient/apis";
import {ResSummaryList} from "@/types/response";
import {ENDPOINT} from "@/const/endpoint";
import MakeRecentContentsList from "@/features/makeRecentContentsList";
import {useRouter} from "next/router";


// This gets called on every request
/*export const getServerSideProps = (async (context) => {


}) satisfies GetServerSideProps;*/

export default function Home() {

    const router = useRouter();

    return (
        <>
            <Top />

            {/* ++ 메인 */}
            <StyledWrapper as={'main'}>
                <StyledContents $styled={{
                    height : '600px', backgroundImage : '/img/gradationBg.jpeg'
                }}>
                    <StyledLayoutFlex
                        $styled={{ flexDirection : 'column', justifyContent : 'center' }}
                    >
                        <StyledLayoutFlexItem>
                            <StyledWrapper>
                                <StyledContentsParagraph $styled={{
                                    height : '40px',
                                    fontSize : '2rem',
                                    color : 'white',
                                    textAlign : 'center',
                                    marginBottom : '0.8rem'
                                }}>
                                    {`Yoo's Blog`}
                                </StyledContentsParagraph>
                                <StyledContentsParagraph $styled={{
                                    height : '40px',
                                    fontSize : '0.9rem',
                                    color : 'white',
                                    textAlign : 'center'
                                }}>
                                    {`공부하는 것을 기록`}
                                </StyledContentsParagraph>
                            </StyledWrapper>

                        </StyledLayoutFlexItem>

                        <StyledLayoutFlexItem>
                            <StyledLayoutFlex
                                $styled={{ flexDirection : 'row', justifyContent : 'center' }}
                                $styledMobile={{ flexDirection : 'column' }}
                            >
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{ textAlign : 'center' }}>
                                        <StyledContentsAnchor
                                            $styled={{
                                                display : 'inline-block',
                                                width : '143px',
                                                height : '43px',
                                                lineHeight : '39px',
                                                fontSize : '1rem',
                                                margin : '4px',
                                                border : '2px solid #ffffff',
                                                borderRadius : '2px',
                                                color : '#ffffff',
                                                backgroundColor : 'transparent',
                                                transition : 'background-color .12s ease',
                                                hover : {
                                                    color : '#292929',
                                                    backgroundColor : '#ffffff'
                                                }
                                            }}
                                            onClick={() => router.push('/about/blog')}
                                        >
                                            {`블로그 소개`}
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{ textAlign : 'center' }}>
                                        <StyledContentsAnchor
                                            $styled={{
                                                display : 'inline-block',
                                                width : '143px',
                                                height : '43px',
                                                lineHeight : '39px',
                                                fontSize : '1rem',
                                                margin : '4px',
                                                border : '2px solid #ffffff',
                                                borderRadius : '2px',
                                                color : '#ffffff',
                                                backgroundColor : 'transparent',
                                                transition : 'background-color .12s ease',
                                                hover : {
                                                    color : '#292929',
                                                    backgroundColor : '#ffffff'
                                                }
                                            }}
                                            onClick={() => router.push('/about/yoo')}
                                        >
                                            {`Yoo 소개`}
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledContents>
            </StyledWrapper>
            {/* -- 메인 */}

            {/* ++ 최근작성한 내용 */}
            <StyledWrapper
                $styled={{ margin : '0 10%' }}
                $styledMobile={{ margin : '0' }}
                as={'section'}
            >
                <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                    <StyledLayoutFlexItem>
                        <StyledWrapper $styled={{ padding : '10px' }}>
                            <StyledContentsParagraph $styled={{
                                height : '23px',
                                lineHeight : '23px',
                                fontWeight : 'bold'
                            }}>
                                {`최근 작성한 내용`}
                            </StyledContentsParagraph>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                    <MakeRecentContentsList />
                </StyledLayoutFlex>
            </StyledWrapper>
            {/* -- 최근작성한 내용 */}

            <Footer />
        </>
    );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({
                                                                 params,
                                                                 req,
                                                                 query
                                                             }) => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey : [QUERY_KEY.getSummaryList],
        queryFn : () => APIInternal<ResSummaryList>({
            url : `${process.env.NEXT_PUBLIC_HOST}${ENDPOINT.getSummaryList}`
        }),
    });

    return { props: { dehydratedState: dehydrate(queryClient) } }
}