import { StyledContentsAnchor } from "@/design-system/module/Contents";
import { StyledContentsIconPaperPlan } from "@/components/styledIcons";
import { StyledWrapper } from "@/design-system/module/Wrapper";

export default function SendMessage() {
    
    return (
        <StyledWrapper $styled={{ margin : '6px' }}>
            <StyledContentsAnchor
                $styled={{
                    display : 'block',
                    padding : '7px',
                    color : '#0ca8ac',
                    borderRadius : '2px',
                    transition : 'background-color .12s ease',
                    hover : { backgroundColor : '#ececeb' }
                }}
                $styledMobile={{
                    hover : { color : '#66f1e1', backgroundColor : 'unset' }
                }}
            >
                <StyledContentsIconPaperPlan />
            </StyledContentsAnchor>
        </StyledWrapper>
    );
}