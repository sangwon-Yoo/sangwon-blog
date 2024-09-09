import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContents, StyledContentsButton } from "@/design-system/module/Contents";
import {
    ChangeEvent,
    MouseEventHandler,
    ReactNode,
    useEffect,
    useState,
    KeyboardEvent,
    Dispatch,
    SetStateAction, useCallback, SyntheticEvent
} from "react";
import Draft, {
    convertToRaw, EditorState,
    RichUtils, getDefaultKeyBinding,
    ContentBlock, RawDraftContentState, convertFromRaw, Modifier, DraftHandleValue
} from "draft-js";
import Editor from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import 'draft-js/dist/Draft.css';
import Immutable from "immutable";
import styled from "styled-components";
import {EDITOR_BLOCKS} from "@/const/editorBlock";
import { stateToHTML } from 'draft-js-export-html';
import useGetContents from "@/hook/useGetContents";

export default function WriteContents(
    {exportFlag, exportSetter}: {exportFlag: boolean; exportSetter: Dispatch<SetStateAction<RawDraftContentState | null>>}
) {

    const { data } = useGetContents();

    const [
        editorState,
        setEditorState
    ] = useState(() => data?.contentsData?.contentsHtml
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(data?.contentsData?.contentsHtml) as RawDraftContentState))
        : EditorState.createEmpty()
    );
    const imagePlugIn = createImagePlugin();
    const [plugIns] = useState(() => {

        const plugInList = [
            imagePlugIn
            // ... //
        ];
        return plugInList;
    });
    const [editorFocusYN, setEditorFocusYN] = useState<boolean>(false);
    const [inputFileEmptyValue, setInputFileEmptyValue] = useState<''>('');

    const doExport = useCallback(
        () => exportSetter(editorState.getCurrentContent().hasText() ? convertToRaw(editorState.getCurrentContent()) : null),
        [exportSetter, editorState]
    );

    useEffect(() => {
        if(exportFlag) {
            doExport();
        }
    }, [exportFlag, doExport]);

    useEffect(() => {
        console.log(convertToRaw(editorState.getCurrentContent()));
        //console.log(stateToHTML(editorState.getCurrentContent())); html 로 애초에 바꿔서 저장 할 수도 있음.
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
    });

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

    const handleReturn = (e: KeyboardEvent): DraftHandleValue => {
        if (e.shiftKey) {
            // 소프트 뉴라인 삽입
            setEditorState(RichUtils.insertSoftNewline(editorState));
            return 'handled';
        }

        const contentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();

        // 현재 블록을 분할하고 새로운 블록을 생성
        const newContentState = Modifier.splitBlock(contentState, selectionState);
        const newSelection = newContentState.getSelectionAfter();

        // 새로운 블록의 타입을 'unstyled'로 설정
        const newContentStateWithUnstyledBlock = Modifier.setBlockType(
            newContentState,
            newSelection,
            'unstyled'
        );

        const newEditorState = EditorState.push(
            editorState,
            newContentStateWithUnstyledBlock,
            'split-block'
        );

        setEditorState(newEditorState);
        return 'handled';
    };

    const mapKeyToEditorCommand = (e: KeyboardEvent) => {
        if (e.key === 'Tab' /* TAB */) {
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
    const inputImgOnChange = (event: ChangeEvent<HTMLInputElement>) => {

        if(!event.target.files) return;

        const file = event.target.files.item(0);
        if(!file) {
            return;
        }

        if(file.size > 1000000) {
            alert('Too Big File Size. Use under 1Mb image.');
            return;
        }

        const blob = file.slice();
        const imgURL = URL.createObjectURL(blob);

        setEditorState(prev => imagePlugIn.addImage(
            prev, imgURL, {tmpFile : file}
        ));
        setInputFileEmptyValue('');
    };

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
                                    display : 'inline-block',
                                    width : '72px',
                                    height : '40px',
                                    margin : '0 10px',
                                    color : '#6B6B6B',
                                    textAlign : 'center',
                                    lineHeight : '40px'
                                }}
                                as={'label'}
                                htmlFor={'Input_UploadImage'}
                            >
                                Image
                            </StyledContentsButton>
                            <input
                                id={'Input_UploadImage'}
                                name={'Input_UploadImage'}
                                style={{ display : 'none' }}
                                onChange={inputImgOnChange}
                                type={'file'}
                                value={inputFileEmptyValue}
                            />
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
                            <InlineControlButton
                                label={'Bold'}
                                styleName={'BOLD'}
                                toggleFn={toggleInlineStyle}
                                editorState={editorState}
                            />
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <InlineControlButton
                                label={'Point'}
                                styleName={'POINT'}
                                toggleFn={toggleInlineStyle}
                                editorState={editorState}
                            />
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
                            overflow : 'auto'
                        }}
                    >
                        <Editor
                            editorState={editorState}
                            plugins={plugIns}
                            onChange={setEditorState}
                            handleKeyCommand={handleKeyCommand}
                            handleReturn={handleReturn}
                            blockStyleFn={myBlockStyleFn}
                            customStyleMap={CUSTOM_INLINE_STYLE_MAP}
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

function InlineControlButton(
    {label, styleName, toggleFn, editorState}: {label: string, styleName: string, toggleFn: (BlockType: string) => void, editorState: EditorState}
) {

    const inlineTypeSet = editorState.getCurrentInlineStyle();
    const [active, setActive] = useState<boolean>(false);
    useEffect(() => {
        inlineTypeSet.has(styleName) ? setActive(true) : setActive(false);
    }, [inlineTypeSet.toArray().join()]);

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
const CUSTOM_INLINE_STYLE_MAP = {
    'POINT': {
        fontStyle : 'italic',
        backgroundColor : '#66f1e1'
    },
};

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

    [EDITOR_BLOCKS.unstyled]: {
        element: 'div'
    },
    [EDITOR_BLOCKS.header_three]: {
        element: 'h3'
    },
    [EDITOR_BLOCKS.center] : {
        element : 'div',
        wrapper : <CenterBlock />
    },
    [EDITOR_BLOCKS.code_block]: {
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

