import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsButton,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledContentsIconCopy, StyledContentsIconEdit2 } from "@/components/styledIcons";
import Image from "next/image";
import 'highlight.js/styles/atom-one-dark.min.css'
import Top from "@/components/top";
import Footer from "@/components/footer";
import hljs from "highlight.js/lib/core";
import { useEffect } from "react";
import { escapeHtml } from "@/functions/utils";
import ShowRepresentImg from "@/features/showContents/showRepresentImg";
import ShowCategory from "@/features/showContents/showCategory";
import ShowTitle from "@/features/showContents/showTitle";
import ShowSubTitle from "@/features/showContents/showSubTitle";
import ShowMidBox from "@/features/showContents/showMidBox";
import ShowMainContents from "@/features/showContents/showMainContents";

export default function Contents() {

    useEffect(() => {
        hljs.highlightAll();
    }, []);

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

                        {/* ++ 부제 */}
                        <StyledWrapper
                            $styled={{ margin : '64px 0 48px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    fontSize : '1.2rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    fontSize : '1.1rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                as={'h3'}
                            >
                                부제목 부제목 부제목 부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단 */}
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
                            >
                                useEffect에 대해 자세히 알아보자. <b>생명주기를</b> 위해 무엇을 신경써야할까? <b><i style={{backgroundColor : '#66f1e1' }}>useEffect에 대해 자세히 알아보자.</i></b> 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect 에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까?
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단(가운데정렬) */}
                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    color : '#292929',
                                    whiteSpace : 'pre-line',
                                    textAlign : 'center'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    color : '#292929'
                                }}
                            >
                                useEffect에 대해 자세히 알아보자.
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단 */}
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
                            >
                                useEffect에 대해 자세히 알아보자. <b>생명주기를</b> 위해 무엇을 신경써야할까? <i style={{ backgroundColor : '#66f1e1' }}>useEffect에 대해 자세히 알아보자.</i> 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect 에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까?
                            </StyledContentsParagraph>
                        </StyledWrapper>


                        {/* ++ 문단 : 코드블럭 */}
                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <pre>
                                    <code dangerouslySetInnerHTML={{
                                        __html : escapeHtml(`async function APICalc({design, REQ_info}: APICalcProps): Promise<ProductCalcOutput> {

    const reqURI: string = '/calculate/v1/defaultdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasfasf';

    return await APIProduct<ProductCalcOutput>(reqURI, {
        method: 'POST',
        body: JSON.stringify(designToCalcInput(design, REQ_info)),
        headers: {
            'Content-Type' : 'application/json',
        }
    });
}`)
                                    }} />
                                </pre>
                            </StyledContents>
                        </StyledWrapper>

                        {/* ++ 부제 */}
                        <StyledWrapper
                            $styled={{ margin : '64px 0 48px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    fontSize : '1.2rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    fontSize : '1.1rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                as={'h3'}
                            >
                                상태관리를 위한 툴
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단(이미지) */}
                        <StyledWrapper
                            $styled={{ margin : '0 0 36px 0' }}
                        >
                            <StyledContents
                                $styled={{
                                    position : 'relative',
                                    overflow : 'hidden',
                                    width : '680px',
                                    height : '360px',
                                    borderRadius : '2px',
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : '300px'
                                }}
                            >
                                <Image
                                    src={'/img/inContents.jpeg'}
                                    fill
                                    style={{ objectFit : 'cover' }}
                                    alt={'내용 삽입 이미지'}
                                />
                            </StyledContents>
                        </StyledWrapper>

                        {/* ++ 문단 */}
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
                            >
                                {`상태관 In San Francisco, there is a fresh crime wave that no DA can stop.\n Emboldened criminals are rushing around the streets wearing backpacks with suits, tan shoes with dark worsted slacks, and Patagonia fleece vests with chinos, dress shirts, and Allbird sneakers. Let’s take a look at some of the city’s most common fashion offenses today, as well as potential solutions.`}
                            </StyledContentsParagraph>
                        </StyledWrapper>



                    </StyledWrapper>
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>

            <Footer />
        </>
    );
}