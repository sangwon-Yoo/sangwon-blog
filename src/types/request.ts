import { RawDraftContentState } from "draft-js";
import { JSONString } from "@/types/globalTypes";

export type ReqSaveContents = {
    isNewCategory: boolean;
    categoryName: string;
    categoryImgFile?: File;
    contentsTitle: string;
    contentsSummary: string;
    contentsImgFile?: File;
    editorRaw: JSONString<RawDraftContentState>;
};