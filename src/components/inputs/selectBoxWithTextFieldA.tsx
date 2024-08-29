import {
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContentsIconClose } from "@/components/styledIcons";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

export type ExportTypeForSelectBoxWithTextFieldA = {type: 'select' | 'text'; value: string};
export default function SelectBoxWithTextFieldA(
    {title, initialValue, optionValueList, optionValueForUsingTextField, exportFlag, exportSetter, disabled}: {
    title: string;
    initialValue: ExportTypeForSelectBoxWithTextFieldA;
    optionValueList: Array<string>;
    optionValueForUsingTextField: string;
    exportFlag: boolean;
    exportSetter : Dispatch<SetStateAction<ExportTypeForSelectBoxWithTextFieldA>>;
    disabled: boolean
}) {

    const [inputState, setInputState] = useState<ExportTypeForSelectBoxWithTextFieldA>(initialValue);

    const doExport = useCallback(
        () => exportSetter(inputState),
        [exportSetter, inputState]
    );

    useEffect(() => {
        if(exportFlag) {
            doExport();
        }
    });

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
                        value={inputState.type == 'select' ? inputState.value : optionValueForUsingTextField}
                        onChange={(event) => {
                            if(event.currentTarget.value == optionValueForUsingTextField) {
                                setInputState({ type : 'text', value : '' });
                            } else {
                                setInputState({ type : 'select', value : event.currentTarget.value });
                            }
                        }}
                        disabled={disabled}
                    >
                        <option value={''} defaultChecked={initialValue.value == ''}> -- 선택하세요 -- </option>
                        {optionValueList.map((option, index) => (
                            <option
                                value={option}
                                defaultChecked={initialValue.value == option}
                                key={index}>{option}
                            </option>))}
                        <option value={optionValueForUsingTextField} defaultChecked={initialValue.value == optionValueForUsingTextField}>{optionValueForUsingTextField}</option>
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
                        value={inputState.value}
                        onChange={(event) => {
                            if(inputState.type == 'text') {
                                setInputState({ type : 'text', value : event.currentTarget.value });
                            }
                        }}
                        readOnly={inputState.type == 'select'}
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
                            width : '32px',
                            padding : '6px',
                            color : '#6B6B6B'
                        }}
                        onClick={(event) => {
                            setInputState({ type : 'select', value : '' });
                        }}
                        disabled={disabled}
                    >
                        <StyledContentsIconClose />
                    </StyledContentsButton>
                </StyledWrapper>
            </StyledLayoutGridItem>
        </StyledLayoutGrid>
    );
}