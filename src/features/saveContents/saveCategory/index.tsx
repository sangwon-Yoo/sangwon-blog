import SelectBoxWithTextFieldA, {
    ExportTypeForSelectBoxWithTextFieldA
} from "@/components/inputs/selectBoxWithTextFieldA";
import FileUploadInputA from "@/components/inputs/fileUploadInputA";
import { CommonWrapperForSaveItem } from "@/features/saveContents";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APIInternal } from "@/apiClient/apis";
import { ResCategoryList } from "@/types/response";
import { ENDPOINT } from "@/const/endpoint";

export default function SaveCategory(
    {initialCategoryValue, initialCategoryImgValue, exportFlag, categoryExportSetter, categoryImgExportSetter, imageAcceptTypes}: {

    initialCategoryValue: ExportTypeForSelectBoxWithTextFieldA;
    initialCategoryImgValue: FileList | null;
    exportFlag: boolean;
    categoryExportSetter : Dispatch<ExportTypeForSelectBoxWithTextFieldA>;
    categoryImgExportSetter: Dispatch<SetStateAction<FileList | null>>;
    imageAcceptTypes: string;
}) {

    const [categoryState, setCategoryState] = useState<ExportTypeForSelectBoxWithTextFieldA>(initialCategoryValue);
    const [categoryImgState, setCategoryImgState] = useState<FileList | null>(initialCategoryImgValue);
    const [isUseCategoryImg, setIsUseCategoryImg] = useState<boolean>(!!initialCategoryImgValue);

    const optionValueForUsingTextField = '신규추가';

    const doExport = useCallback(
        () => {
            categoryExportSetter(categoryState);
            categoryImgExportSetter(categoryImgState);
        },
        [categoryExportSetter, categoryState, categoryImgExportSetter, categoryImgState]
    );

    const { status, data } = useQuery({
        queryKey : ['sdfs'],
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
            <CommonWrapperForSaveItem child={<SelectBoxWithTextFieldA
                title={'카테고리'}
                initialValue={initialCategoryValue}
                optionValueList={(data && status == 'success') ? data.map(categoryData => categoryData.categoryName) : []}
                optionValueForUsingTextField={optionValueForUsingTextField}
                exportFlag={true}
                exportSetter={setCategoryState} />}
            />
            {isUseCategoryImg && (
                <CommonWrapperForSaveItem child={<FileUploadInputA
                    title={'카테고리 대표 이미지'}
                    initialValue={initialCategoryImgValue}
                    accept={imageAcceptTypes}
                    exportFlag={true}
                    exportSetter={setCategoryImgState} />}
                />
            )}
        </>
    );
}