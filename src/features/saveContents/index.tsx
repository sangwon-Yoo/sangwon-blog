import { StyledContents, StyledContentsButton } from "@/design-system/module/Contents";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";

export default function SaveContents() {

    return (
        <StyledContents
            $styled={{
                width : '680px',
                height : 'auto',
                padding : '20px 20px 6px 20px'
            }}
            $styledMobile={{
                width : '100%',
                height : 'auto'
            }}
        >
            <StyledLayoutFlex $styled={{ flexDirection : 'row-reverse' }}>
                <StyledLayoutFlexItem>
                    <StyledContentsButton $styled={{
                        display : 'inline-block',
                        height : '24px',
                        width : '64px',
                        lineHeight : '24px',
                        padding : '0 14px',
                        backgroundColor : '#0ca8ac',
                        borderRadius : '7px',
                        color : '#ffffff',
                    }}>
                        {`저장`}
                    </StyledContentsButton>
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>
        </StyledContents>
    );
}