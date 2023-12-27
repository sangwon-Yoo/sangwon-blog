import {
    StyledLayoutFlex,
    StyledLayoutFlexItem
} from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Top from "@/components/top";
import Footer from "@/components/footer";
import SaveContents from "@/features/saveContents";
import SelectBoxA from "@/components/inputs/selectBoxA";
import TextFieldA from "@/components/inputs/textFieldA";
import TextAreaA from "@/components/inputs/textAreaA";
import WriteContents from "@/features/writeContents";

export default function ContentsEditor() {


    return (
        <>
            <Top />

            <StyledLayoutFlex
                $styled={{ flexDirection : 'column', alignItems : 'center' }}
                $styledMobile={{ flexDirection : 'column', alignItems : 'stretch' }}
            >
                <StyledLayoutFlexItem
                    $styled={{ flex : '0 0 auto' }}
                    $styledMobile={{ flex : '0 0 auto' }}
                >
                    <StyledWrapper
                        $styled={{ margin : '120px 24px 36px 24px' }}
                        $styledMobile={{ margin : '80px 24px 36px 24px' }}
                    >
                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <SaveContents />
                        </StyledWrapper>
                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <SelectBoxA />
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <TextFieldA title={'Title'} />
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <TextAreaA />
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <TextFieldA title={'Thumbnail'} />
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <WriteContents />
                        </StyledWrapper>
                    </StyledWrapper>
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>


            <Footer />
        </>
    );
}