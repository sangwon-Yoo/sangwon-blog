import { RawDraftContentState } from "draft-js";

export type ReqSaveContents = {
    isNew: boolean;
    categoryName: string;
    categoryImgFile?: File;
    contentsTitle: string;
    contentsSummary: string;
    contentsImgFile?: File;
    editorRaw: RawDraftContentState;
};