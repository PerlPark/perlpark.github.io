(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(210),c=t(214),s=function(e){return e.isPartiallyCurrent?{className:"header__nav--active"}:null},i=function(e){return l.a.createElement("li",null,l.a.createElement(r.a,{to:e.to,activeClassName:"header__nav--active",getProps:s},e.children))};var o=function(){return l.a.createElement("ul",null,l.a.createElement(i,{to:"/"},"Articles"),l.a.createElement(i,{to:"/works/"},"Works"))},m=t(215),u=t(223),d=t.n(u),f=t(212),v=t.n(f);var h=function(){var e={maxWidth:"1em",maxHeight:"1em"};return l.a.createElement("ul",{className:"header__util"},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:hello@jinjoo.me",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(d.a,{style:e}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/PerlPark",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(v.a,{style:e}))))},E=t(216),p=(t(195),t(200),t(224),function(e){var a=e.children,t=c.data;return l.a.createElement("div",null,l.a.createElement("header",{className:"header detail sticky"},l.a.createElement("div",{className:"header__logo"},l.a.createElement(r.a,{to:"/"},l.a.createElement("span",{className:"header__logo__big"},t.site.siteMetadata.title_big))),l.a.createElement("nav",{className:"header__nav"},l.a.createElement(o,null)),l.a.createElement(h,null)),l.a.createElement("header",{className:"header detail"},l.a.createElement("div",{className:"header__logo"},l.a.createElement(r.a,{to:"/"},l.a.createElement("span",{className:"header__logo__small"},t.site.siteMetadata.title_small),l.a.createElement("span",{className:"header__logo__big"},t.site.siteMetadata.title_big))),l.a.createElement("nav",{className:"header__nav"},l.a.createElement(o,null)),l.a.createElement(m.a,null)),l.a.createElement("main",null,a),l.a.createElement(E.a,null))}),g=t(218),_=t(201),N=t.n(_),x=t(225),b=t.n(x);t.d(a,"query",(function(){return w}));a.default=function(e){var a=e.data,t=e.pageContext,n=t.previous,c=t.next,s=a.markdownRemark;return l.a.createElement(p,null,l.a.createElement("article",{className:N.a.article},l.a.createElement("h3",{className:N.a.article__title},s.frontmatter.title),l.a.createElement(g.a,{date:s.frontmatter.date,timeToRead:s.timeToRead}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.html},className:N.a.article__post})),l.a.createElement("div",{className:N.a.buttons},n&&l.a.createElement(r.a,{to:n.frontmatter.slug},l.a.createElement("div",{className:N.a.previous+" shadow-box"},l.a.createElement("span",{className:N.a.previous__small},"← 이전 게시물"),l.a.createElement("span",{className:N.a.previous__title},n.frontmatter.title))),c&&l.a.createElement(r.a,{to:c.frontmatter.slug},l.a.createElement("div",{className:N.a.next+" shadow-box"},l.a.createElement("span",{className:N.a.previous__small},"다음 게시물 →"),l.a.createElement("span",{className:N.a.previous__title},c.frontmatter.title))),l.a.createElement(r.a,{to:"/",replace:!0},l.a.createElement("div",{className:N.a.list+" shadow-box"},l.a.createElement("span",{className:N.a.previous__title},l.a.createElement(b.a,{style:{maxWidth:"1em",maxHeight:"1em",verticalAlign:"middle",marginRight:"6px",marginBottom:"0.1rem"}})," 목록")))))};var w="1206165132"},210:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(65),c=t.n(r);t.d(a,"a",(function(){return c.a}));t(211),t(7).default.enqueue,l.a.createContext({})},211:function(e,a,t){var n;e.exports=(n=t(213))&&n.default||n},212:function(e,a,t){var n=t(0);function l(e){return n.createElement("svg",e,n.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))}l.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512"},e.exports=l,l.default=l},213:function(e,a,t){"use strict";t.r(a);t(18);var n=t(0),l=t.n(n),r=t(92);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},214:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title_small":"Front-end Developer","title_big":"PerlPark 👩‍💻"}}}}')},215:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(212),c=t.n(r);a.a=function(){return l.a.createElement("ul",{className:"header__util"},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:hello@jinjoo.me",rel:"noopener noreferrer",target:"_blank"},"hello@jinjoo.me")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/PerlPark",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(c.a,{style:{maxWidth:"1em",maxHeight:"1em",verticalAlign:"middle",marginRight:"0.1em"}})," perlpark")))}},216:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(194),c=t.n(r);a.a=function(){return l.a.createElement("footer",{className:c.a.footer},"© designed and developed by Perlpark / Icons © ",l.a.createElement("a",{href:"https://fontawesome.com/license",rel:"noopener noreferrer",target:"_blank"},"Font Awesome"))}},217:function(e,a,t){var n=t(0);function l(e){return n.createElement("svg",e,n.createElement("path",{fill:"rgba(0,0,0,0.50)",d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}))}l.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"calendar-alt",className:"svg-inline--fa fa-calendar-alt fa-w-14",role:"img",viewBox:"0 0 448 512"},e.exports=l,l.default=l},218:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(196),c=t.n(r),s=t(217),i=t.n(s),o=t(219),m=t.n(o),u=t(220),d=t.n(u);a.a=function(e){var a={maxWidth:"1em",maxHeight:"1em",verticalAlign:"middle",marginRight:"6px",marginBottom:"0.1rem"};return l.a.createElement("ul",{className:c.a.info,style:{fontSize:"0.75em"}},e.date&&l.a.createElement("li",null,l.a.createElement(i.a,{style:a}),e.date),e.timeToRead&&l.a.createElement("li",null,l.a.createElement(m.a,{style:a}),e.timeToRead," minute read"),e.tags&&l.a.createElement("li",{className:c.a.info__item__tags},l.a.createElement(d.a,{style:a}),l.a.createElement("ul",null,e.tags.map((function(e){return l.a.createElement("li",{key:e,className:c.a.info__item__tags__item},e)})))))}},219:function(e,a,t){var n=t(0);function l(e){return n.createElement("svg",e,n.createElement("path",{fill:"rgba(0,0,0,0.50)",d:"M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"}))}l.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"stream",className:"svg-inline--fa fa-stream fa-w-16",role:"img",viewBox:"0 0 512 512"},e.exports=l,l.default=l},220:function(e,a,t){var n=t(0);function l(e){return n.createElement("svg",e,n.createElement("path",{fill:"rgba(0,0,0,0.50)",d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"}))}l.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tag",className:"svg-inline--fa fa-tag fa-w-16",role:"img",viewBox:"0 0 512 512"},e.exports=l,l.default=l},223:function(e,a,t){var n=t(0);function l(e){return n.createElement("svg",e,n.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}))}l.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",viewBox:"0 0 512 512"},e.exports=l,l.default=l},224:function(e,a){"undefined"!=typeof window&&window.addEventListener("scroll",(function(e){if(document.getElementsByClassName("sticky").length>0){var a=document.getElementsByClassName("sticky")[0],t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||""),l=t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop;console.log(l),l>=120?a.classList.contains("sticky--on")||a.classList.add("sticky--on"):a.classList.remove("sticky--on")}}))},225:function(e,a,t){var n=t(0);function l(e){return n.createElement("svg",e,n.createElement("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))}l.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bars",className:"svg-inline--fa fa-bars fa-w-14",role:"img",viewBox:"0 0 448 512"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-templates-article-js-19bf492339f20bd049f8.js.map