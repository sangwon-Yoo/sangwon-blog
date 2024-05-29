import { RawDraftContentState } from "draft-js";

export type ReqSaveContents = {
    isNewCategory: boolean;
    categoryName: string;
    categoryImgFile?: File;
    contentsTitle: string;
    contentsSummary: string;
    contentsImgFile?: File;
    editorRaw: RawDraftContentState;
};