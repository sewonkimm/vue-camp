(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{409:function(t,a,s){t.exports=s.p+"assets/img/lifecycle.dcbe29f6.png"},514:function(t,a,s){"use strict";s.r(a);var n=s(30),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"인스턴스-라이프-사이클"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#인스턴스-라이프-사이클"}},[t._v("#")]),t._v(" 인스턴스 라이프 사이클")]),t._v(" "),n("p",[t._v("인스턴스 라이프 사이클이란 뷰의 인스턴스가 생성되어 소멸되기까지 거치는 과정을 의미합니다. 인스턴스가 생성되고 나면 라이브러리 내부적으로 다음과 같은 과정이 진행됩니다.")]),t._v(" "),n("ul",[n("li",[t._v("data 속성의 초기화 및 관찰 (Reactivity 주입)")]),t._v(" "),n("li",[t._v("뷰 템플릿 코드 컴파일 (Virtual DOM -> DOM 변환)")]),t._v(" "),n("li",[t._v("인스턴스를 DOM에 부착")])]),t._v(" "),n("h2",{attrs:{id:"라이프-사이클-다이어그램"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#라이프-사이클-다이어그램"}},[t._v("#")]),t._v(" 라이프 사이클 다이어그램")]),t._v(" "),n("p",[t._v("인스턴스의 라이프 사이클 흐름을 그림으로 나타내어 보면 다음과 같습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(409),alt:"콘솔에서 확인한 인스턴스 내용"}})]),t._v(" "),n("h2",{attrs:{id:"라이프-사이클-훅"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#라이프-사이클-훅"}},[t._v("#")]),t._v(" 라이프 사이클 훅")]),t._v(" "),n("p",[t._v("뷰의 라이프 사이클을 이해해야 하는 이유는 바로 라이프 사이클 훅 때문입니다. 라이프 사이클 훅으로 인스턴스의 특정 시점에 원하는 로직을 구현할 수 있습니다.")]),t._v(" "),n("p",[t._v("예를 들어, 컴포넌트가 생성되자마자 데이터를 서버에서 받아오고 싶으면 created나 beforeMount 라이프 사이클 훅을 사용할 수 있습니다. 아래 코드는 인스턴스가 생성되자마자 액시오스로 HTTP GET 요청을 보내 데이터를 받아오는 코드입니다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("created")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"자주-사용되는-라이프-사이클-훅-목록"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#자주-사용되는-라이프-사이클-훅-목록"}},[t._v("#")]),t._v(" 자주 사용되는 라이프 사이클 훅 목록")]),t._v(" "),n("p",[t._v("구현할 때 주로 사용하는 라이프 사이클 훅은 아래와 같습니다.")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/api/#created",target:"_blank",rel:"noopener noreferrer"}},[t._v("created"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/api/#beforeMount",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeMount"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/api/#mounted",target:"_blank",rel:"noopener noreferrer"}},[t._v("mounted"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/api/#destroyed",target:"_blank",rel:"noopener noreferrer"}},[t._v("destroyed"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("다른 라이프 사이클 훅을 알고 싶다면 "),n("a",{attrs:{href:"https://vuejs.org/v2/api/#Options-Lifecycle-Hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),n("OutboundLink")],1),t._v("를 참고하세요.")])])}),[],!1,null,null,null);a.default=e.exports}}]);