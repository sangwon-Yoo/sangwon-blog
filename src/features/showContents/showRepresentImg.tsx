import { StyledContents } from "@/design-system/module/Contents";
import Image from "next/image";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import useGetContents from "@/hook/useGetContents";

export default function ShowRepresentImg() {

    const { data } = useGetContents();

    console.log(data?.representativeImgURL)

    return (
        <StyledWrapper
            $styled={{ width : '680px', height : '384px', margin : '0 0 36px 0' }}
            $styledMobile={{ width : '100%', height : '194px' }}
        >
            <StyledContents $styled={{
                height : '100%',
                position : 'relative',
                overflow : 'hidden',
                borderRadius : '2px',
            }}>
                <Image
                    src={`${data?.representativeImgURL}`}
                    priority
                    fill
                    style={{ objectFit : 'cover' }}
                    alt={'콘텐츠 대표 이미지'}
                />
            </StyledContents>
        </StyledWrapper>
    );
}