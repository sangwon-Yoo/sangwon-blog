export type InternalResponseDTO<T> = {
    returnCode: '00' | '01'; // '00' : 성공, '01' : 실패, ...
    returnMessage: string;
    errorMessage: string;
    returnData: T | null;
}