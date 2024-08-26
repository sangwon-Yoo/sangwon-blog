import {StyledContentsParagraph, StyledContentsSpan} from "@/design-system/module/Contents";
import {StyledWrapper} from "@/design-system/module/Wrapper";
import useGetContents from "@/hook/useGetContents";

export default function ShowTitle() {

    const { data } = useGetContents();

    return (
        <StyledWrapper
            $styled={{ margin : '0 0 24px 0' }}
            $styledMobile={{ margin : '0 0 14px 0' }}
        >
            <StyledContentsParagraph
                $styled={{
                    width : '680px',
                    height : 'auto',
                    fontSize : '2rem'
                }}
                $styledMobile={{
                    width : '100%',
                    height : 'auto',
                    fontSize : '1.4rem'
                }}
                as={'h1'}
            >
                {`${data?.title}`}
            </StyledContentsParagraph>
        </StyledWrapper>
    );
}