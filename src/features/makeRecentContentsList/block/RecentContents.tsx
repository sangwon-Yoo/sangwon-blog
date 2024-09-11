import {StyledWrapper} from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsAnchor,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import {StyledLayoutFlexItem, StyledLayoutGrid, StyledLayoutGridItem} from "@/design-system/module/Layout";
import Image from "next/image";

export default function RecentContents({date, title, subtitle, category, imgSrc}:{
    date: string, title: string, subtitle: string, category: string, imgSrc: string
}) {

    return (
        <StyledLayoutFlexItem>
            <StyledWrapper $styled={{
                borderTop : '1px solid #e6e6e6', padding : '20px 10px 2px 10px'
            }}>
                <StyledContentsAnchor $styled={{ display : 'block' }}>
                    <StyledLayoutGrid $styled={{
                        gridTemplateColumns : '72% 28%',
                        gridTemplateAreas :
                            '"date date"' +
                            '"title img"' +
                            '"contents img"' +
                            '"category category"'
                    }}>
                        <StyledLayoutGridItem $styled={{ gridArea : 'date' }}>
                            <StyledWrapper $styled={{ padding : '4px' }}>
                                <StyledContentsParagraph $styled={{
                                    height : '24px',
                                    color : '#BDC3C7'
                                }}>
                                    {date}
                                </StyledContentsParagraph>
                            </StyledWrapper>
                        </StyledLayoutGridItem>
                        <StyledLayoutGridItem $styled={{ gridArea : 'title' }}>
                            <StyledWrapper $styled={{ padding : '4px' }}>
                                <StyledContentsParagraph $styled={{
                                    height : '36px',
                                    fontSize : '20px',
                                    fontWeight : 'bold',
                                    overflow : 'hidden',
                                    textOverflow : 'ellipsis',
                                    whiteSpace : 'nowrap'
                                }}>
                                    {title}
                                </StyledContentsParagraph>
                            </StyledWrapper>
                        </StyledLayoutGridItem >
                        <StyledLayoutGridItem $styled={{ gridArea : 'contents' }}>
                            <StyledWrapper $styled={{ padding : '4px' }}>
                                <StyledContentsParagraph $styled={{
                                    height : '105px',
                                    overflow: 'hidden',
                                }}>
                                    {subtitle}
                                </StyledContentsParagraph>
                            </StyledWrapper>
                        </StyledLayoutGridItem>
                        <StyledLayoutGridItem $styled={{ gridArea : 'img' }}>
                            <StyledWrapper $styled={{ height : '100%', margin : '4px' }}>
                                <StyledContents $styled={{
                                    position : 'relative',
                                    height : '100%',
                                    overflow : 'hidden',
                                }}>
                                    <Image
                                        src={imgSrc}
                                        fill
                                        style={{ objectFit : 'cover' }}
                                        alt={'콘텐츠 대표 이미지'}
                                    />
                                </StyledContents>
                            </StyledWrapper>
                        </StyledLayoutGridItem>
                        <StyledLayoutGridItem $styled={{ gridArea : 'category' }}>
                            <StyledWrapper $styled={{ margin : '10px 0 6px 0', padding : '4px' }}>
                                <StyledContentsSpan $styled={{
                                    display : 'inline-block',
                                    height : '24px',
                                    lineHeight : '24px',
                                    padding : '0 14px',
                                    backgroundColor : '#0ca8ac',
                                    borderRadius : '7px',
                                    color : '#ffffff',
                                }}>
                                    {category}
                                </StyledContentsSpan>
                            </StyledWrapper>
                        </StyledLayoutGridItem>
                    </StyledLayoutGrid>
                </StyledContentsAnchor>
            </StyledWrapper>
        </StyledLayoutFlexItem>
    );
}