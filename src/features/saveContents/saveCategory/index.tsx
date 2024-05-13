import SelectBoxWithTextFieldA, {
    ExportTypeForSelectBoxWithTextFieldA
} from "@/components/inputs/selectBoxWithTextFieldA";
import FileUploadInputA from "@/components/inputs/fileUploadInputA";
import { CommonWrapperForSaveItem } from "@/features/saveContents";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

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

    useEffect(() => {
        if(exportFlag) {
            doExport();
        }
    });

    useEffect(() => {
        console.log(categoryState);
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