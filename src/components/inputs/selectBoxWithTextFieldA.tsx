import {
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContentsIconClose } from "@/components/styledIcons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function SelectBoxWithTextFieldA({title, initialValue, usingTextFieldOptionName, exporting}: {
    title: string;
    initialValue: string;
    usingTextFieldOptionName: string;
    exporting: { exportFlag: boolean; setter: Dispatch<SetStateAction<string>> }
}) {

    const [inputSelectState, setInputSelectState] = useState<string>(initialValue);
    const [inputTextState, setInputTextState] = useState<string>('');

    const isUseTextTyping = (inputSelectState == usingTextFieldOptionName);

    useEffect(() => {
        if(exporting.exportFlag) {
            exporting.setter(isUseTextTyping ? inputTextState : inputSelectState);
        }
    }, [exporting.exportFlag]);

    return (
        <StyledLayoutGrid $styled={{
            gridTemplateColumns : '30% 60% 10%',
            gridTemplateAreas :
                '"name name name"' +
                '"selectBox textField close"'
        }}>
            <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                <StyledWrapper
                    $styled={{ margin : '0 0 10px 0'}}
                    //$skeletonYN={true}
                >
                    <StyledContentsSpan
                        $styled={{
                            display : 'inline-block',
                            width : '100%',
                            height : '2rem',
                            lineHeight : '2rem',
                            fontWeight : 'bold'
                        }}
                    >
                        {title}
                    </StyledContentsSpan>
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'selectBox' }}>
                <StyledWrapper
                    $styled={{ margin : '0 14px 0 0' }}
                    //$skeletonYN={true}
                >
                    <StyledContentsInputText
                        name={'category'}
                        as={'select'}
                        $styled={{
                            border: '1.4px solid #0ca8ac',
                            borderRadius: '3px',
                            width: '100%',
                            height: '32px',
                            lineHeight: '32px',
                            backgroundColor: 'transparent',
                            hover: { border: '1.4px solid #66f1e1' }
                        }}
                        $styledMobile={{
                            border: '1.4px solid #0ca8ac',
                            hover: { border: '1.4px solid #66f1e1' }
                        }}
                        value={inputSelectState}
                        onChange={(event) => setInputSelectState(event.currentTarget.value)}
                    >
                        <option value={''} defaultChecked={inputSelectState == ''}> -- 선택하세요 -- </option>
                        <option value={'vanillaJS'} defaultChecked={inputSelectState == 'vanillaJS'}>vanillaJS</option>
                        <option value={'markup'} defaultChecked={inputSelectState == 'markup'}>markup</option>
                        <option value={'react'} defaultChecked={inputSelectState == 'react'}>react</option>
                        <option value={'nextJS'} defaultChecked={inputSelectState == 'nextJS'}>nextJS</option>
                        <option value={usingTextFieldOptionName} defaultChecked={inputSelectState == usingTextFieldOptionName}>신규추가</option>
                    </StyledContentsInputText>
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                <StyledWrapper
                    //$skeletonYN={true}
                >
                    <StyledContentsInputText
                        type={'text'}
                        $styled={{
                            borderBottom : '1.4px solid #0ca8ac',
                            width : '100%',
                            height : '32px',
                            backgroundColor : 'transparent',
                            lineHeight : '32px',
                            transition : 'border-bottom .12s ease',
                            focusingVisible : { borderBottom : '1.4px solid #66f1e1' }
                        }}
                        $styledMobile={{
                            borderBottom : '1.4px solid #0ca8ac',
                            focusingVisible : { borderBottom : '1.4px solid #66f1e1' }
                        }}
                        value={isUseTextTyping ? inputTextState : inputSelectState}
                        onChange={(event) => {
                            if(isUseTextTyping) {
                                setInputTextState(event.currentTarget.value);
                            }
                        }}
                        readOnly={!isUseTextTyping}
                    />
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                <StyledWrapper
                    $styled={{ margin : '0 0 0 14px' }}
                    //$skeletonYN={true}
                >
                    <StyledContentsButton
                        $styled={{
                            height : '32px',
                            padding : '6px',
                            color : '#6B6B6B'
                        }}
                        onClick={(event) => {
                            setInputTextState('');
                            setInputSelectState('');
                        }}
                    >
                        <StyledContentsIconClose />
                    </StyledContentsButton>
                </StyledWrapper>
            </StyledLayoutGridItem>
        </StyledLayoutGrid>
    );
}