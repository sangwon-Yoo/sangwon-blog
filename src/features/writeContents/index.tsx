import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContentsButton, StyledContentsInputText } from "@/design-system/module/Contents";

export default function WriteContents() {

    return (
        <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
            <StyledLayoutFlexItem>
                <StyledWrapper $styled={{
                    margin : '0 0 4px 0',
                    borderRadius : '3px',
                    backgroundColor : '#f2f3f5'
                }}>
                    <StyledLayoutFlex
                        $styled={{ flexWrap : 'wrap' }}
                        $styledMobile={{ justifyContent : 'center' }}
                    >
                        <StyledLayoutFlexItem>
                            <StyledContentsButton
                                $styled={{
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#6B6B6B'
                                }}
                            >
                                Title
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledContentsButton
                                $styled={{
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#6B6B6B'
                                }}
                            >
                                Bold
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledContentsButton
                                $styled={{
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#292929',
                                    fontWeight : 'bold'
                                }}
                            >
                                Italic
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledContentsButton
                                $styled={{
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#6B6B6B'
                                }}
                            >
                                Center
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledContentsButton
                                $styled={{
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#6B6B6B'
                                }}
                            >
                                Image
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledContentsButton
                                $styled={{
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#6B6B6B'
                                }}
                            >
                                Code
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledWrapper>
            </StyledLayoutFlexItem>
            <StyledLayoutFlexItem>
                <StyledContentsInputText
                    $styled={{
                        height : '630px',
                        padding : '20px',
                        border : '1.4px solid #0ca8ac',
                        borderRadius : '3px',
                        focusingVisible : { border : '1.4px solid #66f1e1' }
                    }}
                    as={'div'}
                />
            </StyledLayoutFlexItem>
        </StyledLayoutFlex>
    );
}