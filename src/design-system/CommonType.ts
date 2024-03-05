export type StyledProps<PropsType> = {
    $styled?: PropsType;
    $styledMobile?: PropsType;
    $skeletonYN?: boolean;
};

export type CSSPosition = 'relative' | 'absolute' | 'sticky' | 'fixed';
export type CSSDisplay = 'block' | 'inline-block' | 'flex' | 'grid';
export type CSSOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';
export type CSSFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type CSSJustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type CSSAlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type CSSFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type CSSTextAlign = 'start' | 'end' | 'center' | 'justify';
export type CSSVerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'sub' | 'text-top';
export type CSSTextOverflow = 'clip' | 'ellipsis';
export type CSSFontWeight = 'normal' | 'bold' | 'lighter' | 'bolder';
export type CSSWhiteSpace = 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
export type CSSCursor = 'help' | 'wait' | 'crosshair' | 'not-allowed' | 'zoom-in' | 'grab' | 'pointer' | 'auto';

export type Hovering = {
    color?: string;
    backgroundColor?: string;
    border?: string;
}
export type FocusingVisible = {
    border?: string;
    borderBottom?: string;
    outline?: string;
}