import { StyledContentsSpan } from "@/design-system/module/Contents";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import useGetContents from "@/hook/useGetContents";

export default function ShowCategory() {

    const { data } = useGetContents();

    return (
        <StyledWrapper
            $styled={{ margin : '0 0 24px 0' }}
            $styledMobile={{ margin : '0 0 14px 0' }}
        >
            <StyledContentsSpan $styled={{
                display : 'inline-block',
                height : '24px',
                lineHeight : '24px',
                padding : '0 14px',
                backgroundColor : '#0ca8ac',
                borderRadius : '7px',
                color : '#ffffff',
            }}>
                {`${data?.categoryName}`}
            </StyledContentsSpan>
        </StyledWrapper>
    );
}