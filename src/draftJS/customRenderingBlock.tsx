import { StyledWrapper } from "@/design-system/module/Wrapper";
import { ReactNode } from "react";
import { Map } from "immutable"
import { StyledContentsParagraph } from "@/design-system/module/Contents";


export const CUSTOM_BLOCK_RENDER_MAP = Map({
    'unstyled': {
        element: 'p'
    },
    'header-three': {
        element: 'h3'
    },
    'center' : {
        element : 'div',
        wrapper : <CenterBlock />
    },
    'code-block': {
        element : 'pre',
        wrapper : <CodeBlock />
    }
});

function CodeBlock({children}: {children?: ReactNode}) {

    return (
        <StyledWrapper $styled={{ padding : '20px', backgroundColor : '#f2f3f5' }}>
            {children}
        </StyledWrapper>
    );
}

function CenterBlock({children}: {children?: ReactNode}) {

    return (
        <StyledWrapper>
            <StyledContentsParagraph $styled={{ height : 'auto', textAlign : 'center' }}>
                {children}
            </StyledContentsParagraph>
        </StyledWrapper>
    );
}