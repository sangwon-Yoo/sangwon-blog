import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledContentsIconClose } from "@/components/styledIcons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function TextFieldA({title, initialValue, exporting}: {
    title: string;
    initialValue: string;
    exporting: { exportFlag: boolean; setter: Dispatch<SetStateAction<string>>; }
}) {

    const [inputTextState, setInputTextState] = useState<string>(initialValue);

    useEffect(() => {
        if(exporting.exportFlag) {
            exporting.setter(inputTextState);
        }
    }, [exporting.exportFlag]);

    return (
        <StyledLayoutGrid $styled={{
            gridTemplateColumns : '90% 10%',
            gridTemplateAreas :
                '"name name"' +
                '"textField close"'
        }}>
            <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                <StyledWrapper $styled={{ margin : '0 0 10px 0'}}>
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
            <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                <StyledWrapper>
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
                        value={inputTextState}
                        onChange={(event) => setInputTextState(event.currentTarget.value)}
                    />
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                <StyledWrapper
                    $styled={{ margin : '0 0 0 14px' }}
                >
                    <StyledContentsButton
                        $styled={{
                            height : '32px',
                            padding : '6px',
                            color : '#6B6B6B'
                        }}
                        onClick={() => setInputTextState('')}
                    >
                        <StyledContentsIconClose />
                    </StyledContentsButton>
                </StyledWrapper>
            </StyledLayoutGridItem>
        </StyledLayoutGrid>
    );
}