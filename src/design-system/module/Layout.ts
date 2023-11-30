import styled from "styled-components";
import { CSSAlignItems, CSSFlexDirection, CSSFlexWrap, CSSJustifyContent, StyledProps } from "../CommonType";
import { isMobile } from "../MediaQuery";


/*
    레이아웃을 담당하는 컴포넌트
*/

type StyledLayoutFlexProps = StyledProps<{
    flexDirection?: CSSFlexDirection;
    justifyContent?: CSSJustifyContent;
    alignItems?: CSSAlignItems;
    flexWrap?: CSSFlexWrap;
    width?: string;
    height?: string;
}>;
export const StyledLayoutFlex = styled.div<StyledLayoutFlexProps>`
  display: flex;
  flex-direction: ${props => props.$styled?.flexDirection || 'row'};
  justify-content: ${props => props.$styled?.justifyContent};
  align-items: ${props => props.$styled?.alignItems};
  flex-wrap: ${props => props.$styled?.flexWrap};
  width: ${props => props.$styled?.width || '100%'};
  height: ${props => props.$styled?.height || '100%'};
  
  ${isMobile} {
    flex-direction: ${props => props.$styledMobile?.flexDirection};
    justify-content: ${props => props.$styledMobile?.justifyContent};
    align-items: ${props => props.$styledMobile?.alignItems};
    flex-wrap: ${props => props.$styledMobile?.flexWrap};
    width: ${props => props.$styledMobile?.width};
    height: ${props => props.$styledMobile?.height};
  }
`;

type StyledLayoutFlexItemProps = StyledProps<{
    flex?: string;
    width?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    minWidth?: string;
    maxWidth?: string;
}>;
export const StyledLayoutFlexItem = styled.div<StyledLayoutFlexItemProps>`
  flex: ${props => props.$styled?.flex || '0 0 auto'};
  width: ${props => props.$styled?.width || 'auto'};
  height: ${props => props.$styled?.height || 'auto'};
  min-height: ${props => props.$styled?.minHeight};
  max-height: ${props => props.$styled?.maxHeight};
  min-width: ${props => props.$styled?.minWidth};
  max-width: ${props => props.$styled?.maxWidth};
  
  ${isMobile} {
    flex: ${props => props.$styledMobile?.flex};
    width: ${props => props.$styledMobile?.width};
    height: ${props => props.$styledMobile?.height};
    min-height: ${props => props.$styledMobile?.minHeight};
    max-height: ${props => props.$styledMobile?.maxHeight};
    min-width: ${props => props.$styledMobile?.minWidth};
    max-width: ${props => props.$styledMobile?.maxWidth};
  }
`;

type StyledLayoutGridProps = StyledProps<{
    gridTemplateAreas: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
}>;
export const StyledLayoutGrid = styled.div<StyledLayoutGridProps>`
  display: grid;
  grid-template-areas: ${props => props.$styled?.gridTemplateAreas};
  grid-template-rows: ${props => props.$styled?.gridTemplateRows};
  grid-template-columns: ${props => props.$styled?.gridTemplateColumns};
  
  ${isMobile} {
    grid-template-areas: ${props => props.$styledMobile?.gridTemplateAreas};
    grid-template-rows: ${props => props.$styledMobile?.gridTemplateRows};
    grid-template-columns: ${props => props.$styledMobile?.gridTemplateColumns};
  }
`;

type StyledLayoutGridItemProps = StyledProps<{
    gridArea: string;
}>;
export const StyledLayoutGridItem = styled.div<StyledLayoutGridItemProps>`
  grid-area: ${props => props.$styled?.gridArea};
  
  ${isMobile} {
    grid-area: ${props => props.$styledMobile?.gridArea};
  }
`;