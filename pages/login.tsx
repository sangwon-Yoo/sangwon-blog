import { StyledContents, StyledContentsAnchor, StyledContentsSpan } from "@/design-system/module/Contents";
import { StyledLayoutFlex } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Header from "@/features/header";
import Footer from "@/features/footer";

export default function Login() {

    return (
        <>
            <Header />

            <StyledContents $styled={{ width : '100%', height : '630px' }}>
                <StyledLayoutFlex $styled={{ justifyContent : 'center', alignItems : 'center' }}>
                    <StyledWrapper $styled={{ textAlign : 'center' }}>
                        <StyledContentsAnchor $styled={{
                            display : 'inline-block',
                            width : '276px',
                            height : '38px',
                            lineHeight : '36px',
                            fontSize : '1rem',
                            margin : '4px',
                            border : '1px solid #bdc3c7',
                            borderRadius : '4px',
                            color : '#292929',
                            transition : 'background-color .12s ease',
                            hover : {
                                color : '#292929',
                                backgroundColor : '#f2f3f5'
                            }
                        }}>
                            <StyledWrapper $styled={{ margin : '2px' }}>
                                <StyledContents $styled={{ height : '32px', lineHeight : '32px' }}>
                                    <img src={'/img/googleLogo.png'} style={{
                                        display: 'inline-block',
                                        width : '32px',
                                        height : '32px',
                                        verticalAlign : 'top'
                                    }} />
                                    <StyledContentsSpan $styled={{
                                        display : 'inline-block',
                                        height : '32px',
                                        verticalAlign : 'top'
                                    }}>
                                        {`구글로 로그인`}
                                    </StyledContentsSpan>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledContentsAnchor>
                    </StyledWrapper>
                </StyledLayoutFlex>
            </StyledContents>

            <Footer isPositionFixed={true} />
        </>
    );
}

