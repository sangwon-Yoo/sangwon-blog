import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledContentsIconClose } from "@/components/styledIcons";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

export default function TextAreaA({title, initialValue, exporting}: {
    title: string;
    initialValue: string;
    exporting: { exportFlag: boolean; setter: Dispatch<SetStateAction<string>> }
}) {

    const [textAreaState, setTextAreaState] = useState<string>(initialValue);

    useEffect(() => {
        if(exporting.exportFlag) {
            exporting.setter(textAreaState);
        }
    }, [exporting.exportFlag]);

    return (
        <StyledLayoutGrid $styled={{
            gridTemplateColumns : '90% 10%',
            gridTemplateAreas :
                '"name name"' +
                '"textArea close"'
        }}>
            <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                <StyledWrapper $styled={{ margin : '0 0 10px 0' }}>
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
            <StyledLayoutGridItem $styled={{ gridArea : 'textArea' }}>
                <StyledWrapper>
                    <StyledContentsInputText
                        $styled={{
                            border : '1.4px solid #0ca8ac',
                            borderRadius : '3px',
                            width : '100%',
                            height : '100px',
                            backgroundColor : 'transparent',
                            transition : 'border .12s ease',
                            focusingVisible : { border : '1.4px solid #66f1e1' }
                        }}
                        $styledMobile={{
                            border : '1.4px solid #0ca8ac',
                            focusingVisible : { border : '1.4px solid #66f1e1' }
                        }}
                        as={'textarea'}
                        value={textAreaState}
                        onChange={(event) => setTextAreaState(event.currentTarget.value)}
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
                        onClick={() => setTextAreaState('')}
                    >
                        <StyledContentsIconClose />
                    </StyledContentsButton>
                </StyledWrapper>
            </StyledLayoutGridItem>
        </StyledLayoutGrid>
    );
}