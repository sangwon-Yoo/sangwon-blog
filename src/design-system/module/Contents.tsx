import styled, { css, keyframes } from "styled-components";
import {
    CSSCursor, CSSDisplay, CSSFontWeight,
    CSSOverflow, CSSPosition, CSSTextAlign,
    CSSTextOverflow, CSSVerticalAlign, CSSWhiteSpace,
    FocusingVisible, Hovering, StyledProps
} from "../CommonType";
import { isMobile } from "../MediaQuery";

/**
  회고 : 콘텐츠 컴포넌트 부분은 굳이 스타일드로 속성을 안만들어도 될거 같다. div 컴포넌트를 만든 후 모바일 / 피씨 구분 후 CSS 프로퍼티를 다 넣어버리는게 나을듯!하다.(as 프로퍼티 사용)
 */


/*
    콘텐츠 영역으로 실제 구성요소가 들어가고 너비, 높이가 display block 엘리먼트에 한해서 필수값이다.
*/

export const keyFrameSkeleton = keyframes`
    to {
        background-position-x: -200%;
    }
`;

type StyledContentsProps = StyledProps<{
    position?: CSSPosition;
    display?: CSSDisplay;
    width?: string;
    height: string;
    padding?: string;
    lineHeight?: string;
    border?: string;
    borderTop?: string;
    borderRadius?: string;
    backgroundColor?: string;
    opacity?: number;
    overflow?: CSSOverflow;
    overflowY?: CSSOverflow;
    backgroundImage?: string;
}>;
export const StyledContents = styled.div<StyledContentsProps>`
  position: ${props => props.$styled?.position};
  display: ${props => props.$styled?.display};
  width: ${props => props.$styled?.width || '100%'};
  height: ${props => props.$styled?.height};
  padding: ${props => props.$styled?.padding};
  line-height: ${props => props.$styled?.lineHeight};
  border: ${props => props.$styled?.border};
  border-top: ${props => props.$styled?.borderTop};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  opacity: ${props => props.$styled?.opacity};
  overflow: ${props => props.$styled?.overflow};
  overflow-y: ${props => props.$styled?.overflowY};;
  background-image: ${
    props => props.$styled?.backgroundImage && css`url(${props.$styled.backgroundImage})`
  };
  
  ${isMobile} {
    position: ${props => props.$styledMobile?.position};
    display: ${props => props.$styledMobile?.display};
    width: ${props => props.$styledMobile?.width};
    height: ${props => props.$styledMobile?.height};
    padding: ${props => props.$styledMobile?.padding};
    line-height: ${props => props.$styledMobile?.lineHeight};
    border: ${props => props.$styledMobile?.border};
    border-top: ${props => props.$styledMobile?.borderTop};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    opacity: ${props => props.$styledMobile?.opacity};
    overflow: ${props => props.$styledMobile?.overflow};
    overflow-y: ${props => props.$styledMobile?.overflowY};;
    background-image: ${
        props => (
            props.$styledMobile?.backgroundImage && css`url(${props.$styledMobile.backgroundImage})`
        )
    };
  }
`;


