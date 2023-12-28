import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledContentsIconClose } from "@/components/styledIcons";

export default function TextAreaA({title}: {title: string}) {

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