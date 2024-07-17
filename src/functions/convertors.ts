import { ExportTypeForSelectBoxWithTextFieldA } from "@/components/inputs/selectBoxWithTextFieldA";
import { RawDraftContentState } from "draft-js";
import { ReqSaveContents } from "@/types/request";

export const contentsToSaveContentsInput = (
    category: ExportTypeForSelectBoxWithTextFieldA,
    categoryImgFileSrc: string | null,
    contentsTitle: string,
    contentsSummary: string,
    contentsImgFileSrc: string | null,
    editorContents: RawDraftContentState | null
): ReqSaveContents => {

    return {
        isNewCategory : category.type == 'text',
        categoryName : category.value,
        categoryImgFileSrc : categoryImgFileSrc ? categoryImgFileSrc : undefined,
        contentsTitle : contentsTitle,
        contentsSummary : contentsSummary,
        contentsImgFileSrc : contentsImgFileSrc ? contentsImgFileSrc : undefined,
        editorRaw: JSON.stringify(editorContents).trim(),
    };
}