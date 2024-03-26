(function(){"use strict";var e={5368:function(e,t,n){var r=n(5130),i=n(6768);function a(e,t,n,r,a,o){const s=(0,i.g2)("RouterView");return(0,i.uX)(),(0,i.Wv)(s)}var o={},s=n(1241);const u=(0,s.A)(o,[["render",a]]);var c=u;const d=(0,i.Lk)("div",null,"home",-1);function l(e,t,n,r,a,o){const s=(0,i.g2)("MainHeader");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(s),d],64)}var C=n(9174),h=n(782),f={components:{MainHeader:C.A},methods:{...(0,h.i0)({setHeaderLight:"Header/setHeaderLight"})},created(){this.setHeaderLight()}},g=f;const p=(0,s.A)(g,[["render",l]]);var v=p,m=n(1387);const L=[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:()=>n.e(122).then(n.bind(n,9122))}],b=(0,m.aE)({history:(0,m.Bt)("/Vue-News/"),routes:L});var k=b;const M={state:()=>({isHeaderLight:!1}),mutations:{setLight(e){e.isHeaderLight=!0},setDark(e){e.isHeaderLight=!1}},actions:{setHeaderLight({commit:e}){e("setLight")},setHeaderDark({commit:e}){e("setDark")}},namespaced:!0};var H=M;const w={state:()=>({isMenuOpen:!1,isLargeScreen:window.innerWidth>630}),mutations:{updateLargeState(e){e.isLargeScreen=window.innerWidth>630},toggleMenu(e){e.isMenuOpen=!e.isMenuOpen},closeMenu(e){e.isMenuOpen=!1}},actions:{handleResize({state:e,commit:t}){t("updateLargeState"),e.isLargeScreen&&t("closeMenu")}},namespaced:!0};var y=w;const O=(0,h.y$)({modules:{Header:H,Menu:y},strict:!1});var E=O;(0,r.Ef)(c).use(E).use(k).mount("#app")},9174:function(e,t,n){n.d(t,{A:function(){return oe}});var r=n(6768),i=n(4232);const a=e=>((0,r.Qi)("data-v-618368a3"),e=e(),(0,r.jt)(),e),o=a((()=>(0,r.Lk)("p",{class:"headerLogo"},"VueNews",-1)));function s(e,t,n,a,s,u){const c=(0,r.g2)("HeaderMenu"),d=(0,r.g2)("burgerButton");return(0,r.uX)(),(0,r.CE)("header",{class:(0,i.C4)(["header",{headerLight:e.isHeaderLight,headerDark:e.isMenuOpen&&!e.isLargeScreen}])},[o,e.isMenuOpen||e.isLargeScreen?((0,r.uX)(),(0,r.Wv)(c,{key:0})):(0,r.Q3)("",!0),(0,r.bF)(d,{onClick:e.toggleMenu},null,8,["onClick"])],2)}var u=n(782);const c={class:"headerMenu"};function d(e,t,n,i,a,o){const s=(0,r.g2)("NavigationLinks"),u=(0,r.g2)("MenuIcons");return(0,r.uX)(),(0,r.CE)("nav",c,[(0,r.bF)(s),(0,r.bF)(u)])}const l={class:"linksList"};function C(e,t,n,a,o,s){const u=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)("ul",l,[(0,r.Lk)("li",{class:(0,i.C4)(["linkItem",{"link-light":e.isHeaderLight}])},[(0,r.bF)(u,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Главная")])),_:1})],2),(0,r.Lk)("li",{class:(0,i.C4)(["linkItem",{"link-light":e.isHeaderLight}])},[(0,r.bF)(u,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("О проекте")])),_:1})],2)])}var h={data(){return{isHeaderLight:this.$store.state.Header.isHeaderLight}}},f=h,g=n(1241);const p=(0,g.A)(f,[["render",C],["__scopeId","data-v-78c03f0f"]]);var v=p;const m={class:"menuIcons"},L={class:"iconsContent"};function b(e,t,n,i,a,o){const s=(0,r.g2)("ProfileIcon"),u=(0,r.g2)("IconBase"),c=(0,r.g2)("RouterLink"),d=(0,r.g2)("SettingsIcon"),l=(0,r.g2)("ExitIcon");return(0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("div",L,[(0,r.bF)(c,{to:"/"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{iconName:"Профиль"},{default:(0,r.k6)((()=>[(0,r.bF)(s)])),_:1})])),_:1}),(0,r.bF)(c,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{iconName:"Настройки"},{default:(0,r.k6)((()=>[(0,r.bF)(d)])),_:1})])),_:1}),(0,r.bF)(u,{iconName:"Выйти"},{default:(0,r.k6)((()=>[(0,r.bF)(l)])),_:1})])])}const k=["width","height","iconName","aria-labelledby"],M=["id"],H={class:"icon"};function w(e,t,n,a,o,s){return(0,r.uX)(),(0,r.CE)("svg",{class:"icon",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,iconName:e.iconName,viewBox:"0 0 30 30","aria-labelledby":e.iconName},[(0,r.Lk)("title",{id:e.iconName,lang:"ru"},(0,i.v_)(e.iconName),9,M),(0,r.Lk)("g",H,[(0,r.RG)(e.$slots,"default",{},void 0,!0)])],8,k)}var y={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:30},height:{type:[Number,String],default:30}}},O=y;const E=(0,g.A)(O,[["render",w],["__scopeId","data-v-68b54e5c"]]);var _=E;function N(e,t,n,a,o,s){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("path",{class:(0,i.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M27.5 15C27.5 8.1125 21.8875 2.5 15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 18.625 4.0625 21.8875 6.5375 24.175C6.5375 24.1875 6.5375 24.1875 6.525 24.2C6.65 24.325 6.8 24.425 6.925 24.5375C7 24.6 7.0625 24.6625 7.1375 24.7125C7.3625 24.9 7.6125 25.075 7.85 25.25C7.9375 25.3125 8.0125 25.3625 8.1 25.425C8.3375 25.5875 8.5875 25.7375 8.85 25.875C8.9375 25.925 9.0375 25.9875 9.125 26.0375C9.375 26.175 9.6375 26.3 9.9125 26.4125C10.0125 26.4625 10.1125 26.5125 10.2125 26.55C10.4875 26.6625 10.7625 26.7625 11.0375 26.85C11.1375 26.8875 11.2375 26.925 11.3375 26.95C11.6375 27.0375 11.9375 27.1125 12.2375 27.1875C12.325 27.2125 12.4125 27.2375 12.5125 27.25C12.8625 27.325 13.2125 27.375 13.575 27.4125C13.625 27.4125 13.675 27.425 13.725 27.4375C14.15 27.475 14.575 27.5 15 27.5C15.425 27.5 15.85 27.475 16.2625 27.4375C16.3125 27.4375 16.3625 27.425 16.4125 27.4125C16.775 27.375 17.125 27.325 17.475 27.25C17.5625 27.2375 17.65 27.2 17.75 27.1875C18.05 27.1125 18.3625 27.05 18.65 26.95C18.75 26.9125 18.85 26.875 18.95 26.85C19.225 26.75 19.5125 26.6625 19.775 26.55C19.875 26.5125 19.975 26.4625 20.075 26.4125C20.3375 26.3 20.6 26.175 20.8625 26.0375C20.9625 25.9875 21.05 25.925 21.1375 25.875C21.3875 25.725 21.6375 25.5875 21.8875 25.425C21.975 25.375 22.05 25.3125 22.1375 25.25C22.3875 25.075 22.625 24.9 22.85 24.7125C22.925 24.65 22.9875 24.5875 23.0625 24.5375C23.2 24.425 23.3375 24.3125 23.4625 24.2C23.4625 24.1875 23.4625 24.1875 23.45 24.175C25.9375 21.8875 27.5 18.625 27.5 15ZM21.175 21.2125C17.7875 18.9375 12.2375 18.9375 8.825 21.2125C8.275 21.575 7.825 22 7.45 22.4625C5.55 20.5375 4.375 17.9 4.375 15C4.375 9.1375 9.1375 4.375 15 4.375C20.8625 4.375 25.625 9.1375 25.625 15C25.625 17.9 24.45 20.5375 22.55 22.4625C22.1875 22 21.725 21.575 21.175 21.2125Z"},null,2),(0,r.Lk)("path",{class:(0,i.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M15 8.66211C12.4125 8.66211 10.3125 10.7621 10.3125 13.3496C10.3125 15.8871 12.3 17.9496 14.9375 18.0246C14.975 18.0246 15.025 18.0246 15.05 18.0246C15.075 18.0246 15.1125 18.0246 15.1375 18.0246C15.15 18.0246 15.1625 18.0246 15.1625 18.0246C17.6875 17.9371 19.675 15.8871 19.6875 13.3496C19.6875 10.7621 17.5875 8.66211 15 8.66211Z"},null,2)],64)}var S={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},I=S;const A=(0,g.A)(I,[["render",N],["__scopeId","data-v-12fe23db"]]);var F=A;function P(e,t,n,a,o,s){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("path",{class:(0,i.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z","stroke-width":"2"},null,2),(0,r.Lk)("path",{class:(0,i.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M17.2069 2.6903C16.7474 2.5 16.165 2.5 15.0001 2.5C13.8352 2.5 13.2529 2.5 12.7934 2.6903C12.1808 2.94404 11.6941 3.43073 11.4404 4.04329C11.3246 4.32293 11.2792 4.64813 11.2615 5.12249C11.2354 5.8196 10.8779 6.46486 10.2738 6.81366C9.66967 7.16245 8.93211 7.14943 8.31536 6.82345C7.89568 6.60163 7.59138 6.47828 7.29129 6.43878C6.63392 6.35223 5.96909 6.53036 5.44307 6.934C5.04854 7.23673 4.75733 7.74113 4.17491 8.74991C3.59248 9.75871 3.30127 10.2631 3.23636 10.7561C3.14982 11.4135 3.32796 12.0783 3.73159 12.6044C3.91582 12.8445 4.17474 13.0463 4.57661 13.2988C5.16737 13.67 5.54748 14.3024 5.54744 15C5.54741 15.6976 5.16731 16.3299 4.57659 16.701C4.17468 16.9536 3.91572 17.1555 3.73147 17.3956C3.32783 17.9216 3.14969 18.5864 3.23624 19.2438C3.30114 19.7368 3.59236 20.2413 4.17478 21.25C4.75722 22.2588 5.04843 22.7633 5.44294 23.0659C5.96897 23.4695 6.63379 23.6476 7.29117 23.5611C7.59123 23.5216 7.89552 23.3983 8.31517 23.1765C8.93196 22.8505 9.66957 22.8375 10.2737 23.1863C10.8779 23.5351 11.2354 24.1804 11.2615 24.8776C11.2793 25.3519 11.3246 25.6771 11.4404 25.9568C11.6941 26.5693 12.1808 27.056 12.7934 27.3098C13.2529 27.5 13.8352 27.5 15.0001 27.5C16.165 27.5 16.7474 27.5 17.2069 27.3098C17.8194 27.056 18.3061 26.5693 18.5597 25.9568C18.6756 25.6771 18.721 25.3519 18.7387 24.8775C18.7647 24.1804 19.1222 23.5351 19.7264 23.1863C20.3305 22.8374 21.0681 22.8505 21.685 23.1765C22.1046 23.3983 22.4089 23.5215 22.7089 23.561C23.3662 23.6476 24.0311 23.4695 24.5571 23.0659C24.9516 22.7631 25.2429 22.2588 25.8252 21.2499C26.4077 20.2411 26.699 19.7368 26.7639 19.2438C26.8504 18.5864 26.6722 17.9215 26.2686 17.3955C26.0844 17.1554 25.8254 16.9535 25.4235 16.701C24.8329 16.3299 24.4527 15.6975 24.4527 14.9999C24.4527 14.3023 24.8329 13.6701 25.4235 13.299C25.8255 13.0464 26.0845 12.8446 26.2687 12.6044C26.6724 12.0784 26.8505 11.4136 26.764 10.7562C26.6991 10.2632 26.4079 9.75879 25.8254 8.75C25.243 7.74121 24.9517 7.23681 24.5572 6.93409C24.0312 6.53045 23.3664 6.35231 22.709 6.43886C22.409 6.47836 22.1047 6.6017 21.685 6.8235C21.0682 7.14949 20.3306 7.16253 19.7265 6.8137C19.1222 6.46489 18.7647 5.81958 18.7387 5.12243C18.721 4.6481 18.6756 4.32291 18.5597 4.04329C18.3061 3.43073 17.8194 2.94404 17.2069 2.6903Z","stroke-width":"2"},null,2)],64)}var $={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},j=$;const x=(0,g.A)(j,[["render",P],["__scopeId","data-v-5f83065e"]]);var B=x;function X(e,t,n,a,o,s){return(0,r.uX)(),(0,r.CE)("path",{class:(0,i.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M25.4298 21.4454H23.3703C23.2297 21.4454 23.0978 21.5069 23.0099 21.6153C22.8048 21.8643 22.5851 22.1045 22.3537 22.3331C21.4071 23.2806 20.2858 24.0357 19.0519 24.5567C17.7736 25.0966 16.3996 25.3736 15.0119 25.3711C13.6086 25.3711 12.2492 25.0957 10.9718 24.5567C9.73794 24.0357 8.61669 23.2806 7.67008 22.3331C6.72179 21.3887 5.96564 20.2694 5.44352 19.0372C4.90153 17.7598 4.62907 16.4034 4.62907 15C4.62907 13.5967 4.90446 12.2403 5.44352 10.9629C5.96501 9.72954 6.71501 8.61918 7.67008 7.66704C8.62516 6.71489 9.73551 5.96489 10.9718 5.4434C12.2492 4.90434 13.6086 4.62895 15.0119 4.62895C16.4152 4.62895 17.7746 4.90141 19.0519 5.4434C20.2882 5.96489 21.3986 6.71489 22.3537 7.66704C22.5851 7.89848 22.8019 8.13872 23.0099 8.38481C23.0978 8.49321 23.2326 8.55473 23.3703 8.55473H25.4298C25.6144 8.55473 25.7287 8.34965 25.6261 8.19438C23.3791 4.70219 19.4474 2.39067 14.9797 2.40239C7.96012 2.41997 2.33219 8.11821 2.40251 15.129C2.47282 22.0284 8.09196 27.5977 15.0119 27.5977C19.4679 27.5977 23.382 25.2891 25.6261 21.8057C25.7257 21.6504 25.6144 21.4454 25.4298 21.4454ZM28.0343 14.8155L23.8771 11.5342C23.7218 11.4112 23.4963 11.5225 23.4963 11.7188V13.9454H14.297C14.1681 13.9454 14.0627 14.0508 14.0627 14.1797V15.8204C14.0627 15.9493 14.1681 16.0547 14.297 16.0547H23.4963V18.2813C23.4963 18.4776 23.7248 18.5889 23.8771 18.4659L28.0343 15.1846C28.0624 15.1627 28.085 15.1347 28.1006 15.1027C28.1162 15.0707 28.1243 15.0356 28.1243 15C28.1243 14.9645 28.1162 14.9294 28.1006 14.8974C28.085 14.8654 28.0624 14.8374 28.0343 14.8155Z"},null,2)}var T={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},R=T;const V=(0,g.A)(R,[["render",X],["__scopeId","data-v-a0a8ad90"]]);var Z=V,D={components:{IconBase:_,ProfileIcon:F,SettingsIcon:B,ExitIcon:Z}},W=D;const z=(0,g.A)(W,[["render",b],["__scopeId","data-v-4657f6bc"]]);var K=z,q={components:{NavigationLinks:v,MenuIcons:K}},Q=q;const G=(0,g.A)(Q,[["render",d],["__scopeId","data-v-297ac0fe"]]);var U=G;function Y(e,t,n,a,o,s){return(0,r.uX)(),(0,r.CE)("div",{class:(0,i.C4)(["burgerButton",{open:e.isMenuOpen}])},[(0,r.Lk)("span",{class:(0,i.C4)(["burgerEl top",{"burgerEl-light":e.isHeaderLight}])},null,2),(0,r.Lk)("span",{class:(0,i.C4)(["burgerEl middle",{"burgerEl-light":e.isHeaderLight}])},null,2),(0,r.Lk)("span",{class:(0,i.C4)(["burgerEl bottom",{"burgerEl-light":e.isHeaderLight}])},null,2)],2)}var J={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},ee=J;const te=(0,g.A)(ee,[["render",Y],["__scopeId","data-v-0da92372"]]);var ne=te;u.i0;var re={components:{HeaderMenu:U,BurgerButton:ne},methods:{...(0,u.PY)({toggleMenu:"Menu/toggleMenu"}),...(0,u.i0)({handleResize:"Menu/handleResize"})},computed:{isMenuOpen(){return this.$store.state.Menu.isMenuOpen},isHeaderLight(){return this.$store.state.Header.isHeaderLight},isLargeScreen(){return this.$store.state.Menu.isLargeScreen}},mounted(){window.addEventListener("resize",this.handleResize)}},ie=re;const ae=(0,g.A)(ie,[["render",s],["__scopeId","data-v-618368a3"]]);var oe=ae}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],i=e[d][1],a=e[d][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".53429e39.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".4f034e44.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuenews:";n.l=function(r,i,a,o){if(e[r])e[r].push(i);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var C=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(C.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=C.bind(null,s.onerror),s.onload=C.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Vue-News/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,i,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",n.nc&&(o.nonce=n.nc);var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)i();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=s,o.parentNode&&o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=s,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],a=i.getAttribute("data-href");if(a===e||a===t)return i}},r=function(r){return new Promise((function(i,a){var o=n.miniCssF(r),s=n.p+o;if(t(o,s))return i();e(r,s,null,i,a)}))},i={524:0};n.f.miniCss=function(e,t){var n={122:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],u=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var d=u(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkvuenews"]=self["webpackChunkvuenews"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5368)}));r=n.O(r)})();
//# sourceMappingURL=app.c27137e5.js.map