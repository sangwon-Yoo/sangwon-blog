import {
    StyledLayoutFlex,
    StyledLayoutFlexItem
} from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import Top from "@/components/top";
import Footer from "@/components/footer";
import EditContents from "@/features/editContents";
import SelectBoxWithTextFieldA from "@/components/inputs/selectBoxWithTextFieldA";
import TextFieldA from "@/components/inputs/textFieldA";
import TextAreaA from "@/components/inputs/textAreaA";
import WriteContents from "@/features/writeContents";

export default function ContentsEditor({isNew = true}: {isNew?: boolean}) {

    return (
        <>
            <Top />

            <StyledLayoutFlex
                $styled={{ flexDirection : 'column', alignItems : 'center' }}
                $styledMobile={{ flexDirection : 'column', alignItems : 'stretch' }}
            >
                <StyledLayoutFlexItem>
                    <EditContents isNew={isNew} />
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>

            <Footer />
        </>
    );
}