import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {StyledContents, StyledContentsButton, StyledContentsInputText} from "@/design-system/module/Contents";
import React, {MouseEventHandler, SyntheticEvent, useCallback, useEffect, useRef, useState} from "react";
import { convertToRaw, Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import 'draft-js/dist/Draft.css';
import styles from '@/draftJS/RichEditor.module.css';
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
                                Paragraph
                            </StyledContentsButton>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <BlockControlButton
                                label={'Head'}
                                styleName={'header-three'}
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
                        className={styles.RichEditorEditor}
                    >
                        <Editor
                            editorState={editorState}
                            onChange={setEditorState}
                            handleKeyCommand={handleKeyCommand}
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

    return (
        <StyledContentsButton
            $styled={{
                width : '72px',
                height : '40px',
                margin : '0 10px',
                color : active ? '#292929' : '#6B6B6B',
                fontWeight : active ? 'bold' : undefined
            }}
            onClick={() => toggleFn(styleName)}
        >
            {label}
        </StyledContentsButton>
    );
}