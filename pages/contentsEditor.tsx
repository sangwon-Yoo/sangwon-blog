import {
    StyledLayoutFlex,
    StyledLayoutFlexItem
} from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Top from "@/components/top";
import Footer from "@/components/footer";
import SaveContents from "@/features/saveContents";
import SelectBoxWithTextFieldA from "@/components/inputs/selectBoxWithTextFieldA";
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
                <StyledLayoutFlexItem>
                    <SaveContents />
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>

            <Footer />
        </>
    );
}