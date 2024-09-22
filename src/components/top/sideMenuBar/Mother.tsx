import {StyledWrapper} from "@/design-system/module/Wrapper";
import {StyledContentsAnchor, StyledContentsParagraph} from "@/design-system/module/Contents";
import {StyledLayoutFlexItem} from "@/design-system/module/Layout";
import {ReactNode} from "react";

export default function Mother({text, childList}: {text: string, childList: ReactNode}) {

    return (
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
                    {text}
                </StyledContentsParagraph>
                {childList}
            </StyledWrapper>
        </StyledLayoutFlexItem>
    );
}