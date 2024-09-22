import { HtmlString } from "@/types/globalTypes";

export const escapeHtml =  (htmlStr: HtmlString): string => {

    return htmlStr.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export const isEmptyObj = (data: Object | undefined | null) => {
    return (!data || Object.keys(data).length === 0);
};

export const getZeroIndexString = (input: string | Array<string> | undefined | null): string | null => {

    if(!input) return null;
    return (Array.isArray(input) ? input[0] : input);
}