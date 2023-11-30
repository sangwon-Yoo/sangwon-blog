import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  /* ++ Reset */
  // 1. Use a more-intuitive box-sizing model.
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  // 2. Remove default margin
  * {
    margin: 0;
  }
  
  // Typographic tweaks!
  // 3. Add accessible line-height
  // 4. Improve text rendering
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  // 5. Improve media defaults
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  // 6. Remove built-in form typography styles
  input, button, textarea, select {
    font: inherit;
    border: none;
    background-color: unset;
    outline: none;
    padding: 0;
  }
  
  // 7. Avoid text overflows
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  // 8. Create a root stacking context
  #root, #__next {
    isolation: isolate;
  }
  /* -- Reset */

  /* ++ Global */
  /*
    html, body, StyledFlexContainer 를 다 100% 주는 이유는 
    100vh 100vw는 뷰포트기 때문에 스크룰 넘치는 영역은 커버가 안된다.
    100%를 주면 실제 크기는 자식들 중 최초로 실제 크기를 가지는 아이들에 의해 정해진다.
    이번 경우에는 StyledFlexContainer 의 자식들. >> 아닌거 같은데.
    Div 의 기본 속성인 display : block 의 경우 height는 기본 0, width는 부모 컨테이너를 다 차지한다.
    기본적으로 컨테이너들의 높이를 안주고, 자식들 중에 높이가 생기면 자연스레 높이가 생기는 것이 원칙.
  */
  html {
    /*height: 100%;*/
    /*width: 100%;*/
    /* html 은 최상단이다. 100%를 먹여버리면 뷰포트 영역을 부모로 인식하고 써버리게 된다.
      아무런옵션을 주지 않으면 자식들 중 실제 크기가 있는 아이들 기준으로 높이를 가지게 된다.
    */
    font-family: NotoSansKR-Regular; //자식들은 inherit 이 활성화되어서 상속 받는다.
    font-size: 14px; //자식들은 inherit 이 활성화되어서 상속 받는다.
  }
  /* -- Global */
  
  /* ++ Font */
  /* ++ fonts */
  @font-face {
    font-family: 'NotoSansKR-Bold';
    font-weight: 700;
    src: local('NotoSansKR-Bold'),  //로컬 디바이스에 해당 폰트가 있으면 쓰고, 없으면 아래 경로에서 순서대로 찾아서 적용한다.
    url('/font/NotoSansKR/NotoSansKR-Bold.woff2') format('woff2'),  //woff 의 버전업 버전
    url('/font/NotoSansKR/NotoSansKR-Bold.woff') format('woff'),    //otf, ttf 를 웹 전용으로 압축한 형태 w : web
    url('/font/NotoSansKR/NotoSansKR-Bold.otf') format('opentype'); //raw 한 폰트. 용량이크다는 단점이 있다.
  }

  @font-face {
    font-family: 'NotoSansKR-Regular';
    font-weight: 400;
    src: local('NotoSansKR-Regular'),
    url('/font/NotoSansKR/NotoSansKR-Regular.woff2') format('woff2'),
    url('/font/NotoSansKR/NotoSansKR-Regular.woff') format('woff'),
    url('/font/NotoSansKR/NotoSansKR-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'NotoSansKR-Thin';
    font-weight: 100;
    src: local('NotoSansKR-Thin'),
    url('/font/NotoSansKR/NotoSansKR-Thin.woff2') format('woff2'),
    url('/font/NotoSansKR/NotoSansKR-Thin.woff') format('woff'),
    url('/font/NotoSansKR/NotoSansKR-Thin.otf') format('opentype');
  }
  /* -- Font */
`;