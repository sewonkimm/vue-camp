(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{328:function(t,s,a){t.exports=a.p+"assets/img/og-tag.6cf804aa.png"},386:function(t,s,a){t.exports=a.p+"assets/img/csr-result.e5da91ca.gif"},387:function(t,s,a){t.exports=a.p+"assets/img/ssr-vs-csr.588d1b49.png"},388:function(t,s,a){t.exports=a.p+"assets/img/document-access-error.7858147b.png"},476:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"서버-사이드-렌더링이란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#서버-사이드-렌더링이란"}},[t._v("#")]),t._v(" 서버 사이드 렌더링이란?")]),t._v(" "),n("p",[t._v("서버 사이드 렌더링이란 서버에서 페이지를 그려 클라이언트(브라우저)로 보낸 후 화면에 표시하는 기법을 의미합니다. 뷰 싱글 페이지 애플리케이션을 서버 사이드 렌더링의 반대인 클라이언트 사이드 렌더링 방식입니다. 이 글에서는 클라이언트 사이트 렌더링과 서버 사이드 렌더링 방식의 차이점을 살펴보고 서버 사이드 렌더링의 장단점을 분석해 보겠습니다.")]),t._v(" "),n("h2",{attrs:{id:"클라이언트-사이드-렌더링"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트-사이드-렌더링"}},[t._v("#")]),t._v(" 클라이언트 사이드 렌더링")]),t._v(" "),n("p",[t._v("클라이언트 사이드 렌더링을 이해하기 위해서 뷰 CLI로 생성된 프로젝트의 실행 결과를 살펴보겠습니다. 아래는 뷰\nCLI로 생성한 프로젝트의 기본 코드입니다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/main.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./App.vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("위 코드는 뷰의 인스턴스를 생성하는 코드입니다. 이 인스턴스는 아래 "),n("code",[t._v("index.html")]),t._v(" 파일의 "),n("code",[t._v("app")]),t._v(" 아이디를 갖는 태그에 부착됩니다.")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- public/index.html --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token doctype"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),n("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("noscript")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue."),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("noscript")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- built files will be auto injected --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("CLI로 프로젝트를 생성하고 난 후 "),n("code",[t._v("npm run serve")]),t._v("로 프로젝트를 실행하고 브라우저를 확인하면 뷰 기본 페이지가 뜹니다. 이 때 개발자 패널의 "),n("code",[t._v("Network")]),t._v(" 탭에서 "),n("code",[t._v("Doc")]),t._v("으로 필터링한 결과는 아래와 같습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(386),alt:"csr-result"}})]),t._v(" "),n("p",[t._v("서버에서 넘겨받은 HTML 코드에는 "),n("code",[t._v("body")]),t._v(" 태그 본문에 "),n("code",[t._v('<div id="app"></div>')]),t._v(" 밖에 없지만 화면에는\n"),n("code",[t._v("Welcome To Your Vue.js App")]),t._v(" 텍스트와 이미지가 있습니다. 이 텍스트와 이미지는 모두 클라이언트(브라우저)에서 동작한 "),n("code",[t._v("Vue.js")]),t._v(" 라이브러리가 그려준 것입니다. 즉 브라우저에서 화면의 결과를 그려낸 것이죠.")]),t._v(" "),n("h2",{attrs:{id:"서버-사이드-렌더링과-클라이언트-사이드-렌더링-차이점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#서버-사이드-렌더링과-클라이언트-사이드-렌더링-차이점"}},[t._v("#")]),t._v(" 서버 사이드 렌더링과 클라이언트 사이드 렌더링 차이점")]),t._v(" "),n("p",[t._v("그럼 서버 사이드의 렌더링은 앞에서 살펴본 클라이언트 사이드 렌더링과 무슨 차이점이 있을까요? 바로 어디서 화면에 보일 페이지의 내용을 그리느냐의 차이입니다. 클라이언트 사이드 렌더링은 페이지의 내용을 브라우저에서 그리고 서버 사이드 렌더링은 서버에서 페이지의 내용을 다 그려서 브라우저로 던져줍니다. 아래와 같이 말이죠.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(387),alt:"ssr-vs-csr"}})]),t._v(" "),n("h2",{attrs:{id:"서버-사이드-렌더링을-왜-쓸까"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#서버-사이드-렌더링을-왜-쓸까"}},[t._v("#")]),t._v(" 서버 사이드 렌더링을 왜 쓸까?")]),t._v(" "),n("p",[t._v('서버 사이드 렌더링을 쓰는 목적은 크게 "검색 엔진 최적화"와 "빠른 페이지 렌더링"입니다. 검색 엔진 최적화란 구글, 네이버와 같은 검색 사이트에서 검색했을 때 결과가 사용자에게 많이 노출될 수 있도록 최적화 하는 기법입니다. 특히, SNS에서 링크를 공유했을 때 해당 웹 사이트의 정보를 이미지와 설명으로 표시해주는 OG(Open Graph) Tag를 페이지 별로 적용하기 위해서는 서버 사이드 렌더링이 효율적입니다.')]),t._v(" "),n("p",[n("img",{attrs:{src:a(328),alt:"og-tag"}})]),t._v(" "),n("p",[t._v("또한, 서버 사이드 렌더링은 빈 HTML 페이지를 받아 브라우저에서 그리는 클라이언트 사이드 렌더링과 다르게 서버에서 미리 그려서 브라우저로 보내주기 때문에 페이지를 그리는 시간을 단축할 수 있습니다. 사용자 입장에서는 화면에 유의미한 정보가 표시되는 시간이 빨라지는 것이죠.")]),t._v(" "),n("h2",{attrs:{id:"서버-사이드-렌더링의-단점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#서버-사이드-렌더링의-단점"}},[t._v("#")]),t._v(" 서버 사이드 렌더링의 단점")]),t._v(" "),n("p",[t._v("이렇게만 보면 서버 사이드 렌더링을 하는게 좋겠네 라고 생각하실 수 있지만 시작하기 전에 주의해야 할 점이 있습니다. 서버 사이드 렌더링은 Node.js 웹 애플리케이션 실행 방법을 알아야하고 서버쪽 환경 구성과 함께 클라이언트, 서버 빌드에 대한 이해가 필요합니다. 따라서, 프런트엔드 개발 입문자 입장에서는 쉽지 않은 진입 장벽이 존재합니다.")]),t._v(" "),n("p",[t._v("또한, Node.js 환경에서 실행되기 때문에 브라우저 관련 API를 다룰 때 주의해야 합니다. 뷰 싱글 페이지 애플리케이션의 라이프 사이클 훅과는 다른 환경(브라우저가 아닌 Node.js)에서 동작하기 때문에 "),n("code",[t._v("beforeCreate")]),t._v("와 "),n("code",[t._v("created")]),t._v("에서 "),n("code",[t._v("window")]),t._v("나 "),n("code",[t._v("document")]),t._v("와 같은 브라우저 객체에 접근할 수 없습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(388),alt:"document-access-error"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("서버 사이드 렌더링의 경우 컴포넌트가 최초로 생성되는 시점이 브라우저 위가 아니라 Node.js 환경이기 때문에 "),n("code",[t._v("beforeCreate")]),t._v("나 "),n("code",[t._v("created")]),t._v("에서 브라우저 객체를 접근할 수 없습니다. 대신 "),n("code",[t._v("beforeMount")]),t._v("나 "),n("code",[t._v("mounted")]),t._v("에서 "),n("code",[t._v("window")]),t._v("와 "),n("code",[t._v("document")]),t._v("를 접근할 수 있습니다 😃")])]),t._v(" "),n("h2",{attrs:{id:"참고-자료"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" 참고 자료")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/concepts/server-side-rendering",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt Server Side Rendering"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://ssr.vuejs.org/#what-is-server-side-rendering-ssr",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue SSR Guide"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);