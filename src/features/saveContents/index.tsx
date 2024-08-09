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
import { RawDraftContentState, RawDraftEntity } from "draft-js";
import SaveCategory from "@/features/saveContents/saveCategory";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { APIInternal } from "@/apiClient/apis";
import { ENDPOINT } from "@/const/endpoint";
import { ReqSaveContents } from "@/types/request";
import { contentsToSaveContentsInput } from "@/functions/convertors";
import { PutBlobResult } from "@vercel/blob";

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

    const mutateSaveContents: UseMutationResult<null, Error, ReqSaveContents> = useMutation({
        mutationFn : variables => APIInternal<null>({
            url : ENDPOINT.saveContents,
            method : 'POST',
            contentsType : 'application/json',
            body : JSON.stringify(variables)
        })
    });

    const mutatePutBlob: UseMutationResult<Array<PutBlobResult | null>, Error, Array<{file : File, path: string} | null>> = useMutation({
        mutationFn : variables => Promise.all(variables.map(
            fileInput => APIInternal<PutBlobResult | null>({
                url : ENDPOINT.uploadImage + `?savePath=${fileInput?.path}`,
                method : 'POST',
                body : fileInput?.file || null,
            })
        )),
        onSuccess : (data) => {
            const [
                categoryImg,
                contentsImg,
                ...editorImgList
            ] = data;

            if(!categoryImg || !contentsImg || !editorContents) {
                console.error('no editorContents data');
                return;
            }

            let editorImgListIndex = 0;

            const updatedRawContentState: RawDraftContentState = {
                ...editorContents,
                entityMap: Object.keys(editorContents.entityMap).reduce<{[p: string]: RawDraftEntity}>((acc, key) => {
                    const entity = editorContents.entityMap[key];
                    if (entity.type === 'IMAGE') {
                        acc[key] = {
                            ...entity,
                            data: {
                                /*...entity.data,*/
                                src : editorImgList[editorImgListIndex]?.url // 새로운 URL로 교체
                            }
                        };
                        ++editorImgListIndex;
                    } else {
                        acc[key] = entity;
                    }
                    return acc;
                }, {})
            };

            mutateSaveContents.mutate(contentsToSaveContentsInput(
                categoryState, categoryImg.url, contentsTitleState, contentsSummaryState, contentsImg.url, updatedRawContentState
            ));
        },
        onError: error => {
            alert(`저장실패!\n${error.message}`);
        }
    });

    /*const { mutate, status }: UseMutationResult<null, Error, ReqSaveContents> = useMutation({
        mutationFn : variables => APIInternal<null>({
            url : ENDPOINT.saveContents,
            contentsType : 'application/json',
            method : 'POST',
            body : JSON.stringify(variables).trim(),
        }),
        onSuccess : () => {
            alert('저장!');
        },
        onError: error => {
            alert(`저장실패!\n${error.message}`);
        }
    });*/
    /*
    const { mutate, status }: UseMutationResult<null, Error, ReqUploadContentsImages> = useMutation({
        mutationFn : uploadContentsImages => {



            return Promise.all([
                uploadContentsImages.categoryImgFile, uploadContentsImages.contentsImgFile, ...uploadContentsImages.editorImgFileList
            ].);
        }


            APIInternal<null>({
            url : ENDPOINT.saveContents,
            method : 'POST',
            body : JSON.stringify(variables).trim(),
        }),
        onSuccess : () => {
            alert('저장!');
        },
        onError: error => {
            alert(`저장실패!\n${error.message}`);
        }
    });*/

    useEffect(() => {
        if(saveFlagState) {
            setSaveFlagState(false);
            setSendFlagState(true);
        }
    }, [saveFlagState]);

    useEffect(() => {

        if(sendFlagState) {
            if(isValidateForSending(categoryState, categoryImgState, contentsTitleState, contentsSummaryState, editorContents)) {
                console.log(categoryState, categoryImgState, contentsTitleState, contentsSummaryState, editorContents);

                let uploadImgList = [
                    categoryImgState ? {file : categoryImgState[0], path : `${categoryState.value}/${categoryImgState[0].name}`} : null,
                    contentsImgState ? {file : contentsImgState[0], path : `${categoryState.value}/${contentsTitleState}/${contentsImgState[0].name}`} : null
                ];

                if(editorContents?.entityMap) {
                    const editorImgList = Object.values(editorContents.entityMap).filter(
                        entity => entity.type == 'IMAGE'
                    ).map(
                        imgEntity => {
                            return {
                                file : imgEntity.data.tmpFile,
                                path : `editors/${contentsTitleState}/${imgEntity.data.tmpFile.name}`
                            };
                        }
                    );

                    uploadImgList = uploadImgList.concat(editorImgList);
                }

                mutatePutBlob.mutate(uploadImgList);
            } else {
                alert('필수 항목을 모두 입력하세요.');
            }
            setSendFlagState(false);
        }
    }, [
        categoryImgState,
        categoryState,
        contentsImgState,
        contentsSummaryState,
        contentsTitleState,
        editorContents,
        mutatePutBlob.mutate,
        sendFlagState
    ]);

    const imageAcceptTypes = '.jpg, .jpeg, .png';

    const isValidateForSending = (
        category: ExportTypeForSelectBoxWithTextFieldA,
        categoryImg: FileList | null,
        contentsTitle: string,
        contentsSummary: string,
        editorContents: RawDraftContentState | null
    ): boolean => {
        if(category.type == 'select') {
            return (!!category.value && !!contentsTitle && !!contentsSummary && !!editorContents);
        } else if(category.type == 'text') {
            return (!!category.value && !!categoryImg && !!contentsTitle && !!contentsSummary && !!editorContents);
        }

        return false;
    };

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
                initialCategoryValue={categoryState}
                initialCategoryImgValue={categoryImgState}
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
                title={'콘텐츠 대표 이미지(선택)'}
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