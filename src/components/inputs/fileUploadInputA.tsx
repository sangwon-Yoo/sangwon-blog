import { StyledLayoutGrid, StyledLayoutGridItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import { StyledContentsIconClose } from "@/components/styledIcons";
import { ChangeEvent, Dispatch, LegacyRef, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FileUploadInputA({title, initialPreviewImgSrc, accept, multiple, exportFlag, exportSetter}: {
    title: string;
    initialPreviewImgSrc: string;
    accept?: string;
    multiple?: boolean;
    exportFlag: boolean;
    exportSetter: Dispatch<SetStateAction<FileList | null>>;
}) {

    const [inputFileState, setInputFileState] = useState<FileList | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(initialPreviewImgSrc || null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const doExport = useCallback(
        () => exportSetter(inputFileState),
        [exportSetter, inputFileState]
    );

    useEffect(() => {
        if(exportFlag) {
            doExport();
        }
    });

    const inputImgOnChange = (event: ChangeEvent<HTMLInputElement>) => {

        if(!event.target.files) return;

        const file = event.target.files.item(0);

        if(!file) return;

        if(file.size > 3000000) {
            alert('Too Big File Size. Use under 3mb image.');
            return;
        }

        const blob = file.slice();
        const imgURL = URL.createObjectURL(blob);

        setInputFileState(event.currentTarget.files)
        setPreviewURL(imgURL);
    };

    const onCLickCloseButton = () => {
        setInputFileState(null);
        setPreviewURL(null);
        if(inputFileRef.current) {
            inputFileRef.current.value = '';
        }
    };

    return (
        <StyledLayoutGrid $styled={{
            gridTemplateColumns : '90% 10%',
            gridTemplateAreas :
                '"name name"' +
                '"textField close"' +
                '"preview preview"'
        }}>
            <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                <StyledWrapper $styled={{ margin : '0 0 10px 0'}}>
                    <StyledContentsSpan
                        $styled={{
                            display : 'inline-block',
                            width : '100%',
                            height : '2rem',
                            lineHeight : '2rem',
                            fontWeight : 'bold'
                        }}
                    >
                        {title}
                    </StyledContentsSpan>
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                <StyledWrapper $styled={{ margin : '0 0 10px 0'}}>
                    <StyledContentsInputText
                        type={'file'}
                        accept={accept}
                        multiple={multiple}
                        $styled={{
                            borderBottom : '1.4px solid #0ca8ac',
                            width : '100%',
                            height : '32px',
                            backgroundColor : 'transparent',
                            lineHeight : '32px',
                            transition : 'border-bottom .12s ease',
                            focusingVisible : { borderBottom : '1.4px solid #66f1e1' }
                        }}
                        $styledMobile={{
                            borderBottom : '1.4px solid #0ca8ac',
                            focusingVisible : { borderBottom : '1.4px solid #66f1e1' }
                        }}
                        onChange={inputImgOnChange}
                        ref={inputFileRef}
                    />
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                <StyledWrapper
                    $styled={{ margin : '0 0 10px 14px' }}
                >
                    <StyledContentsButton
                        $styled={{
                            height : '32px',
                            width : '32px',
                            padding : '6px',
                            color : '#6B6B6B'
                        }}
                        onClick={onCLickCloseButton}
                    >
                        <StyledContentsIconClose />
                    </StyledContentsButton>
                </StyledWrapper>
            </StyledLayoutGridItem>
            <StyledLayoutGridItem $styled={{ gridArea : 'preview' }}>
                <StyledWrapper $styled={{ margin : '0 0 10px 0'}}>
                    {previewURL && (<Image
                        src={previewURL}
                        alt={'preview'}
                        width={640}
                        height={300}
                        style={{ objectFit : 'contain' }} />)
                    }
                </StyledWrapper>
            </StyledLayoutGridItem>
        </StyledLayoutGrid>
    );
}