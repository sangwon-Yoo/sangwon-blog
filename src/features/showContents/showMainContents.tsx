import useGetContents from "@/hook/useGetContents";
import {StyledContents, StyledContentsParagraph} from "@/design-system/module/Contents";
import {StyledWrapper} from "@/design-system/module/Wrapper";
import { RawDraftContentState } from "draft-js";
import {EDITOR_BLOCKS} from "@/const/editorBlock";
import {escapeHtml} from "@/functions/utils";
import Image from "next/image";

export default function ShowMainContents() {

    const { data } = useGetContents();

    console.log(JSON.parse(data?.contentsData?.contentsHtml || 'null'));
    const contentsData
        = JSON.parse(data?.contentsData?.contentsHtml || 'null') as RawDraftContentState | null;

    if(!contentsData) return null;

    const blockList = contentsData.blocks.map(
        (block, index) => {
            if(block.type == EDITOR_BLOCKS.unstyled) {
                return (
                    <StyledWrapper
                        $styled={{ margin : '36px 0' }}
                        key={index}
                    >
                        <StyledContentsParagraph
                            $styled={{
                                width : '680px',
                                height : 'auto',
                                color : '#292929',
                                whiteSpace : 'pre-line'
                            }}
                            $styledMobile={{
                                width : '100%',
                                height : 'auto',
                                color : '#292929'
                            }}
                        >
                            {block.text}
                        </StyledContentsParagraph>
                    </StyledWrapper>
                );
            } else if(block.type == EDITOR_BLOCKS.header_three) {
                return (
                    <StyledWrapper
                        $styled={{ margin : '64px 0 48px 0' }}
                        key={index}
                    >
                        <StyledContentsParagraph
                            $styled={{
                                width : '680px',
                                height : 'auto',
                                fontSize : '1.2rem',
                                fontWeight : 'bold',
                                color : '#292929'
                            }}
                            $styledMobile={{
                                width : '100%',
                                height : 'auto',
                                fontSize : '1.1rem',
                                fontWeight : 'bold',
                                color : '#292929'
                            }}
                            as={'h3'}
                        >
                            {block.text}
                        </StyledContentsParagraph>
                    </StyledWrapper>
                );
            } else if(block.type == EDITOR_BLOCKS.center) {
                return (
                    <StyledWrapper
                        $styled={{ margin : '36px 0' }}
                        key={index}
                    >
                        <StyledContentsParagraph
                            $styled={{
                                width : '680px',
                                height : 'auto',
                                color : '#292929',
                                whiteSpace : 'pre-line',
                                textAlign : 'center'
                            }}
                            $styledMobile={{
                                width : '100%',
                                height : 'auto',
                                color : '#292929'
                            }}
                        >
                            {block.text}
                        </StyledContentsParagraph>
                    </StyledWrapper>
                );
            } else if(block.type == EDITOR_BLOCKS.code_block) {
                return (
                    <StyledWrapper
                        $styled={{ margin : '36px 0' }}
                        key={index}
                    >
                        <StyledContents
                            $styled={{
                                width : '680px',
                                height : 'auto'
                            }}
                            $styledMobile={{
                                width : '100%',
                                height : 'auto'
                            }}
                        >
                            <pre>
                                <code dangerouslySetInnerHTML={{
                                    __html : escapeHtml(block.text)
                                }} />
                            </pre>
                        </StyledContents>
                    </StyledWrapper>
                );
            } else { //atomic : image

                return (
                    <StyledWrapper
                        $styled={{ margin : '0 0 36px 0' }}
                        key={index}
                    >
                        <StyledContents
                            $styled={{
                                position : 'relative',
                                overflow : 'hidden',
                                width : '680px',
                                height : '360px',
                                borderRadius : '2px',
                            }}
                            $styledMobile={{
                                width : '100%',
                                height : '300px'
                            }}
                        >
                            <Image
                                src={contentsData.entityMap[block.entityRanges[0].key].data.src}
                                fill
                                style={{ objectFit : 'cover' }}
                                alt={'내용 삽입 이미지'}
                            />
                        </StyledContents>
                    </StyledWrapper>
                );
            }
        }
    );


    return (
        <>
            {blockList}
        </>
    );
}