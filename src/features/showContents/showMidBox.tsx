import {
    StyledContents,
    StyledContentsButton,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import {StyledWrapper} from "@/design-system/module/Wrapper";
import {StyledLayoutFlex, StyledLayoutFlexItem} from "@/design-system/module/Layout";
import {StyledContentsIconCopy, StyledContentsIconEdit2} from "@/components/styledIcons";
import useGetContents from "@/hook/useGetContents";
import dayjs from "dayjs";

export default function ShowMidBox() {

    const { data } = useGetContents();

    return (
        <StyledWrapper $styled={{
            margin : '32px 0 24px 0',
            borderTop : '1px solid #e6e6e6',
            borderBottom : '1px solid #e6e6e6'
        }}>
            <StyledContents $styled={{ height : '49px' }}>
                <StyledLayoutFlex>

                    <StyledLayoutFlexItem $styled={{ flex : '0 0 50%' }}>
                        <StyledLayoutFlex>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    padding : '0 10px'
                                }}>
                                    <StyledContentsParagraph
                                        $styled={{
                                            width : 'auto',
                                            height : '50px',
                                            lineHeight : '50px',
                                            color : '#6B6B6B'
                                        }}
                                    >
                                        {`${dayjs(data?.updatedDate).format('MMM. DD. YY')}`}
                                    </StyledContentsParagraph>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                        </StyledLayoutFlex>
                    </StyledLayoutFlexItem>


                    <StyledLayoutFlexItem $styled={{ flex : '0 0 50%' }}>
                        <StyledLayoutFlex $styled={{ flexDirection : 'row-reverse' }}>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    padding : '14px 10px 14px 10px',
                                    width : '42px',
                                    height : '50px'
                                }}>
                                    <StyledContentsButton
                                        $styled={{
                                            width : '100%',
                                            height : '100%',
                                            color : '#6B6B6B'
                                        }}
                                    >
                                        <StyledContentsIconCopy />
                                    </StyledContentsButton>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{
                                    padding : '14px 10px 14px 10px',
                                    width : '42px',
                                    height : '50px'
                                }}>
                                    <StyledContentsButton
                                        $styled={{
                                            width : '100%',
                                            height : '100%',
                                            color : '#6B6B6B'
                                        }}
                                    >
                                        <StyledContentsIconEdit2 />
                                    </StyledContentsButton>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                        </StyledLayoutFlex>
                    </StyledLayoutFlexItem>

                </StyledLayoutFlex>
            </StyledContents>
        </StyledWrapper>
    );
}