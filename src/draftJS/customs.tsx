import { StyledWrapper } from "@/design-system/module/Wrapper";
import { ReactNode } from "react";
import { Map } from "immutable"
import { ContentBlock } from "draft-js";
import styled from "styled-components";


export const myBlockStyleFn = (contentBlock: ContentBlock) => {

    const type = contentBlock.getType();

    if (type === 'center') {
        return 'block-style-center';
    }

    return 'unhandled';
};

export const CUSTOM_BLOCK_RENDER_MAP = Map({
    'unstyled': {
        element: 'div'
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
        <StyledWrapperEditorCenter>
            {children}
        </StyledWrapperEditorCenter>
    );
}

const StyledWrapperEditorCenter = styled(StyledWrapper)`
    
    & .block-style-center .public-DraftStyleDefault-block {
        text-align: center;
    }
`;