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
import SaveCategory from "@/features/editContents/saveCategory";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { APIInternal } from "@/apiClient/apis";
import { ENDPOINT } from "@/const/endpoint";
import { ReqSaveContents, ReqUpdateContents} from "@/types/request";
import {contentsToSaveContentsInput, contentsToUpdateContentsInput} from "@/functions/convertors";
import {ResSaveContents, ResUpdateContents, ResUploadBlob} from "@/types/response";
import CommonWrapperForSaveItem from "@/components/_blocks/CommonWrapperForSaveItem";
import useGetContents from "@/hook/useGetContents";
import {isEmptyObj} from "@/functions/utils";
import {useRouter} from "next/router";
import {QUERY_PARAM} from "@/const/queryParam";

const DynamicEditor = dynamic(() => import('@/features/writeContents'), {
    ssr : false
})
export default function EditContents({isNew}: {isNew: boolean}) {

    const contentsData = useGetContents();

    const [saveFlagState, setSaveFlagState] = useState<boolean>(false);
    const [sendFlagState, setSendFlagState] = useState<boolean>(false);

    const [categoryState, setCategoryState] 
        = useState<ExportTypeForSelectBoxWithTextFieldA>({type : 'select', value : contentsData.data?.categoryName || ''});
    const [categoryImgState, setCategoryImgState] = useState<FileList | null>(null);
    const [contentsTitleState, setContentsTitleSate] = useState<string>(contentsData.data?.title || '');
    const [contentsSummaryState, setContentsSummarySate] = useState<string>(contentsData.data?.subTitle || '');
    const [contentsImgState, setContentsImgState] = useState<FileList | null>(null);
    const [editorContents, setEditorContents] = useState<RawDraftContentState | null>(null);
    const router = useRouter();

    const mutateSaveContents: UseMutationResult<ResSaveContents | null, Error, ReqSaveContents> = useMutation({
        mutationFn : variables => APIInternal<ResSaveContents>({
            url : ENDPOINT.saveContents,
            method : 'POST',
            contentsType : 'application/json',
            body : JSON.stringify(variables)
        }),
        retry : false,
        onSuccess : async (data) => await router.push(`/contents/${data?.contentsSummaryId}`)

    });

    const mutateUpdateContents: UseMutationResult<ResUpdateContents | null, Error, ReqUpdateContents> = useMutation({
        mutationFn : variables => APIInternal<ResUpdateContents>({
            url : ENDPOINT.updateContents,
            method : 'PUT',
            contentsType : 'application/json',
            body : JSON.stringify(variables)
        }),
        retry : false,
        onSuccess : async (data) => await router.push(`/contents/${data?.contentsSummaryId}`)
    });

    const mutateDeleteContents: UseMutationResult<null, Error, number> = useMutation({
        mutationFn : id => APIInternal<null>({
            url : `${ENDPOINT.deleteContents}?${QUERY_PARAM.contentsSummaryId}=${id}`,
            method : 'DELETE',
            contentsType : 'application/json',
        }),
        retry : false,
        onSuccess : async () => await router.push(`/home`)
    });


    const mutatePutBlob: UseMutationResult<Array<ResUploadBlob | null>, Error, Array<{file : File, path: string} | null>> = useMutation({
        mutationFn : variables => Promise.all(variables.map(
            fileInput => {
                if(!fileInput) return null;
                return APIInternal<ResUploadBlob | null>({
                    url: ENDPOINT.uploadImage + `?savePath=${fileInput?.path}`,
                    method: 'POST',
                    body: fileInput?.file || null
                });
            }
        )),
        retry : false,
        onSuccess : (data) => {
            const [
                categoryImg,
                contentsImg,
                ...editorImgList
            ] = data;

            if(!editorContents) {
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
                                ...entity.data,
                                src : editorImgList[editorImgListIndex]?.blobUrl || entity.data?.src // 새로운 URL로 교체
                            }
                        };
                        ++editorImgListIndex;
                    } else {
                        acc[key] = entity;
                    }
                    return acc;
                }, {})
            };

            if(isNew) {
                mutateSaveContents.mutate(contentsToSaveContentsInput(
                    categoryState,
                    categoryImg?.blobUrl || null,
                    contentsTitleState,
                    contentsSummaryState,
                    contentsImg?.blobUrl || null,
                    updatedRawContentState
                ));
            } else {
                mutateUpdateContents.mutate(contentsToUpdateContentsInput(
                    contentsTitleState,
                    contentsSummaryState,
                    contentsImg?.blobUrl || null,
                    updatedRawContentState,
                    contentsData.data?.contentsSummaryId || 0
                ));
            }
        },
        onError: error => {
            alert(`저장실패!\n${error.message}`);
        }
    });

    useEffect(() => {
        if(saveFlagState) {
            setSaveFlagState(false);
            setSendFlagState(true);
        }
    }, [saveFlagState]);

    useEffect(() => {

        if(sendFlagState) {
            setSendFlagState(false);
            if(isValidateForSending(categoryState, categoryImgState, contentsTitleState, contentsSummaryState, editorContents)) {
                console.log(categoryState, categoryImgState, contentsImgState, contentsTitleState, contentsSummaryState, editorContents);

                let uploadImgList = [
                    categoryImgState ? {file : categoryImgState[0], path : `${categoryState.value}/${categoryImgState[0].name}`} : null,
                    contentsImgState ? {file : contentsImgState[0], path : `${categoryState.value}/${contentsTitleState}/${contentsImgState[0].name}`} : null
                ];

                if(editorContents?.entityMap) {
                    const editorImgList = Object.values(editorContents.entityMap).filter(
                        entity => entity.type == 'IMAGE'
                    ).map(
                        imgEntity => {
                            return (!isEmptyObj(imgEntity.data?.tmpFile)) ? { //tmpFile 이 있으면 로컬에서 신규로 올린 것.
                                file : imgEntity.data?.tmpFile,
                                path : `${categoryState.value}/${contentsTitleState}/editor/${imgEntity.data.tmpFile.name}`
                            } : null;
                        }
                    );

                    uploadImgList = uploadImgList.concat(editorImgList);
                }

                mutatePutBlob.mutate(uploadImgList);
            } else {
                alert('필수 항목을 모두 입력하세요.');
            }
        }
    }, [categoryImgState, categoryState, contentsImgState, contentsSummaryState, contentsTitleState, editorContents, mutatePutBlob, mutatePutBlob.mutate, sendFlagState]);

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
                        {isNew && (
                            <StyledLayoutFlexItem>
                                <ButtonA_long title={'저장'} onClick={() => setSaveFlagState(true)}/>
                            </StyledLayoutFlexItem>)
                        }
                        {!isNew && (
                            <>
                                <StyledLayoutFlexItem $styled={{ flex : '0 0 136px'}}>
                                    <ButtonA_long title={'삭제'} onClick={() => mutateDeleteContents.mutate(contentsData?.data?.contentsSummaryId || 0)} />
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem $styled={{ flex : '0 0 136px'}}>
                                    <ButtonA_long title={'수정'} onClick={() => setSaveFlagState(true)} />
                                </StyledLayoutFlexItem>
                            </>
                        )}
                    </StyledLayoutFlex>
                </>
            )} />
            <SaveCategory
                initialCategoryValue={categoryState}
                exportFlag={saveFlagState}
                categoryExportSetter={setCategoryState}
                categoryImgExportSetter={setCategoryImgState}
                imageAcceptTypes={imageAcceptTypes}
                isNew={isNew}
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
                initialPreviewImgSrc={contentsData.data?.representativeImgURL || ''}
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