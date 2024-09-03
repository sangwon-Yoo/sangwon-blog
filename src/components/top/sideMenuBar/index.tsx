import {
    StyledContents,
    StyledContentsAnchor,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import Image from "next/image";
import {Dispatch, ReactNode, SetStateAction} from "react";
import Link from "next/link";

export default function SideMenuBar({showYN, setShowYN, motherList}: {showYN: boolean, setShowYN: Dispatch<SetStateAction<boolean>>, motherList: ReactNode}) {

    if(!showYN) {
        return null;
    }

    return (
        <StyledWrapper
            $styled={{
                width : '100%',
                height : '100%',
                position : 'fixed',
                zIndex : 20,
            }}
        >
            <StyledContents
                $styled={{ height : '100%', backgroundColor : 'rgba(0,0,0,0.4)' }}
                onClick={(e) => setShowYN(false)}
            >
                <StyledWrapper $styled={{ height : '100%' }}>
                    <StyledContents
                        $styled={{
                            width : '260px',
                            height : '100%',
                            backgroundColor : '#111111',
                            overflowY : 'scroll'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                    padding : '8px 16px 8px 16px'
                                }}>
                                    <StyledWrapper $styled={{
                                        display : 'inline-block',
                                        verticalAlign : 'middle',
                                        width : '32px',
                                        height : '32px',
                                    }}>
                                        <Link href={'/home'} >
                                            <StyledContentsAnchor
                                                $styled={{
                                                    display : 'block',
                                                    width : '100%',
                                                    height : '100%',
                                                }}
                                                as={'div'}
                                            >
                                                <Image
                                                    src={'/img/logo_white.svg'}
                                                    width={32}
                                                    height={32}
                                                    alt={'사이트 대표 이미지'}
                                                />
                                            </StyledContentsAnchor>
                                        </Link>
                                    </StyledWrapper>

                                    <StyledWrapper $styled={{
                                        display : 'inline-block',
                                        verticalAlign : 'middle',
                                        width : '100px',
                                        height : '32px',
                                        margin : '0 0 0 10px'
                                    }}>
                                        <StyledContentsSpan $styled={{
                                            display : 'block',
                                            height : '100%',
                                            lineHeight : '32px',
                                            fontSize : '1rem',
                                            color : '#ffffff'
                                        }}>
                                            {`Yoo's Blog`}
                                        </StyledContentsSpan>
                                    </StyledWrapper>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>

                            {motherList}

                        </StyledLayoutFlex>
                    </StyledContents>
                </StyledWrapper>
            </StyledContents>
        </StyledWrapper>
    );
}