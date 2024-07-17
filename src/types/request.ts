import { RawDraftContentState } from "draft-js";
import { JSONString } from "@/types/globalTypes";

export type ReqSaveContents = {
    isNewCategory: boolean;
    categoryName: string;
    categoryImgFileSrc?: string;
    contentsTitle: string;
    contentsSummary: string;
    contentsImgFileSrc?: string;
    editorRaw: JSONString<RawDraftContentState>;
};

export type ReqUploadContentsImages = {
    categoryImgFile?: File;
    contentsImgFile?: File;
    editorImgFileList: Array<File>
}