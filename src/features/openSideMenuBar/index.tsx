import { StyledContentsAnchor } from "@/design-system/module/Contents";
import { StyledContentsIconMenu } from "@/components/styledIcons";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { Dispatch, SetStateAction } from "react";

export default function OpenSideMenuBar(
    {setShowSideMenuBarYN}: {setShowSideMenuBarYN: Dispatch<SetStateAction<boolean>>}
) {

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
                onClick={() => setShowSideMenuBarYN(true)}
            >
                <StyledContentsIconMenu />
            </StyledContentsAnchor>
        </StyledWrapper>
    );
}