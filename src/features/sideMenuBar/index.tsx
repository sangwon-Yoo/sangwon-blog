import {
    StyledContents,
    StyledContentsAnchor,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import Image from "next/image";

export default function SideMenuBar() {

    return (
        <StyledWrapper
            $styled={{
                width : '100%',
                height : '100%',
                position : 'fixed',
                zIndex : 20,
            }}
            style={{display : "none"}}
        >
            <StyledContents $styled={{ height : '100%', backgroundColor : 'rgba(0,0,0,0.4)' }}>
                <StyledWrapper $styled={{ height : '100%' }}>
                    <StyledContents $styled={{
                        width : '260px',
                        height : '100%',
                        backgroundColor : '#111111',
                        overflowY : 'scroll'
                    }}>
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
                                        <StyledContentsAnchor
                                            $styled={{
                                                display : 'block',
                                                width : '100%',
                                                height : '100%',
                                            }}
                                        >
                                            <Image
                                                src={'/img/wonny.jpeg'}
                                                width={32}
                                                height={32}
                                                alt={'사이트 대표 이미지'}
                                            />
                                        </StyledContentsAnchor>
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
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                    padding : '13px 16px 3px 16px'
                                }}>
                                    <StyledContentsParagraph $styled={{
                                        height : '2rem',
                                        lineHeight : '2rem',
                                        fontSize : '1rem',
                                        color : '#ffffff'
                                    }}>
                                        Hello
                                    </StyledContentsParagraph>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                    padding : '13px 16px 3px 16px'
                                }}>
                                    <StyledContentsParagraph $styled={{
                                        height : '2rem',
                                        lineHeight : '2rem',
                                        fontSize : '1rem',
                                        color : '#ffffff'
                                    }}>
                                        Hello
                                    </StyledContentsParagraph>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                    padding : '13px 16px 3px 16px'
                                }}>
                                    <StyledContentsParagraph $styled={{
                                        height : '2rem',
                                        lineHeight : '2rem',
                                        fontSize : '1rem',
                                        color : '#ffffff'
                                    }}>
                                        Hello
                                    </StyledContentsParagraph>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                    padding : '13px 16px 3px 16px'
                                }}>
                                    <StyledContentsParagraph $styled={{
                                        height : '2rem',
                                        lineHeight : '2rem',
                                        fontSize : '1rem',
                                        color : '#ffffff'
                                    }}>
                                        Hello
                                    </StyledContentsParagraph>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                    padding : '13px 16px 3px 16px'
                                }}>
                                    <StyledContentsParagraph $styled={{
                                        height : '2rem',
                                        lineHeight : '2rem',
                                        fontSize : '1rem',
                                        color : '#ffffff'
                                    }}>
                                        Hello
                                    </StyledContentsParagraph>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                    padding : '13px 16px 3px 16px'
                                }}>
                                    <StyledContentsParagraph $styled={{
                                        height : '2rem',
                                        lineHeight : '2rem',
                                        fontSize : '1rem',
                                        color : '#ffffff'
                                    }}>
                                        Hello
                                    </StyledContentsParagraph>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                    <StyledContentsAnchor $styled={{
                                        display : 'block',
                                        height : '1.6rem',
                                        lineHeight : '1.6rem',
                                        fontSize : '0.8rem',
                                        color : '#ffffff80'
                                    }}>
                                        hihihi
                                    </StyledContentsAnchor>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                        </StyledLayoutFlex>
                    </StyledContents>
                </StyledWrapper>
            </StyledContents>
        </StyledWrapper>
    );
}