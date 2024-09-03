import SelectBoxWithTextFieldA, {
    ExportTypeForSelectBoxWithTextFieldA
} from "@/components/inputs/selectBoxWithTextFieldA";
import FileUploadInputA from "@/components/inputs/fileUploadInputA";

import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APIInternal } from "@/apiClient/apis";
import { ResCategoryList } from "@/types/response";
import { ENDPOINT } from "@/const/endpoint";
import CommonWrapperForSaveItem from "@/components/_blocks/CommonWrapperForSaveItem";
import {QUERY_KEY} from "@/const/queryKey";

export default function SaveCategory(
    {initialCategoryValue, exportFlag, categoryExportSetter, categoryImgExportSetter, imageAcceptTypes, isNew}: {

    initialCategoryValue: ExportTypeForSelectBoxWithTextFieldA;
    exportFlag: boolean;
    categoryExportSetter : Dispatch<ExportTypeForSelectBoxWithTextFieldA>;
    categoryImgExportSetter: Dispatch<SetStateAction<FileList | null>>;
    imageAcceptTypes: string;
    isNew: boolean;
}) {

    const [categoryState, setCategoryState] = useState<ExportTypeForSelectBoxWithTextFieldA>(initialCategoryValue);
    const [categoryImgState, setCategoryImgState] = useState<FileList | null>(null);
    const [isUseCategoryImg, setIsUseCategoryImg] = useState<boolean>(false);

    const optionValueForUsingTextField = '신규추가';

    const doExport = useCallback(
        () => {
            categoryExportSetter(categoryState);
            categoryImgExportSetter(categoryImgState);
        },
        [categoryExportSetter, categoryState, categoryImgExportSetter, categoryImgState]
    );

    const { status, data } = useQuery({
        queryKey : [QUERY_KEY.getCategoryList],
        queryFn : () => APIInternal<ResCategoryList>({
            url : ENDPOINT.getCategoryList,
            contentsType : 'application/json'
        }),
        staleTime : 5 * 60 * 1000,
        retry : false,
    });

    useEffect(() => {
        if(exportFlag) {
            doExport();
        }
    });

    useEffect(() => {
        if(categoryState.type == 'text') {
            setIsUseCategoryImg(true);
        } else {
            setIsUseCategoryImg(false);
        }
    }, [categoryState]);

    return (
        <>
            <CommonWrapperForSaveItem
                child={<SelectBoxWithTextFieldA
                    title={'카테고리'}
                    initialValue={initialCategoryValue}
                    optionValueList={(data && status == 'success') ? data.map(categoryData => categoryData.categoryName) : []}
                    optionValueForUsingTextField={optionValueForUsingTextField}
                    exportFlag={true}
                    exportSetter={setCategoryState}
                    disabled={!isNew}
                />}
            />
            {isUseCategoryImg && (
                <CommonWrapperForSaveItem child={<FileUploadInputA
                    title={'카테고리 대표 이미지'}
                    initialPreviewImgSrc={''}
                    accept={imageAcceptTypes}
                    exportFlag={true}
                    exportSetter={setCategoryImgState} />}
                />
            )}
        </>
    );
}