import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledContentsIconClose } from "@/components/styledIcons";

export default function TextFieldA({title}: {title: string}) {

    return (
        <StyledContents
            $styled={{
                width : '680px',
                height : 'auto',
                padding : '20px 20px 6px 20px'
            }}
            $styledMobile={{
                width : '100%',
                height : 'auto'
            }}
        >
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
        </StyledContents>
    );
}