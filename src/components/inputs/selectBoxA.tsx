import {
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContentsIconClose } from "@/components/styledIcons";

export default function SelectBoxA({title}: {title: string}) {

    return (
        <StyledLayoutGrid $styled={{
            gridTemplateColumns : '30% 60% 10%',
            gridTemplateAreas :
                '"name name name"' +
                '"selectBox textField close"'
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
            <StyledLayoutGridItem $styled={{ gridArea : 'selectBox' }}>
                <StyledWrapper
                    $styled={{ margin : '0 14px 0 0' }}
                >
                    <StyledContentsInputText
                        name={'category'}
                        as={'select'}
                        $styled={{
                            border : '1.4px solid #0ca8ac',
                            borderRadius : '3px',
                            width : '100%',
                            height : '32px',
                            lineHeight : '32px',
                            backgroundColor : 'transparent',
                            hover : { border : '1.4px solid #66f1e1' }
                        }}
                        $styledMobile={{
                            border : '1.4px solid #0ca8ac',
                            hover : { border : '1.4px solid #66f1e1' }
                        }}
                    >
                        <option value={'vanillaJS'}>vanillaJS</option>
                        <option value={'markup'}>markup</option>
                        <option value={'react'}>react</option>
                        <option value={'nextJS'}>nextJS</option>
                        <option value={'신규추가'}>신규추가</option>
                    </StyledContentsInputText>
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
                    />
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                <StyledWrapper $styled={{
                    height : '32px',
                    padding : '6px'
                }}>
                    <StyledContentsButton
                        $styled={{
                            width : '100%',
                            height : '100%',
                            color : '#6B6B6B'
                        }}
                    >
                        <StyledContentsIconClose />
                    </StyledContentsButton>
                </StyledWrapper>
            </StyledLayoutGridItem>
        </StyledLayoutGrid>
    );
}