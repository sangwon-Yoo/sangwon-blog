import {StyledContentsAnchor} from "@/design-system/module/Contents";
import {useRouter} from "next/router";

export default function Child({text, linkUrl}: {text: string, linkUrl: string}) {

    const router = useRouter();

    return (
        <StyledContentsAnchor
            $styled={{
                display : 'block',
                height : '1.6rem',
                lineHeight : '1.6rem',
                fontSize : '0.8rem',
                color : '#ffffff80'}}
            onClick={() => router.push(linkUrl)}
        >
            {text}
        </StyledContentsAnchor>
    );
}