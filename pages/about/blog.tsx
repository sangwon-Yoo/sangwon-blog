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
import useInitClipboard from "@/hook/useInitClipboard";
import {StyledContents, StyledContentsParagraph} from "@/design-system/module/Contents";
import Image from "next/image";
import {stylingTextByStyleRanges} from "@/functions/editorUtils";

export default function BlogPage() {

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
                                    src={`/img/logo.svg`}
                                    fill
                                    priority
                                    style={{ objectFit : 'cover' }}
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
                                {`블로그 소개`}
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
                                    __html : `이 블로그는 제가 <b>공부하는 내용을 기록하기 위한 블로그</b>입니다. 동시에 블로그를 만듦으로써 여러 기능을 만들어 보는 기회도 가졌습니다.`
                                }}
                            />
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
                                    __html : `1. NextAuth 를 통한 OAuth 로그인/로그아웃\n2. Draft.js, highlight.js 를 통한 커스텀 에디터\n3. prisma ORM 를 이용한 CURD Rest API 생성\n4. 그 외 자체 마크업이나 배포관리`
                                }}
                            />
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
                                    __html : `궁금하신 내용이 있다면 메세지를 보내주시면 시간 닿는대로 답변드리겠습니다. 감사합니다. :)`
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