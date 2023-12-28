import { StyledContentsButton } from "@/design-system/module/Contents";

export default function ButtonA_long({title}: {title: string}) {

    return (
        <StyledContentsButton $styled={{
            display : 'inline-block',
            height : '24px',
            width : '128px',
            lineHeight : '24px',
            padding : '0 14px',
            backgroundColor : '#0ca8ac',
            borderRadius : '3px',
            color : '#ffffff',
        }}>
            {title}
        </StyledContentsButton>
    );
}