import useInitClipboard from "@/hook/useInitClipboard";
import Top from "@/components/top";
import {StyledLayoutFlex, StyledLayoutFlexItem} from "@/design-system/module/Layout";
import {StyledWrapper} from "@/design-system/module/Wrapper";
import ShowRepresentImg from "@/features/showContents/showRepresentImg";
import ShowCategory from "@/features/showContents/showCategory";
import ShowTitle from "@/features/showContents/showTitle";
import ShowSubTitle from "@/features/showContents/showSubTitle";
import ShowMidBox from "@/features/showContents/showMidBox";
import ShowMainContents from "@/features/showContents/showMainContents";
import Footer from "@/components/footer";
import {
    StyledContents,
    StyledContentsButton,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import Image from "next/image";
import dayjs from "dayjs";
import {StyledContentsIconCopy, StyledContentsIconEdit2} from "@/components/styledIcons";
import {useRouter} from "next/router";
import {stylingTextByStyleRanges} from "@/functions/editorUtils";

export default function YooPage() {

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

                        <StyledWrapper
                            $styled={{ width : '680px', height : '384px', margin : '0 0 36px 0' }}
                            $styledMobile={{ width : '100%', height : '194px' }}
                        >
                            <StyledContents $styled={{
                                height : '100%',
                                position : 'relative',
                                overflow : 'hidden',
                                borderRadius : '2px',
                            }}>
                                <Image
                                    src={`/img/wonny.png`}
                                    fill
                                    priority
                                    style={{ objectFit : 'contain' }}
                                    alt={'콘텐츠 대표 이미지'}
                                />
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{ margin : '0 0 24px 0' }}
                            $styledMobile={{ margin : '0 0 14px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    fontSize : '2rem'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    fontSize : '1.4rem'
                                }}
                                as={'h1'}
                            >
                                {`Yoo 소개`}
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    color : '#292929',
                                    whiteSpace : 'pre-line'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    color : '#292929'
                                }}
                                dangerouslySetInnerHTML={{
                                    __html : `프론트엔드 개발을 하고 있는 직장인입니다. :)`
                                }}
                            />
                        </StyledWrapper>

                    </StyledWrapper>
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>

            <Footer />
        </>
    );
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    //const res = await fetch('https://.../posts')
    //const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
        }
    }
}