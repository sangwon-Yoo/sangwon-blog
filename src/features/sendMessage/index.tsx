import { StyledContentsAnchor } from "@/design-system/module/Contents";
import { StyledContentsIconPaperPlan } from "@/components/styledIcons";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { isMobile } from 'react-device-detect';

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
                href={isMobile ? 'instagram://user?username=yoo.sangwon' : 'https://www.instagram.com/yoo.sangwon' }
                target={'_blank'}
            >
                <StyledContentsIconPaperPlan />
            </StyledContentsAnchor>
        </StyledWrapper>
    );
}