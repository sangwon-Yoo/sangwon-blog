import { useSession } from "next-auth/react";
import { StyledContentsAnchor } from "@/design-system/module/Contents";
import { StyledContentsIconEdit } from "@/components/styledIcons";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Link from "next/link";

export default function ToContentsEditor() {

    const { data : session, status } = useSession();

    if(status !== 'authenticated') {
        return null;
    }

    return (
        <StyledWrapper $styled={{ margin : '6px' }}>
            <Link href={'/contentsEditor'}>
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
                    as={'div'}
                >
                    <StyledContentsIconEdit />
                </StyledContentsAnchor>
            </Link>
        </StyledWrapper>
    );
}