type StyledContentsSpanProps = StyledProps<{
    display?: CSSDisplay;
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    textAlign?: CSSTextAlign;
    fontSize?: string;
    fontWeight?: CSSFontWeight;
    color?: string;
    lineHeight?: string;
    verticalAlign?: CSSVerticalAlign;
}>;
export const StyledContentsSpan = styled.span<StyledContentsSpanProps>`
  display: ${props => props.$styled?.display};
  width: ${props => props.$styled?.width};
  height: ${props => props.$styled?.height};
  border: ${props => props.$styled?.border};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  margin: ${props => props.$styled?.margin};
  margin-top: ${props => props.$styled?.marginTop};
  margin-bottom: ${props => props.$styled?.marginBottom};
  padding: ${props => props.$styled?.padding};
  padding-top: ${props => props.$styled?.paddingTop};
  padding-bottom: ${props => props.$styled?.paddingBottom};
  text-align: ${props => props.$styled?.textAlign};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color || props.theme.color.black};
  line-height: ${props => props.$styled?.lineHeight};
  vertical-align: ${props => props.$styled?.verticalAlign};
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    width: ${props => props.$styledMobile?.width};
    height: ${props => props.$styledMobile?.height};
    border: ${props => props.$styledMobile?.border};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    margin: ${props => props.$styledMobile?.margin};
    margin-top: ${props => props.$styledMobile?.marginTop};
    margin-bottom: ${props => props.$styledMobile?.marginBottom};
    padding: ${props => props.$styledMobile?.padding};
    padding-top: ${props => props.$styledMobile?.paddingTop};
    padding-bottom: ${props => props.$styledMobile?.paddingBottom};
    text-align: ${props => props.$styledMobile?.textAlign};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    line-height: ${props => props.$styledMobile?.lineHeight};
    vertical-align: ${props => props.$styledMobile?.verticalAlign};
  }

    
`;


type StyledContentsParagraphProps = StyledProps<{
    width?: string;
    height: string;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: CSSFontWeight;
    color?: string;
    textAlign?: CSSTextAlign;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    overflow?: CSSOverflow;
    textOverflow?: CSSTextOverflow;
    whiteSpace?: CSSWhiteSpace;
}>;
export const StyledContentsParagraph = styled.p<StyledContentsParagraphProps>`
  width: ${props => props.$styled?.width || '100%'};
  height: ${props => props.$styled?.height};
  line-height: ${props => props.$styled?.lineHeight};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color || props.theme.color.black};
  text-align: ${props => props.$styled?.textAlign};
  margin: ${props => props.$styled?.margin};
  margin-top: ${props => props.$styled?.marginTop};
  margin-bottom: ${props => props.$styled?.marginBottom};
  padding: ${props => props.$styled?.padding};
  padding-top: ${props => props.$styled?.paddingTop};
  padding-bottom: ${props => props.$styled?.paddingBottom};
  overflow: ${props => props.$styled?.overflow};
  text-overflow: ${props => props.$styled?.textOverflow};
  white-space: ${props => props.$styled?.whiteSpace};
  
  ${isMobile} {
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    line-height: ${props => props.$styledMobile?.lineHeight};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign};
    margin: ${props => props.$styledMobile?.margin};
    margin-top: ${props => props.$styledMobile?.marginTop};
    margin-bottom: ${props => props.$styledMobile?.marginBottom};
    padding: ${props => props.$styledMobile?.padding};
    padding-top: ${props => props.$styledMobile?.paddingTop};
    padding-bottom: ${props => props.$styledMobile?.paddingBottom};
    overflow: ${props => props.$styledMobile?.overflow};
    text-overflow: ${props => props.$styledMobile?.textOverflow};
    white-space: ${props => props.$styledMobile?.whiteSpace};
  }
`;


type StyledContentsAnchorProps = StyledProps<{
    display?: CSSDisplay;
    height?: string;
    width?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: CSSFontWeight;
    color?: string;
    textAlign?: CSSTextAlign;
    verticalAlign?: CSSVerticalAlign;
    margin?: string;
    padding?: string;
    cursor?: CSSCursor;
    transition?: string;
    hover?: Hovering;
}>;
export const StyledContentsAnchor = styled.a<StyledContentsAnchorProps>`
  display: ${props => props.$styled?.display};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width || '100%'};
  border: ${props => props.$styled?.border};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  line-height: ${props => props.$styled?.lineHeight};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color};
  text-align: ${props => props.$styled?.textAlign};
  vertical-align: ${props => props.$styled?.verticalAlign};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  cursor: ${props => props.$styled?.cursor || 'pointer'};
  transition: ${props => props.$styled?.transition};
  &:hover {
    color: ${props => props.$styled?.hover?.color};
    background-color: ${props => props.$styled?.hover?.backgroundColor};
  }
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    border: ${props => props.$styledMobile?.border};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    line-height: ${props => props.$styledMobile?.lineHeight};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign}
    vertical-align: ${props => props.$styledMobile?.verticalAlign};;
    margin: ${props => props.$styledMobile?.margin};
    padding: ${props => props.$styledMobile?.padding};
    cursor: ${props => props.$styledMobile?.cursor};
    transition: ${props => props.$styledMobile?.transition};
    &:hover {
      color: ${props => props.$styledMobile?.hover?.color};
      background-color: ${props => props.$styledMobile?.hover?.backgroundColor};
    }
  }
`;


