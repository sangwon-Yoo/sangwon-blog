import { StyledContents, StyledContentsAnchor, StyledContentsSpan } from "@/design-system/module/Contents";
import { StyledLayoutFlex } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

export default function Login() {

    return (
        <>
            <Header />

            <StyledContents $styled={{ width : '100%', height : '630px' }}>
                <StyledLayoutFlex $styled={{ justifyContent : 'center', alignItems : 'center' }}>
                    <StyledWrapper $styled={{ textAlign : 'center' }}>
                        <Script src="https://accounts.google.com/gsi/client" async={true} />
                        <div id="g_id_onload"
                             data-client_id={'159925926764-0s0f69pan7evuatqtn1cpp4pujcda3dp.apps.googleusercontent.com'}
                             data-login_uri="http://localhost:3000/home"
                             data-auto_prompt="false">
                        </div>
                        <div className="g_id_signin"
                             data-type="standard"
                             data-size="large"
                             data-theme="outline"
                             data-text="sign_in_with"
                             data-shape="rectangular"
                             data-logo_alignment="left">
                        </div>
                        {/*<StyledContentsAnchor $styled={{
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
                            <StyledWrapper $styled={{margin: '2px'}}>
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
                        </StyledContentsAnchor>*/}
                    </StyledWrapper>
                </StyledLayoutFlex>
            </StyledContents>

            <Footer isPositionFixed={true}/>
        </>
    );
}

