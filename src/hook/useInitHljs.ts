import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.min.css'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import { useState } from "react";

const useInitHljs = () => {

    useState(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.registerLanguage('typescript', typescript);
        hljs.registerLanguage('xml', xml);
        hljs.registerLanguage('css', css);
    });
};

export default useInitHljs;