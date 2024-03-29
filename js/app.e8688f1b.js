(function(){"use strict";var e={811:function(e,t,n){var r=n(5130),a=n(6768);function s(e,t,n,r,s,o){const i=(0,a.g2)("RouterView");return(0,a.uX)(),(0,a.Wv)(i)}var o={},i=n(1241);const u=(0,i.A)(o,[["render",s]]);var c=u,d=n(782);const l={state:()=>({isHeaderLight:!1}),mutations:{setLight(e){e.isHeaderLight=!0},setDark(e){e.isHeaderLight=!1}},actions:{setHeaderLight({commit:e}){e("setLight")},setHeaderDark({commit:e}){e("setDark")}},namespaced:!0};var p=l;const h={state:()=>({isMenuOpen:!1,isLargeScreen:window.innerWidth>630}),mutations:{updateLargeState(e){e.isLargeScreen=window.innerWidth>630},toggleMenu(e){e.isMenuOpen=!e.isMenuOpen},closeMenu(e){e.isMenuOpen=!1}},actions:{handleResize({state:e,commit:t}){t("updateLargeState"),e.isLargeScreen&&t("closeMenu")}},namespaced:!0};var C=h,g=n(8355);g.A;const f={state:()=>({searchQuery:"",popularQuery:"JavaScript",news:[],totalNews:0,newsCounter:0,renderSize:3,popularNews:[],pageSize:8,page:1,isPopularLoading:!1,isNewsLoading:!1,isMoreNews:!1,isNoResults:!1}),mutations:{updateSearchQuery(e,t){e.searchQuery=t},setNews(e,t){e.news=t},setNewsCounter(e,t){e.newsCounter=t},increaseNewsCounter(e,t){e.newsCounter=e.newsCounter+t},setTotalNews(e,t){e.totalNews=t},setPopularNews(e,t){e.popularNews=t},setMoreNews(e,t){e.isMoreNews=t},setNewsLoading(e,t){e.isNewsLoading=t},setPopularLoading(e,t){e.isPopularLoading=t}},actions:{async fetchPopularNews({state:e,commit:t,rootState:n}){try{t("setPopularLoading",!0);const r=await g.A.get("https://nomoreparties.co/news/v2/everything",{params:{apiKey:"97b7f9eb48c34d13a7461ddeb9126240",q:e.popularQuery,from:n.Date.dateWeekAgo,to:n.Date.dateNow,sortBy:"popularity",pageSize:e.pageSize,page:e.page}});t("setPopularNews",r.data.articles)}catch(r){console.log(r)}finally{t("setPopularLoading",!1)}},async fetchNews({state:e,commit:t,dispatch:n,rootState:r}){try{if(e.searchQuery){t("setNewsLoading",!0);const a=await g.A.get("https://nomoreparties.co/news/v2/everything",{params:{apiKey:"97b7f9eb48c34d13a7461ddeb9126240",q:e.searchQuery,from:r.Date.dateWeekAgo,to:r.Date.dateNow}});t("setTotalNews",a.data.articles.length),t("setNews",a.data.articles),t("setNewsCounter",0),n("renderNews")}else alert("Введите ключевое слово в строку поиска")}catch(a){console.log(a)}finally{t("setNewsLoading",!1)}},renderNews({state:e,commit:t}){e.newsCounter<e.totalNews?(t("increaseNewsCounter",e.renderSize),t("setMoreNews",!0)):t("setMoreNews",!1)}},namespaced:!0};var v=f;const m={state:()=>({dateNow:"",dateWeekAgo:""}),getters:{getDateNow(e){return e.dateNow}},mutations:{setCurrentDate(e,t){e.dateNow=t},setWeekAgoDate(e,t){e.dateWeekAgo=t}},actions:{getDate({commit:e}){let t=new Date,n=new Date(t);n.setDate(n.getDate()-7),t=t.toISOString().slice(0,10),n=n.toISOString().slice(0,10),e("setCurrentDate",t),e("setWeekAgoDate",n)}},namespaced:!0};var w=m;const L=(0,d.y$)({modules:{Header:p,Menu:C,News:v,Date:w},strict:!1});var b=L;const k=e=>((0,a.Qi)("data-v-32c64012"),e=e(),(0,a.jt)(),e),N=k((()=>(0,a.Lk)("div",null,"home",-1)));function y(e,t,n,r,s,o){const i=(0,a.g2)("SearchBlock"),u=(0,a.g2)("PopularNews");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i),(0,a.bF)(u),N],64)}var M=n(3780);const _=e=>((0,a.Qi)("data-v-c95c836c"),e=e(),(0,a.jt)(),e),I={class:"search"},H={class:"searchContent"},S=_((()=>(0,a.Lk)("div",{class:"searchTexts"},[(0,a.Lk)("h1",{class:"title"},"Что в мире творится?"),(0,a.Lk)("p",{class:"description"}," Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю. ")],-1)));function A(e,t,n,r,s,o){const i=(0,a.g2)("MainHeader"),u=(0,a.g2)("SearchActions");return(0,a.uX)(),(0,a.CE)("section",I,[(0,a.bF)(i),(0,a.Lk)("div",H,[S,(0,a.bF)(u)])])}const E={class:"searchActions"},O={class:"searchInput"},P={class:"searchButton"};function F(e,t,n,s,o,i){const u=(0,a.g2)("InputItem"),c=(0,a.g2)("ButtonItem");return(0,a.uX)(),(0,a.CE)("div",E,[(0,a.Lk)("div",O,[(0,a.bF)(u,{value:e.searchQuery,onInput:e.updateSearchQuery,onKeyup:(0,r.jR)(e.fetchNews,["enter"])},null,8,["value","onInput","onKeyup"])]),(0,a.Lk)("div",P,[(0,a.bF)(c,{disabled:!e.searchQuery,onClick:e.fetchNews},{default:(0,a.k6)((()=>[(0,a.eW)(" Искать ")])),_:1},8,["disabled","onClick"])])])}const D={type:"text",class:"input",placeholder:"Введите тему новости"};function X(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("input",D)}var Q={},j=Q;const B=(0,i.A)(j,[["render",X],["__scopeId","data-v-397d2051"]]);var $=B;const x={class:"button",type:"button"};function T(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("button",x,[(0,a.RG)(e.$slots,"default",{},void 0,!0)])}var W={},R=W;const z=(0,i.A)(R,[["render",T],["__scopeId","data-v-b8366d92"]]);var K=z,V={components:{InputItem:$,ButtonItem:K},computed:{searchQuery(){return this.$store.state.News.searchQuery}},methods:{...(0,d.PY)({updateStoreQuery:"News/updateSearchQuery"}),...(0,d.i0)({fetchNews:"News/fetchNews"}),updateSearchQuery(e){this.updateStoreQuery(e.target.value)}}},Z=V;const q=(0,i.A)(Z,[["render",F],["__scopeId","data-v-44ca946d"]]);var G=q,Y={components:{SearchActions:G,MainHeader:M.A}},J=Y;const U=(0,i.A)(J,[["render",A],["__scopeId","data-v-c95c836c"]]);var ee=U;const te=e=>((0,a.Qi)("data-v-4e3c8f63"),e=e(),(0,a.jt)(),e),ne={key:1,class:"popularNews"},re=te((()=>(0,a.Lk)("h2",{class:"popularTitle"},"Популярные новости за сегодня",-1)));function ae(e,t,n,r,s,o){const i=(0,a.g2)("PreloaderBlock"),u=(0,a.g2)("PopularList");return e.isPopularLoading?((0,a.uX)(),(0,a.Wv)(i,{key:0})):((0,a.uX)(),(0,a.CE)("section",ne,[re,(0,a.bF)(u)]))}const se={class:"popularList"};function oe(e,t,n,r,s,o){const i=(0,a.g2)("PopularItem");return(0,a.uX)(),(0,a.CE)("div",se,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.popularNews,(e=>((0,a.uX)(),(0,a.Wv)(i,{key:e.title,item:e},null,8,["item"])))),128))])}var ie=n(4232);const ue={class:"popularItem"},ce=["href"],de={class:"itemTitle"},le={class:"itemAuthor"};function pe(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("article",ue,[(0,a.Lk)("a",{href:e.item.url,target:"_blank",class:"itemLink"},[(0,a.Lk)("h5",de,(0,ie.v_)(e.item.title),1),(0,a.Lk)("p",le,(0,ie.v_)(e.item.source.name),1)],8,ce)])}var he={props:{item:{type:Object,required:!0}}},Ce=he;const ge=(0,i.A)(Ce,[["render",pe],["__scopeId","data-v-006a60e7"]]);var fe=ge,ve={components:{PopularItem:fe},computed:{popularNews(){return this.$store.state.News.popularNews}}},me=ve;const we=(0,i.A)(me,[["render",oe],["__scopeId","data-v-11185e0d"]]);var Le=we;const be=e=>((0,a.Qi)("data-v-ec01a02e"),e=e(),(0,a.jt)(),e),ke={class:"preloader"},Ne=be((()=>(0,a.Lk)("p",{class:"preloaderText"},"Идёт поиск новостей...",-1)));function ye(e,t,n,r,s,o){const i=(0,a.g2)("PreloaderItem");return(0,a.uX)(),(0,a.CE)("div",ke,[(0,a.bF)(i),Ne])}const Me={class:"circle-preloader"};function _e(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("i",Me)}var Ie={};const He=(0,i.A)(Ie,[["render",_e],["__scopeId","data-v-030120e3"]]);var Se=He,Ae={components:{PreloaderItem:Se}},Ee=Ae;const Oe=(0,i.A)(Ee,[["render",ye],["__scopeId","data-v-ec01a02e"]]);var Pe=Oe,Fe={components:{PopularList:Le,PreloaderBlock:Pe},computed:{isPopularLoading(){return this.$store.state.News.isPopularLoading}}},De=Fe;const Xe=(0,i.A)(De,[["render",ae],["__scopeId","data-v-4e3c8f63"]]);var Qe=Xe,je={components:{MainHeader:M.A,SearchBlock:ee,PopularNews:Qe},methods:{...(0,d.i0)({setHeaderLight:"Header/setHeaderLight",getDate:"Date/getDate",fetchPopularNews:"News/fetchPopularNews"})},created(){this.setHeaderLight(),this.getDate()},mounted(){this.fetchPopularNews()}},Be=je;const $e=(0,i.A)(Be,[["render",y],["__scopeId","data-v-32c64012"]]);var xe=$e,Te=n(1387);const We=[{path:"/",name:"home",component:xe},{path:"/about",name:"about",component:()=>n.e(122).then(n.bind(n,9122))}],Re=(0,Te.aE)({history:(0,Te.Bt)("/Vue-News/"),routes:We});Re.beforeEach(((e,t,n)=>{b.commit("Menu/closeMenu"),n()}));var ze=Re;(0,r.Ef)(c).use(b).use(ze).mount("#app")},3780:function(e,t,n){n.d(t,{A:function(){return ue}});var r=n(6768),a=n(4232);const s=e=>((0,r.Qi)("data-v-618368a3"),e=e(),(0,r.jt)(),e),o=s((()=>(0,r.Lk)("p",{class:"headerLogo"},"VueNews",-1)));function i(e,t,n,s,i,u){const c=(0,r.g2)("HeaderMenu"),d=(0,r.g2)("burgerButton");return(0,r.uX)(),(0,r.CE)("header",{class:(0,a.C4)(["header",{headerLight:e.isHeaderLight,headerDark:e.isMenuOpen&&!e.isLargeScreen}])},[o,e.isMenuOpen||e.isLargeScreen?((0,r.uX)(),(0,r.Wv)(c,{key:0})):(0,r.Q3)("",!0),(0,r.bF)(d,{onClick:e.toggleMenu},null,8,["onClick"])],2)}var u=n(782);const c={class:"headerMenu"};function d(e,t,n,s,o,i){const u=(0,r.g2)("NavigationLinks"),d=(0,r.g2)("MenuIcons");return(0,r.uX)(),(0,r.CE)("nav",c,[(0,r.bF)(u,{class:(0,a.C4)({"link-light":e.isHeaderLight||e.isMenuOpen})},null,8,["class"]),(0,r.bF)(d)])}const l={class:"linksList"},p={class:"linkItem"},h={class:"linkItem"};function C(e,t,n,a,s,o){const i=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)("ul",l,[(0,r.Lk)("li",p,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Главная")])),_:1})]),(0,r.Lk)("li",h,[(0,r.bF)(i,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("О проекте")])),_:1})])])}var g={},f=g,v=n(1241);const m=(0,v.A)(f,[["render",C],["__scopeId","data-v-24b5e8b1"]]);var w=m;const L={class:"menuIcons"},b={class:"iconsContent"};function k(e,t,n,a,s,o){const i=(0,r.g2)("ProfileIcon"),u=(0,r.g2)("IconBase"),c=(0,r.g2)("RouterLink"),d=(0,r.g2)("SettingsIcon"),l=(0,r.g2)("ExitIcon");return(0,r.uX)(),(0,r.CE)("div",L,[(0,r.Lk)("div",b,[(0,r.bF)(c,{to:"/"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{iconName:"Профиль"},{default:(0,r.k6)((()=>[(0,r.bF)(i)])),_:1})])),_:1}),(0,r.bF)(c,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{iconName:"Настройки"},{default:(0,r.k6)((()=>[(0,r.bF)(d)])),_:1})])),_:1}),(0,r.bF)(u,{iconName:"Выйти"},{default:(0,r.k6)((()=>[(0,r.bF)(l)])),_:1})])])}const N=["width","height","iconName","view-box","aria-labelledby"],y=["id"],M={class:"icon"};function _(e,t,n,s,o,i){return(0,r.uX)(),(0,r.CE)("svg",{class:"icon",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,iconName:e.iconName,"view-box":(e.width,e.height),"aria-labelledby":e.iconName},[(0,r.Lk)("title",{id:e.iconName,lang:"ru"},(0,a.v_)(e.iconName),9,y),(0,r.Lk)("g",M,[(0,r.RG)(e.$slots,"default",{},void 0,!0)])],8,N)}var I={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:30},height:{type:[Number,String],default:30}}},H=I;const S=(0,v.A)(H,[["render",_],["__scopeId","data-v-03b48f25"]]);var A=S;function E(e,t,n,s,o,i){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("path",{class:(0,a.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M27.5 15C27.5 8.1125 21.8875 2.5 15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 18.625 4.0625 21.8875 6.5375 24.175C6.5375 24.1875 6.5375 24.1875 6.525 24.2C6.65 24.325 6.8 24.425 6.925 24.5375C7 24.6 7.0625 24.6625 7.1375 24.7125C7.3625 24.9 7.6125 25.075 7.85 25.25C7.9375 25.3125 8.0125 25.3625 8.1 25.425C8.3375 25.5875 8.5875 25.7375 8.85 25.875C8.9375 25.925 9.0375 25.9875 9.125 26.0375C9.375 26.175 9.6375 26.3 9.9125 26.4125C10.0125 26.4625 10.1125 26.5125 10.2125 26.55C10.4875 26.6625 10.7625 26.7625 11.0375 26.85C11.1375 26.8875 11.2375 26.925 11.3375 26.95C11.6375 27.0375 11.9375 27.1125 12.2375 27.1875C12.325 27.2125 12.4125 27.2375 12.5125 27.25C12.8625 27.325 13.2125 27.375 13.575 27.4125C13.625 27.4125 13.675 27.425 13.725 27.4375C14.15 27.475 14.575 27.5 15 27.5C15.425 27.5 15.85 27.475 16.2625 27.4375C16.3125 27.4375 16.3625 27.425 16.4125 27.4125C16.775 27.375 17.125 27.325 17.475 27.25C17.5625 27.2375 17.65 27.2 17.75 27.1875C18.05 27.1125 18.3625 27.05 18.65 26.95C18.75 26.9125 18.85 26.875 18.95 26.85C19.225 26.75 19.5125 26.6625 19.775 26.55C19.875 26.5125 19.975 26.4625 20.075 26.4125C20.3375 26.3 20.6 26.175 20.8625 26.0375C20.9625 25.9875 21.05 25.925 21.1375 25.875C21.3875 25.725 21.6375 25.5875 21.8875 25.425C21.975 25.375 22.05 25.3125 22.1375 25.25C22.3875 25.075 22.625 24.9 22.85 24.7125C22.925 24.65 22.9875 24.5875 23.0625 24.5375C23.2 24.425 23.3375 24.3125 23.4625 24.2C23.4625 24.1875 23.4625 24.1875 23.45 24.175C25.9375 21.8875 27.5 18.625 27.5 15ZM21.175 21.2125C17.7875 18.9375 12.2375 18.9375 8.825 21.2125C8.275 21.575 7.825 22 7.45 22.4625C5.55 20.5375 4.375 17.9 4.375 15C4.375 9.1375 9.1375 4.375 15 4.375C20.8625 4.375 25.625 9.1375 25.625 15C25.625 17.9 24.45 20.5375 22.55 22.4625C22.1875 22 21.725 21.575 21.175 21.2125Z"},null,2),(0,r.Lk)("path",{class:(0,a.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M15 8.66211C12.4125 8.66211 10.3125 10.7621 10.3125 13.3496C10.3125 15.8871 12.3 17.9496 14.9375 18.0246C14.975 18.0246 15.025 18.0246 15.05 18.0246C15.075 18.0246 15.1125 18.0246 15.1375 18.0246C15.15 18.0246 15.1625 18.0246 15.1625 18.0246C17.6875 17.9371 19.675 15.8871 19.6875 13.3496C19.6875 10.7621 17.5875 8.66211 15 8.66211Z"},null,2)],64)}var O={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},P=O;const F=(0,v.A)(P,[["render",E],["__scopeId","data-v-12fe23db"]]);var D=F;function X(e,t,n,s,o,i){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("path",{class:(0,a.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z","stroke-width":"2"},null,2),(0,r.Lk)("path",{class:(0,a.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M17.2069 2.6903C16.7474 2.5 16.165 2.5 15.0001 2.5C13.8352 2.5 13.2529 2.5 12.7934 2.6903C12.1808 2.94404 11.6941 3.43073 11.4404 4.04329C11.3246 4.32293 11.2792 4.64813 11.2615 5.12249C11.2354 5.8196 10.8779 6.46486 10.2738 6.81366C9.66967 7.16245 8.93211 7.14943 8.31536 6.82345C7.89568 6.60163 7.59138 6.47828 7.29129 6.43878C6.63392 6.35223 5.96909 6.53036 5.44307 6.934C5.04854 7.23673 4.75733 7.74113 4.17491 8.74991C3.59248 9.75871 3.30127 10.2631 3.23636 10.7561C3.14982 11.4135 3.32796 12.0783 3.73159 12.6044C3.91582 12.8445 4.17474 13.0463 4.57661 13.2988C5.16737 13.67 5.54748 14.3024 5.54744 15C5.54741 15.6976 5.16731 16.3299 4.57659 16.701C4.17468 16.9536 3.91572 17.1555 3.73147 17.3956C3.32783 17.9216 3.14969 18.5864 3.23624 19.2438C3.30114 19.7368 3.59236 20.2413 4.17478 21.25C4.75722 22.2588 5.04843 22.7633 5.44294 23.0659C5.96897 23.4695 6.63379 23.6476 7.29117 23.5611C7.59123 23.5216 7.89552 23.3983 8.31517 23.1765C8.93196 22.8505 9.66957 22.8375 10.2737 23.1863C10.8779 23.5351 11.2354 24.1804 11.2615 24.8776C11.2793 25.3519 11.3246 25.6771 11.4404 25.9568C11.6941 26.5693 12.1808 27.056 12.7934 27.3098C13.2529 27.5 13.8352 27.5 15.0001 27.5C16.165 27.5 16.7474 27.5 17.2069 27.3098C17.8194 27.056 18.3061 26.5693 18.5597 25.9568C18.6756 25.6771 18.721 25.3519 18.7387 24.8775C18.7647 24.1804 19.1222 23.5351 19.7264 23.1863C20.3305 22.8374 21.0681 22.8505 21.685 23.1765C22.1046 23.3983 22.4089 23.5215 22.7089 23.561C23.3662 23.6476 24.0311 23.4695 24.5571 23.0659C24.9516 22.7631 25.2429 22.2588 25.8252 21.2499C26.4077 20.2411 26.699 19.7368 26.7639 19.2438C26.8504 18.5864 26.6722 17.9215 26.2686 17.3955C26.0844 17.1554 25.8254 16.9535 25.4235 16.701C24.8329 16.3299 24.4527 15.6975 24.4527 14.9999C24.4527 14.3023 24.8329 13.6701 25.4235 13.299C25.8255 13.0464 26.0845 12.8446 26.2687 12.6044C26.6724 12.0784 26.8505 11.4136 26.764 10.7562C26.6991 10.2632 26.4079 9.75879 25.8254 8.75C25.243 7.74121 24.9517 7.23681 24.5572 6.93409C24.0312 6.53045 23.3664 6.35231 22.709 6.43886C22.409 6.47836 22.1047 6.6017 21.685 6.8235C21.0682 7.14949 20.3306 7.16253 19.7265 6.8137C19.1222 6.46489 18.7647 5.81958 18.7387 5.12243C18.721 4.6481 18.6756 4.32291 18.5597 4.04329C18.3061 3.43073 17.8194 2.94404 17.2069 2.6903Z","stroke-width":"2"},null,2)],64)}var Q={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},j=Q;const B=(0,v.A)(j,[["render",X],["__scopeId","data-v-5f83065e"]]);var $=B;function x(e,t,n,s,o,i){return(0,r.uX)(),(0,r.CE)("path",{class:(0,a.C4)([{iconLigth:e.isHeaderLight||e.isMenuOpen},"iconPath"]),d:"M25.4298 21.4454H23.3703C23.2297 21.4454 23.0978 21.5069 23.0099 21.6153C22.8048 21.8643 22.5851 22.1045 22.3537 22.3331C21.4071 23.2806 20.2858 24.0357 19.0519 24.5567C17.7736 25.0966 16.3996 25.3736 15.0119 25.3711C13.6086 25.3711 12.2492 25.0957 10.9718 24.5567C9.73794 24.0357 8.61669 23.2806 7.67008 22.3331C6.72179 21.3887 5.96564 20.2694 5.44352 19.0372C4.90153 17.7598 4.62907 16.4034 4.62907 15C4.62907 13.5967 4.90446 12.2403 5.44352 10.9629C5.96501 9.72954 6.71501 8.61918 7.67008 7.66704C8.62516 6.71489 9.73551 5.96489 10.9718 5.4434C12.2492 4.90434 13.6086 4.62895 15.0119 4.62895C16.4152 4.62895 17.7746 4.90141 19.0519 5.4434C20.2882 5.96489 21.3986 6.71489 22.3537 7.66704C22.5851 7.89848 22.8019 8.13872 23.0099 8.38481C23.0978 8.49321 23.2326 8.55473 23.3703 8.55473H25.4298C25.6144 8.55473 25.7287 8.34965 25.6261 8.19438C23.3791 4.70219 19.4474 2.39067 14.9797 2.40239C7.96012 2.41997 2.33219 8.11821 2.40251 15.129C2.47282 22.0284 8.09196 27.5977 15.0119 27.5977C19.4679 27.5977 23.382 25.2891 25.6261 21.8057C25.7257 21.6504 25.6144 21.4454 25.4298 21.4454ZM28.0343 14.8155L23.8771 11.5342C23.7218 11.4112 23.4963 11.5225 23.4963 11.7188V13.9454H14.297C14.1681 13.9454 14.0627 14.0508 14.0627 14.1797V15.8204C14.0627 15.9493 14.1681 16.0547 14.297 16.0547H23.4963V18.2813C23.4963 18.4776 23.7248 18.5889 23.8771 18.4659L28.0343 15.1846C28.0624 15.1627 28.085 15.1347 28.1006 15.1027C28.1162 15.0707 28.1243 15.0356 28.1243 15C28.1243 14.9645 28.1162 14.9294 28.1006 14.8974C28.085 14.8654 28.0624 14.8374 28.0343 14.8155Z"},null,2)}var T={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},W=T;const R=(0,v.A)(W,[["render",x],["__scopeId","data-v-a0a8ad90"]]);var z=R,K={components:{IconBase:A,ProfileIcon:D,SettingsIcon:$,ExitIcon:z}},V=K;const Z=(0,v.A)(V,[["render",k],["__scopeId","data-v-4657f6bc"]]);var q=Z,G={components:{NavigationLinks:w,MenuIcons:q},computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},Y=G;const J=(0,v.A)(Y,[["render",d],["__scopeId","data-v-8d1b2cc8"]]);var U=J;function ee(e,t,n,s,o,i){return(0,r.uX)(),(0,r.CE)("div",{class:(0,a.C4)(["burgerButton",{open:e.isMenuOpen}])},[(0,r.Lk)("span",{class:(0,a.C4)(["burgerEl top",{"burgerEl-light":e.isHeaderLight}])},null,2),(0,r.Lk)("span",{class:(0,a.C4)(["burgerEl middle",{"burgerEl-light":e.isHeaderLight}])},null,2),(0,r.Lk)("span",{class:(0,a.C4)(["burgerEl bottom",{"burgerEl-light":e.isHeaderLight}])},null,2)],2)}var te={computed:{isHeaderLight(){return this.$store.state.Header.isHeaderLight},isMenuOpen(){return this.$store.state.Menu.isMenuOpen}}},ne=te;const re=(0,v.A)(ne,[["render",ee],["__scopeId","data-v-0da92372"]]);var ae=re;u.i0;var se={components:{HeaderMenu:U,BurgerButton:ae},methods:{...(0,u.PY)({toggleMenu:"Menu/toggleMenu"}),...(0,u.i0)({handleResize:"Menu/handleResize"})},computed:{isMenuOpen(){return this.$store.state.Menu.isMenuOpen},isHeaderLight(){return this.$store.state.Header.isHeaderLight},isLargeScreen(){return this.$store.state.Menu.isLargeScreen}},mounted(){window.addEventListener("resize",this.handleResize)}},oe=se;const ie=(0,v.A)(oe,[["render",i],["__scopeId","data-v-618368a3"]]);var ue=ie}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,s){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".3f22b82a.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".4f034e44.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuenews:";n.l=function(r,a,s,o){if(e[r])e[r].push(a);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+s){i=l;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[a];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Vue-News/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,s){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",n.nc&&(o.nonce=n.nc);var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var r=n&&n.type,i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=i,o.parentNode&&o.parentNode.removeChild(o),s(u)}};return o.onerror=o.onload=i,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],s=a.getAttribute("data-href");if(s===e||s===t)return a}},r=function(r){return new Promise((function(a,s){var o=n.miniCssF(r),i=n.p+o;if(t(o,i))return a();e(r,i,null,a,s)}))},a={524:0};n.f.miniCss=function(e,t){var n={122:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=s);var o=n.p+n.u(t),i=new Error,u=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,a[1](i)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,o=r[0],i=r[1],u=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var d=u(n)}for(t&&t(r);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=self["webpackChunkvuenews"]=self["webpackChunkvuenews"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(811)}));r=n.O(r)})();
//# sourceMappingURL=app.e8688f1b.js.map