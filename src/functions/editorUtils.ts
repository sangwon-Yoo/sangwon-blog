import { RawDraftInlineStyleRange } from "draft-js";

export const stylingTextByStyleRanges = (text: string, styleRanges: Array<RawDraftInlineStyleRange>) => {
    const splitTextArr: Array<string> = [];
    let indices: Array<any> = [];

    // 인덱스를 먼저 저장합니다.
    styleRanges.forEach(range => {
        indices.push(range.offset); // 시작점
        indices.push(range.offset + range.length); // 끝점
    });

    // 인덱스를 정렬합니다.
    indices = Array.from(new Set(indices)).sort((a, b) => a - b);

    // 인덱스에 맞춰서 텍스트를 분리합니다.
    let lastIndex = 0;
    indices.forEach(index => {
        if (lastIndex < index) {
            splitTextArr.push(text.slice(lastIndex, index));
        }
        lastIndex = index;
    });

    // 마지막 남은 텍스트를 추가합니다.
    if (lastIndex < text.length) {
        splitTextArr.push(text.slice(lastIndex));
    }

    // splitTextArr 생성 완료
    // 스타일 먹이기 시작

    let currentIndex = 0;
    const styledTextArr: Array<string> = [];

    // splitTextArr 배열을 순회하면서 각 텍스트 조각에 태그를 적용합니다.
    splitTextArr.forEach(segment => {
        let segmentEnd = currentIndex + segment.length;
        let applicableStyles: Array<string> = [];

        // 각 스타일 범위가 현재 세그먼트에 적용되는지 확인합니다.
        styleRanges.forEach(range => {
            const rangeStart = range.offset;
            const rangeEnd = range.offset + range.length;

            if (currentIndex < rangeEnd && segmentEnd > rangeStart) {
                applicableStyles.push(range.style);
            }
        });

        // 스타일 적용: BOLD는 <b>, POINT는 <i>로 적용합니다.
        let styledSegment = segment;
        if (applicableStyles.includes("BOLD")) {
            styledSegment = `<b>${styledSegment}</b>`;
        }
        if (applicableStyles.includes("POINT")) {
            styledSegment = `<i style="background-color:#66f1e1">${styledSegment}</i>`;
        }

        styledTextArr.push(styledSegment);
        currentIndex = segmentEnd; // 인덱스 업데이트
    });

    return styledTextArr.join('');
}