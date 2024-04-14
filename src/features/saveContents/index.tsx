import { StyledContents } from "@/design-system/module/Contents";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { ExportTypeForSelectBoxWithTextFieldA } from "@/components/inputs/selectBoxWithTextFieldA";
import TextFieldA from "@/components/inputs/textFieldA";
import TextAreaA from "@/components/inputs/textAreaA";
import ButtonA_long from "@/components/buttons/buttonA_long";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import FileUploadInputA from "@/components/inputs/fileUploadInputA";
import { RawDraftContentState } from "draft-js";
import SaveCategory from "@/features/saveContents/saveCategory";

const DynamicEditor = dynamic(() => import('@/features/writeContents'), {
    ssr : false
})
export default function SaveContents() {

    const [saveFlagState, setSaveFlagState] = useState<boolean>(false);
    const [sendFlagState, setSendFlagState] = useState<boolean>(false);

    const [categoryState, setCategoryState] 
        = useState<ExportTypeForSelectBoxWithTextFieldA>({type : 'select', value : ''});
    const [categoryImgState, setCategoryImgState] = useState<FileList | null>(null);
    const [contentsTitleState, setContentsTitleSate] = useState<string>('');
    const [contentsSummaryState, setContentsSummarySate] = useState<string>('');
    const [contentsImgState, setContentsImgState] = useState<FileList | null>(null);
    const [editorContents, setEditorContents] = useState<RawDraftContentState | null>(null);

    useEffect(() => {
        if(saveFlagState) {
            setSaveFlagState(false);
            setSendFlagState(true);
        }
    }, [saveFlagState]);

    useEffect(() => {
        if(sendFlagState) {
            console.log([categoryState, categoryImgState, contentsTitleState, contentsSummaryState, contentsImgState, editorContents]);
            setSendFlagState(false);
        }
    }, [sendFlagState]);

    const imageAcceptTypes = '.jpg, .jpeg, .png';

    return (
        <StyledWrapper
            $styled={{ margin : '120px 24px 36px 24px' }}
            $styledMobile={{ margin : '80px 24px 36px 24px' }}
        >
            <CommonWrapperForSaveItem child={(
                <>
                    <StyledLayoutFlex $styled={{ flexDirection : 'row-reverse' }}>
                        <StyledLayoutFlexItem>
                            <ButtonA_long title={'저장'} onClick={() => setSaveFlagState(true)} />
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </>
            )} />
            <SaveCategory
                initialValue={categoryState}
                exportFlag={saveFlagState}
                categoryExportSetter={setCategoryState}
                categoryImgExportSetter={setCategoryImgState}
                imageAcceptTypes={imageAcceptTypes}
            />
            <CommonWrapperForSaveItem child={<TextFieldA
                title={'제목'}
                initialValue={contentsTitleState}
                exportFlag={saveFlagState}
                exportSetter={setContentsTitleSate} />}
            />
            <CommonWrapperForSaveItem child={<TextAreaA
                initialValue={contentsSummaryState}
                title={'요약'}
                exportFlag={saveFlagState}
                exportSetter={setContentsSummarySate} />}
            />
            <CommonWrapperForSaveItem child={<FileUploadInputA
                title={'콘텐츠 대표 이미지'}
                initialValue={contentsImgState}
                accept={imageAcceptTypes}
                exportFlag={saveFlagState}
                exportSetter={setContentsImgState} />}
            />
            <StyledWrapper
                $styled={{
                    margin : '0 0 24px 0'
                }}
                $styledMobile={{
                    margin : '0 0 14px 0'
                }}
            >
                <DynamicEditor exportFlag={saveFlagState} exportSetter={setEditorContents} />
            </StyledWrapper>
        </StyledWrapper>
    );
}

export function CommonWrapperForSaveItem({child}: {child: JSX.Element}) {

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