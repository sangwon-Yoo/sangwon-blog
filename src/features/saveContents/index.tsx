import { StyledContents, StyledContentsButton } from "@/design-system/module/Contents";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import SelectBoxA from "@/components/inputs/selectBoxA";
import TextFieldA from "@/components/inputs/textFieldA";
import TextAreaA from "@/components/inputs/textAreaA";
import ButtonA_long from "@/components/buttons/buttonA_long";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import('@/features/writeContents'), {
    ssr: false,
})
export default function SaveContents() {



    return (
        <StyledWrapper
            $styled={{ margin : '120px 24px 36px 24px' }}
            $styledMobile={{ margin : '80px 24px 36px 24px' }}
        >
            <CommonWrapper child={(
                <>
                    <StyledLayoutFlex $styled={{ flexDirection : 'row-reverse' }}>
                        <StyledLayoutFlexItem>
                            <ButtonA_long title={'저장'} />
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </>
            )} />
            <CommonWrapper child={<SelectBoxA title={'카테고리'} />} />
            <CommonWrapper child={<TextFieldA title={'카테고리 대표 이미지'} />} />
            <CommonWrapper child={<TextFieldA title={'제목'} />} />
            <CommonWrapper child={<TextAreaA title={'요약'} />} />
            <CommonWrapper child={<TextFieldA title={'콘텐츠 대표 이미지'} />} />
            <StyledWrapper
                $styled={{
                    margin : '0 0 24px 0'
                }}
                $styledMobile={{
                    margin : '0 0 14px 0'
                }}
            >
                <DynamicEditor />
            </StyledWrapper>
        </StyledWrapper>
    );
}

function CommonWrapper({child}: {child: JSX.Element}) {

    return (
        <StyledWrapper
            $styled={{
                margin : '0 0 24px 0'
            }}
            $styledMobile={{
                margin : '0 0 14px 0'
            }}
        >
            <StyledContents
                $styled={{
                    width : '680px',
                    height : 'auto',
                    padding : '20px 20px 6px 20px',
                }}
                $styledMobile={{
                    width : '100%',
                    height : 'auto'
                }}
            >
                {child}
            </StyledContents>
        </StyledWrapper>
    );
}