type StyledContentsButtonProps = StyledProps<{
    display?: CSSDisplay;
    height?: string;
    width?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: CSSFontWeight;
    color?: string;
    textAlign?: CSSTextAlign;
    margin?: string;
    padding?: string;
    cursor?: CSSCursor;
    transition?: string;
    hover?: Hovering;
}>;
export const StyledContentsButton = styled.button<StyledContentsButtonProps>`
  display: ${props => props.$styled?.display};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width || '100%'};
  border: ${props => props.$styled?.border};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  line-height: ${props => props.$styled?.lineHeight};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color};
  text-align: ${props => props.$styled?.textAlign};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  cursor: ${props => props.$styled?.cursor || 'pointer'};
  transition: ${props => props.$styled?.transition};
  &:hover {
    color: ${props => props.$styled?.hover?.color};
    background-color: ${props => props.$styled?.hover?.backgroundColor};
  }
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    border: ${props => props.$styledMobile?.border};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    line-height: ${props => props.$styledMobile?.lineHeight};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign};
    margin: ${props => props.$styledMobile?.margin};
    padding: ${props => props.$styledMobile?.padding};
    cursor: ${props => props.$styledMobile?.cursor};
    transition: ${props => props.$styledMobile?.transition};
    &:hover {
      color: ${props => props.$styledMobile?.hover?.color};
      background-color: ${props => props.$styledMobile?.hover?.backgroundColor};
    }
  }
`;


type StyledContentsInputTextProps = StyledProps<{
    display?: CSSDisplay;
    height?: string;
    width?: string;
    padding?: string;
    outline?: string;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    backgroundColor?: string;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: CSSFontWeight;
    color?: string;
    transition?: string;
    focusingVisible?: FocusingVisible;
    hover?: Hovering;
}>;
export const StyledContentsInputText = styled.input<StyledContentsInputTextProps>`
  display: ${props => props.$styled?.display};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width || '100%'};
  padding: ${props => props.$styled?.padding};
  outline: ${props => props.$styled?.outline};
  border: ${props => props.$styled?.border};
  border-bottom: ${props => props.$styled?.borderBottom};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  line-height: ${props => props.$styled?.lineHeight};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color};
  transition: ${props => props.$styled?.transition};
  &:focus-visible {
    outline: ${props => props.$styled?.focusingVisible?.outline};
    border: ${props => props.$styled?.focusingVisible?.border};
    border-bottom: ${props => props.$styled?.focusingVisible?.borderBottom};
  }
  &:hover {
    border: ${props => props.$styled?.hover?.border};
  }
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    padding: ${props => props.$styledMobile?.padding};
    outline: ${props => props.$styledMobile?.outline};
    border: ${props => props.$styledMobile?.border};
    border-bottom: ${props => props.$styledMobile?.borderBottom};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    line-height: ${props => props.$styledMobile?.lineHeight};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    transition: ${props => props.$styledMobile?.transition};
    &:focus-visible {
      outline: ${props => props.$styledMobile?.focusingVisible?.outline};
      border: ${props => props.$styledMobile?.focusingVisible?.border};
      border-bottom: ${props => props.$styledMobile?.focusingVisible?.borderBottom};
    }
    &:hover {
      border: ${props => props.$styledMobile?.hover?.border};
    }
  }
`;