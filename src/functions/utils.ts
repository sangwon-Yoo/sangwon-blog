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