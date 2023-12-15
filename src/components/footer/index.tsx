import { StyledContents, StyledContentsAnchor, StyledContentsSpan } from "@/design-system/module/Contents";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Image from "next/image";
import { CSSPosition } from "@/design-system/CommonType";

export default function Footer({isPositionFixed = false}: {isPositionFixed?: boolean}) {


    const fixedWrapperStyle: { position?: CSSPosition, width?: string, bottom?: string }
        = isPositionFixed ? { position : 'fixed', width : '100%', bottom : '0'} : {};

    return (
        <StyledWrapper $styled={{
            margin : '120px 0 0 0',
            ...fixedWrapperStyle
        }}>
            <StyledContents $styled={{ height : '120px', borderTop : '1px solid #e6e6e6' }}>
                <StyledLayoutFlex $styled={{ justifyContent : 'center', alignItems : 'flex-end' }}>
                    <StyledLayoutFlexItem>
                        <StyledWrapper $styled={{
                            verticalAlign : 'middle',
                            width : '100px',
                            height : '42px',
                            textAlign : 'center'
                        }}>
                            <StyledContentsAnchor
                                $styled={{
                                    display : 'inline-block',
                                    verticalAlign : 'middle',
                                    width : '42px',
                                    height : '100%'
                                }}
                            >
                                <Image
                                    src={'/img/logo_white.svg'}
                                    width={42}
                                    height={42}
                                    priority={true}
                                    alt={'사이트 대표 이미지'}
                                />
                            </StyledContentsAnchor>
                        </StyledWrapper>

                        <StyledWrapper $styled={{
                            width : '100px',
                            height : '36px',
                            margin : '0 0 10px 0'
                        }}>
                            <StyledContentsSpan $styled={{
                                display : 'inline-block',
                                width : '100%',
                                height : '36px',
                                textAlign : 'center',
                                lineHeight : '36px',
                                fontSize : '1rem',
                                color : '#bdc3c7',
                            }}>
                                {`© Yoo's Blog`}
                            </StyledContentsSpan>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                </StyledLayoutFlex>
            </StyledContents>
        </StyledWrapper>
    );
}