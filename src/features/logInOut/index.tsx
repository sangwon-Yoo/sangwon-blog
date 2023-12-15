import { StyledContentsAnchor, StyledContentsSpan } from "@/design-system/module/Contents";
import { signIn, signOut, useSession } from "next-auth/react";
import { StyledWrapper } from "@/design-system/module/Wrapper";

export default function LoginOut() {

    const { data : session, status } = useSession();

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
                {status == 'authenticated' ? (
                    <StyledContentsSpan
                        $styled={{
                            color : 'inherit',
                            fontSize : '0.9rem',
                            fontWeight : 'bold'
                        }}
                        $styledMobile={{
                            fontSize : '0.8rem'
                        }}
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </StyledContentsSpan>
                ) : (
                    <StyledContentsSpan
                        $styled={{
                            color : 'inherit',
                            fontSize : '0.9rem',
                            fontWeight : 'bold'
                        }}
                        $styledMobile={{
                            fontSize : '0.8rem'
                        }}
                        onClick={() => signIn()}
                    >
                        Sign In
                    </StyledContentsSpan>
                )}
            </StyledContentsAnchor>
        </StyledWrapper>
    );
}