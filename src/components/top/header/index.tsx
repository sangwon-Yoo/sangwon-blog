import { StyledContents, StyledContentsAnchor } from "@/design-system/module/Contents";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Image from "next/image";
import LogInOut from "@/features/logInOut";
import SendMessage from "@/features/sendMessage";
import ToContentsEditor from "@/features/toContentsEditor";
import OpenSideMenuBar from "@/features/openSideMenuBar";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export default function Header(
    {setShowSideMenuBarYN}: {setShowSideMenuBarYN:  Dispatch<SetStateAction<boolean>>}
) {

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
                    <StyledLayoutFlexItem $styled={{ flex : '1' }}>
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
                                                <Link href={'/home'}>
                                                    <StyledContentsAnchor
                                                        $styled={{
                                                            display : 'block',
                                                            width : '42px',
                                                            height : '42px',
                                                        }}
                                                        $styledMobile={{
                                                            width : '32px',
                                                            height : '32px'
                                                        }}
                                                        as={'div'}
                                                    >

                                                        <StyledWrapper $styled={{ width : '100%', height : '100%' }}>
                                                            <Image
                                                                src={'/img/logo_white.svg'}
                                                                fill={true}
                                                                alt={'사이트 대표 이미지'}
                                                                style={{ borderRadius : '2px', objectFit : 'cover' }}
                                                                priority={true}
                                                            />
                                                        </StyledWrapper>
                                                    </StyledContentsAnchor>
                                                </Link>
                                            </StyledWrapper>
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledLayoutFlex $styled={{
                                        flexDirection : 'column', justifyContent : 'center'
                                    }}>
                                        <StyledLayoutFlexItem>
                                            <OpenSideMenuBar
                                                setShowSideMenuBarYN={setShowSideMenuBarYN}
                                            />
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                    <StyledLayoutFlexItem $styled={{ flex : '2 1' }}>

                    </StyledLayoutFlexItem>
                    <StyledLayoutFlexItem $styled={{ flex : '1' }}>
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
                                            <ToContentsEditor />
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledLayoutFlex $styled={{
                                        flexDirection : 'column', justifyContent : 'center'
                                    }}>
                                        <StyledLayoutFlexItem>
                                            <SendMessage />
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledLayoutFlex $styled={{
                                        flexDirection : 'column', justifyContent : 'center'
                                    }}>
                                        <StyledLayoutFlexItem>
                                            <LogInOut />
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