import { ExportTypeForSelectBoxWithTextFieldA } from "@/components/inputs/selectBoxWithTextFieldA";
import { RawDraftContentState } from "draft-js";
import { ReqSaveContents } from "@/types/request";

export const contentsToSaveContentsInput = (
    category: ExportTypeForSelectBoxWithTextFieldA,
    categoryImgFile: FileList | null,
    contentsTitle: string,
    contentsSummary: string,
    contentsImgFile: FileList | null,
    editorContents: RawDraftContentState | null
): ReqSaveContents => {

    return {
        isNewCategory : category.type == 'text',
        categoryName : category.value,
        categoryImgFile : categoryImgFile ? categoryImgFile[0] : undefined,
        contentsTitle : contentsTitle,
        contentsSummary : contentsSummary,
        contentsImgFile : contentsImgFile ? contentsImgFile[0] : undefined,
        editorRaw: JSON.stringify(editorContents).trim(),
    };
}