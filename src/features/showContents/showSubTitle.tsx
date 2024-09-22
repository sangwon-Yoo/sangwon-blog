import {StyledContentsParagraph, StyledContentsSpan} from "@/design-system/module/Contents";
import {StyledWrapper} from "@/design-system/module/Wrapper";
import useGetContents from "@/hook/useGetContents";

export default function ShowSubTitle() {

    const { data } = useGetContents();

    return (
        <StyledWrapper
            $styled={{ margin : '0 0 36px 0' }}
            $styledMobile={{ margin : '0 0 24px 0' }}
        >
            <StyledContentsParagraph
                $styled={{
                    width : '680px',
                    height : 'auto',
                    fontSize : '1.2rem',
                    fontWeight : 'normal',
                    color : '#6B6B6B'
                }}
                $styledMobile={{
                    width : '100%',
                    height : 'auto',
                    fontSize : '1.1rem',
                    fontWeight : 'normal',
                    color : '#6B6B6B'
                }}
                as={'h2'}
            >
                {`${data?.subTitle}`}
            </StyledContentsParagraph>
        </StyledWrapper>
    );
}