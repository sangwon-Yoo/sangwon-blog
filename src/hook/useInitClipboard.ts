import { useEffect } from "react";
import ClipboardJS from "clipboard";

const useInitClipboard = () => {

    useEffect(() => {
        //클립보드 복사 초기화
        const copyBtn: HTMLElement | '' = document.getElementById('copyBtn') || '';
        const clipboard = new ClipboardJS(copyBtn);
        clipboard.on('success', function (e: any) {
            alert('링크 복사가 완료되었습니다.');
            e.clearSelection();
        });
        clipboard.on('error', function (e: any) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });

        return () => {
            clipboard.destroy();
        };
    }, []);
};

export default useInitClipboard;