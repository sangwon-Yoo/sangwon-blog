import { StyledContents, StyledContentsAnchor } from "@/design-system/module/Contents";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContentsIconEdit, StyledContentsIconMenu, StyledContentsIconPaperPlan } from "@/components/styledIcons";
import Image from "next/image";

export default function Header() {

    return (
        <StyledWrapper
            $styled={{
                width : '100%',
                position : 'fixed',
                zIndex : 10,
                boxShadow : '0px 1px 3px rgba(0,0,0,0.2)',
                borderBottom : '1px solid #DDDDDD'
            }}
            $styledMobile={{
                borderBottom : 'unset'
            }}
        >
            <StyledContents
                $styled={{ height : '64px', backgroundColor : '#ffffff' }}
                $styledMobile={{ height : '42px', backgroundColor : '#111111', opacity : 0.875 }}
            >
                <StyledLayoutFlex>
                    <StyledLayoutFlexItem $styled={{ flex : '0 0 16%' }}>
                        <StyledWrapper $styled={{ height : '100%', margin : '0 0 0 10px' }}>
                            <StyledLayoutFlex
                                $styled={{ justifyContent : 'flex-end' }}
                                $styledMobile={{ justifyContent : 'flex-start' }}
                            >
                                <StyledLayoutFlexItem>
                                    <StyledLayoutFlex $styled={{
                                        flexDirection : 'column', justifyContent : 'center'
                                    }}>
                                        <StyledLayoutFlexItem>
                                            <StyledWrapper $styled={{ margin : '6px' }}>
                                                <StyledContentsAnchor
                                                    $styled={{
                                                        display : 'block',
                                                        width : '36px',
                                                        height : '36px',
                                                    }}
                                                    $styledMobile={{
                                                        width : '32px',
                                                        height : '32px'
                                                    }}
                                                >
                                                    <Image
                                                        src={'/img/wonny.jpeg'}
                                                        width={32}
                                                        height={32}
                                                        alt={'사이트 대표 이미지'}
                                                        style={{ borderRadius : '2px' }}
                                                    />
                                                </StyledContentsAnchor>
                                            </StyledWrapper>
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledLayoutFlex $styled={{
                                        flexDirection : 'column', justifyContent : 'center'
                                    }}>
                                        <StyledLayoutFlexItem>
                                            <StyledWrapper $styled={{ margin : '6px' }}>
                                                <StyledContentsAnchor
                                                    $styled={{
                                                        display : 'block',
                                                        padding : '7px',
                                                        color : '#0ca8ac',
                                                        borderRadius : '2px',
                                                        transition : 'background-color .12s ease',
                                                        hover : { backgroundColor : '#ececeb' }
                                                    }}
                                                    $styledMobile={{
                                                        hover : { color : '#66f1e1', backgroundColor : 'unset' }
                                                    }}
                                                >
                                                    <StyledContentsIconMenu />
                                                </StyledContentsAnchor>
                                            </StyledWrapper>
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                    <StyledLayoutFlexItem $styled={{ flex : '0 1 68%' }}>

                    </StyledLayoutFlexItem>
                    <StyledLayoutFlexItem $styled={{ flex : '0 0 16%' }}>
                        <StyledWrapper $styled={{ height : '100%', margin : '0 10px 0 0' }}>
                            <StyledLayoutFlex
                                $styled={{ justifyContent : 'flex-start' }}
                                $styledMobile={{ justifyContent : 'flex-end' }}
                            >
                                <StyledLayoutFlexItem>
                                    <StyledLayoutFlex $styled={{
                                        flexDirection : 'column', justifyContent : 'center'
                                    }}>
                                        <StyledLayoutFlexItem>
                                            <StyledWrapper $styled={{ margin : '6px' }}>
                                                <StyledContentsAnchor
                                                    $styled={{
                                                        display : 'block',
                                                        padding : '7px',
                                                        color : '#0ca8ac',
                                                        borderRadius : '2px',
                                                        transition : 'background-color .12s ease',
                                                        hover : { backgroundColor : '#ececeb' }
                                                    }}
                                                    $styledMobile={{
                                                        hover : { color : '#66f1e1', backgroundColor : 'unset' }
                                                    }}
                                                >
                                                    <StyledContentsIconEdit />
                                                </StyledContentsAnchor>
                                            </StyledWrapper>
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledLayoutFlex $styled={{
                                        flexDirection : 'column', justifyContent : 'center'
                                    }}>
                                        <StyledLayoutFlexItem>
                                            <StyledWrapper $styled={{ margin : '6px' }}>
                                                <StyledContentsAnchor
                                                    $styled={{
                                                        display : 'block',
                                                        padding : '7px',
                                                        color : '#0ca8ac',
                                                        borderRadius : '2px',
                                                        transition : 'background-color .12s ease',
                                                        hover : { backgroundColor : '#ececeb' }
                                                    }}
                                                    $styledMobile={{
                                                        hover : { color : '#66f1e1', backgroundColor : 'unset' }
                                                    }}
                                                >
                                                    <StyledContentsIconPaperPlan />
                                                </StyledContentsAnchor>
                                            </StyledWrapper>
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                </StyledLayoutFlex>
            </StyledContents>
        </StyledWrapper>
    );
}