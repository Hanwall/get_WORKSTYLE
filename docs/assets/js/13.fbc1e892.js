(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{249:function(t,e,a){},270:function(t,e,a){"use strict";a(249)},342:function(t,e,a){"use strict";a.r(e);var n={name:"Home",components:{NavLink:a(248).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(a(270),a(12)),r=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n    "),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/"}},[t._v("VUEPRESS")]),e("br"),t._v(" "),e("span",{attrs:{id:"sitetime"}})]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}}),t._v(" "),e("script",[t._v('\nfunction siteTime(){\n      window.setTimeout("siteTime()", 1000);\n      var seconds = 1000;\n      var minutes = seconds * 60;\n      var hours = minutes * 60;\n      var days = hours * 24;\n      var years = days * 365;\n      var today = new Date();\n      var todayYear = today.getFullYear();\n      var todayMonth = today.getMonth()+1;\n      var todayDate = today.getDate();\n      var todayHour = today.getHours();\n      var todayMinute = today.getMinutes();\n      var todaySecond = today.getSeconds();\n      /*\n      Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)\n      year - 作为date对象的年份，为4位年份值\n      month - 0-11之间的整数，做为date对象的月份\n      day - 1-31之间的整数，做为date对象的天数\n      hours - 0(午夜24点)-23之间的整数，做为date对象的小时数\n      minutes - 0-59之间的整数，做为date对象的分钟数\n      seconds - 0-59之间的整数，做为date对象的秒数\n      microseconds - 0-999之间的整数，做为date对象的毫秒数\n      */\n      var t1 = Date.UTC(2022,09,16,00,00,00); //北京时间2022-09-16 00:00:00\n      var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);\n      var diff = t2-t1;\n      var diffYears = Math.floor(diff/years);\n      var diffDays = Math.floor((diff/days)-diffYears*365);\n      var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);\n      var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);\n      var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);\n      document.getElementById("sitetime").innerHTML=" 本站已运行 "+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒";\n  }\n  siteTime()\n  ')])],1)}),[],!1,null,null,null).exports,i=a(338),o=a(339),d=a(340);a(95);const l=/#.*$/,u=/\.(md|html)$/,c=/\/$/,h=/^[a-z]+:/i;function f(t){return decodeURI(t).replace(l,"").replace(u,"")}function p(t){return h.test(t)}function g(t){if(p(t))return t;const e=t.match(l),a=e?e[0]:"",n=f(t);return c.test(n)?t:n+".html"+a}function b(t,e,a){if(p(e))return{type:"external",path:e};a&&(e=function(t,e,a){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const s=e.split("/");a&&s[s.length-1]||s.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,a));const n=f(e);for(let e=0;e<t.length;e++)if(f(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:g(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function m(t,e,a,n){const{pages:s,themeConfig:r}=a,i=n&&r.locales&&r.locales[n]||r;if("auto"===(t.frontmatter.sidebar||i.sidebar||r.sidebar))return v(t);const o=i.sidebar||r.sidebar;if(o){const{base:a,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var a;return{}}(e,o);return"auto"===n?v(t):n?n.map(t=>function t(e,a,n,s=1){if("string"==typeof e)return b(a,e,n);if(Array.isArray(e))return Object.assign(b(a,e[0],n),{title:e[1]});{const r=e.children||[];return 0===r.length&&e.path?Object.assign(b(a,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map(e=>t(e,a,n,s+1)),collapsable:!1!==e.collapsable}}}(t,s,a)):[]}return[]}function v(t){const e=function(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}var y={name:"Layout",components:{Home:r,Page:o.a,Sidebar:d.a,Navbar:i.a},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return m(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},_=Object(s.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=_.exports}}]);