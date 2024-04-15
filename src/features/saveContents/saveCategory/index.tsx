import SelectBoxWithTextFieldA, {
    ExportTypeForSelectBoxWithTextFieldA
} from "@/components/inputs/selectBoxWithTextFieldA";
import FileUploadInputA from "@/components/inputs/fileUploadInputA";
import { CommonWrapperForSaveItem } from "@/features/saveContents";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

export default function SaveCategory({initialValue, exportFlag, categoryExportSetter, categoryImgExportSetter, imageAcceptTypes}: {
    initialValue: ExportTypeForSelectBoxWithTextFieldA;
    exportFlag: boolean;
    categoryExportSetter : Dispatch<ExportTypeForSelectBoxWithTextFieldA>;
    categoryImgExportSetter: Dispatch<SetStateAction<FileList | null>>;
    imageAcceptTypes: string;
}) {

    const [categoryState, setCategoryState] = useState<ExportTypeForSelectBoxWithTextFieldA>(initialValue);
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
                initialValue={categoryState}
                optionValueForUsingTextField={optionValueForUsingTextField}
                exportFlag={true}
                exportSetter={setCategoryState} />}
            />
            {isUseCategoryImg && (
                <CommonWrapperForSaveItem child={<FileUploadInputA
                    title={'카테고리 대표 이미지'}
                    initialValue={categoryImgState}
                    accept={imageAcceptTypes}
                    exportFlag={true}
                    exportSetter={setCategoryImgState} />}
                />
            )}
        </>
    );
}