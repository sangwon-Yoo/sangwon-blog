export type InternalResponseDTO<T> = {
    returnCode: '00' | '01'; // '00' : 성공, '01' : 실패, ...
    returnMessage: string;
    errorMessage: string;
    returnData: T | null;
};

export type ResUploadBlob = {
    blobUrl: string;
};

export type ResCategoryList = Array<{
    categoryName: string;
}>;

export type ResContents = {
    categoryName : string;
    title : string;
    subTitle : string;
    representativeImgURL : string | null;
    createdDate: Date | null;
    updatedDate: Date | null;
    contentsData : {
        contentsHtml : string;
    } | null;
}