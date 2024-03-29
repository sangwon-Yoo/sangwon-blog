import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContents, StyledContentsButton } from "@/design-system/module/Contents";
import React, {MouseEventHandler, ReactNode, useEffect, useState} from "react";
import {
    convertToRaw, Editor,
    EditorState, RichUtils,
    getDefaultKeyBinding, ContentBlock
} from "draft-js";
import 'draft-js/dist/Draft.css';
import Immutable from "immutable";
import styled from "styled-components";


export default function WriteContents() {

    const [
        editorState,
        setEditorState
    ] = useState(() => EditorState.createEmpty());
    const [editorFocusYN, setEditorFocusYN] = useState<boolean>(false);

    useEffect(() => {
        console.log(convertToRaw(editorState.getCurrentContent()));
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        console.log(blockType);
    });

    console.log('sadf')

    //const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(BLOCK_RENDER_MAP);

    const myBlockStyleFn = (contentBlock: ContentBlock) => {

        const type = contentBlock.getType();

        if (type === 'center') {
            return 'block-style-center';
        }

        return 'unhandled';
    };

    const handleKeyCommand = (command: string, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            setEditorState(newState);

            return 'handled';
        }

        return 'not-handled';
    };

    const mapKeyToEditorCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Tab' /* TAB */) {
            console.log('pressed : Tab');
            const newEditorState = RichUtils.onTab(
                e,
                editorState,
                4, /* maxDepth */
            );
            if (newEditorState !== editorState) {
                setEditorState(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    };
    const toggleBlockType = (blockType: string) => setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    const toggleInlineStyle = (inlineStyle: string) => setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));




    return (
        <StyledLayoutFlex $styled={{ flexDirection : 'column' }} id={'tmptmp'}>
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
                        {/*<StyledLayoutFlexItem>
                            <BlockControlButton
                                label={'Paragraph'}
                                styleName={'unstyled'}
                                toggleFn={toggleBlockType}
                                editorState={editorState}
                            />
                        </StyledLayoutFlexItem>*/}
                        <StyledLayoutFlexItem>
                            <BlockControlButton
                                label={'Head'}
                                styleName={'header-three'}
                                toggleFn={toggleBlockType}
                                editorState={editorState}
                            />
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <BlockControlButton
                                label={'Center'}
                                styleName={'center'}
                                toggleFn={toggleBlockType}
                                editorState={editorState}
                            />
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
                            <BlockControlButton
                                label={'Code'}
                                styleName={'code-block'}
                                toggleFn={toggleBlockType}
                                editorState={editorState}
                            />
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledContentsButton
                                $styled={{
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#6B6B6B',
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
                                    color : '#6B6B6B'
                                }}
                            >
                                Point
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledWrapper>
            </StyledLayoutFlexItem>
            <StyledLayoutFlexItem>
                <StyledWrapper
                    $styled={{
                        padding : '20px',
                        border : editorFocusYN ? '1.4px solid #66f1e1' : '1.4px solid #0ca8ac',
                        borderRadius : '3px',
                    }}
                >
                    <StyledContents
                        $styled={{
                            height : '630px',
                        }}
                    >
                        <Editor
                            editorState={editorState}
                            onChange={setEditorState}
                            handleKeyCommand={handleKeyCommand}
                            blockStyleFn={myBlockStyleFn}
                            blockRenderMap={CUSTOM_BLOCK_RENDER_MAP}
                            spellCheck={true}
                            onFocus={() => setEditorFocusYN(true)}
                            onBlur={() => setEditorFocusYN(false)}
                            placeholder="내용을 입력하세요"
                        />
                    </StyledContents>
                </StyledWrapper>
            </StyledLayoutFlexItem>
        </StyledLayoutFlex>
    );
}

function BlockControlButton(
    {label, styleName, toggleFn, editorState}: {label: string, styleName: string, toggleFn: (BlockType: string) => void, editorState: EditorState}
) {

    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    const [active, setActive] = useState<boolean>(false);
    useEffect(() => {
        (blockType == styleName) ? setActive(true) : setActive(false);
    }, [blockType]);

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        toggleFn(styleName);
    };

    return (
        <StyledContentsButton
            $styled={{
                width : '72px',
                height : '40px',
                margin : '0 10px',
                color : active ? '#292929' : '#6B6B6B',
                fontWeight : active ? 'bold' : undefined
            }}
            onClick={onClick}
        >
            {label}
        </StyledContentsButton>
    );
}

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
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

