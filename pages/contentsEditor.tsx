import {
    StyledLayoutFlex,
    StyledLayoutFlexItem,
    StyledLayoutGrid,
    StyledLayoutGridItem
} from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsButton,
    StyledContentsInputText,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import Top from "@/components/top";
import Footer from "@/components/footer";
import { StyledContentsIconClose } from "@/components/styledIcons";

export default function ContentsEditor() {


    return (
        <>
            <Top />

            <StyledLayoutFlex
                $styled={{ flexDirection : 'column', alignItems : 'center' }}
                $styledMobile={{ flexDirection : 'column', alignItems : 'stretch' }}
            >
                <StyledLayoutFlexItem
                    $styled={{ flex : '0 0 auto' }}
                    $styledMobile={{ flex : '0 0 auto' }}
                >
                    <StyledWrapper
                        $styled={{ margin : '120px 24px 36px 24px' }}
                        $styledMobile={{ margin : '80px 24px 36px 24px' }}
                    >

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px',
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutFlex $styled={{ flexDirection : 'row-reverse' }}>
                                    <StyledLayoutFlexItem>
                                        <StyledContentsButton $styled={{
                                            display : 'inline-block',
                                            height : '24px',
                                            width : '64px',
                                            lineHeight : '24px',
                                            padding : '0 14px',
                                            backgroundColor : '#0ca8ac',
                                            borderRadius : '7px',
                                            color : '#ffffff',
                                        }}>
                                            {`저장`}
                                        </StyledContentsButton>
                                    </StyledLayoutFlexItem>
                                </StyledLayoutFlex>
                            </StyledContents>
                        </StyledWrapper>
                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px',
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '30% 60% 10%',
                                    gridTemplateAreas :
                                        '"name name name"' +
                                        '"selectBox textField close"'
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
                                                {`Category`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'selectBox' }}>
                                        <StyledWrapper
                                            $styled={{ margin : '0 14px 0 0' }}
                                        >
                                            <StyledContentsInputText
                                                name={'category'}
                                                as={'select'}
                                                $styled={{
                                                    border : '1.4px solid #0ca8ac',
                                                    borderRadius : '3px',
                                                    width : '100%',
                                                    height : '32px',
                                                    lineHeight : '32px',
                                                    backgroundColor : 'transparent',
                                                    hover : { border : '1.4px solid #66f1e1' }
                                                }}
                                                $styledMobile={{
                                                    border : '1.4px solid #0ca8ac',
                                                    hover : { border : '1.4px solid #66f1e1' }
                                                }}
                                            >
                                                <option value={'vanillaJS'}>vanillaJS</option>
                                                <option value={'markup'}>markup</option>
                                                <option value={'react'}>react</option>
                                                <option value={'nextJS'}>nextJS</option>
                                                <option value={'신규추가'}>신규추가</option>
                                            </StyledContentsInputText>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                type={'text'}
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
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '90% 10%',
                                    gridTemplateAreas :
                                        '"name name"' +
                                        '"textField close"'
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
                                                {`Title`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                type={'text'}
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
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '90% 10%',
                                    gridTemplateAreas :
                                        '"name name"' +
                                        '"textArea close"'
                                }}>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                                        <StyledWrapper $styled={{ margin : '0 0 10px 0' }}>
                                            <StyledContentsSpan
                                                $styled={{
                                                    display : 'inline-block',
                                                    width : '100%',
                                                    height : '2rem',
                                                    lineHeight : '2rem',
                                                    fontWeight : 'bold'
                                                }}
                                            >
                                                {`Sub Title`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textArea' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                $styled={{
                                                    border : '1.4px solid #0ca8ac',
                                                    borderRadius : '3px',
                                                    width : '100%',
                                                    height : '100px',
                                                    backgroundColor : 'transparent',
                                                    transition : 'border .12s ease',
                                                    focusingVisible : { border : '1.4px solid #66f1e1' }
                                                }}
                                                $styledMobile={{
                                                    border : '1.4px solid #0ca8ac',
                                                    focusingVisible : { border : '1.4px solid #66f1e1' }
                                                }}
                                                as={'textarea'}
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '90% 10%',
                                    gridTemplateAreas :
                                        '"name name"' +
                                        '"textField close"'
                                }}>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                                        <StyledWrapper $styled={{ margin : '0 0 10px 0' }}>
                                            <StyledContentsSpan
                                                $styled={{
                                                    display : 'inline-block',
                                                    width : '100%',
                                                    height : '2rem',
                                                    lineHeight : '2rem',
                                                    fontWeight : 'bold'
                                                }}
                                            >
                                                {`Thumbnail`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                type={'text'}
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
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        margin : '0 0 4px 0',
                                        borderRadius : '3px',
                                        backgroundColor : '#f2f3f5'
                                    }}>
                                        <StyledLayoutFlex
                                            $styled={{ flexWrap : 'wrap' }}
                                            $styledMobile={{ justifyContent : 'center' }}
                                        >
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Title
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Bold
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#292929',
                                                        fontWeight : 'bold'
                                                    }}
                                                >
                                                    Italic
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Center
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Image
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Code
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledContentsInputText
                                        $styled={{
                                            height : '630px',
                                            padding : '20px',
                                            border : '1.4px solid #0ca8ac',
                                            borderRadius : '3px',
                                            focusingVisible : { border : '1.4px solid #66f1e1' }
                                        }}
                                        as={'div'}
                                    />
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
                        </StyledWrapper>

                    </StyledWrapper>
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>


            <Footer />
        </>
    );
}