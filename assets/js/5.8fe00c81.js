(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,e,s){},237:function(t,e,s){"use strict";var a=s(195);s.n(a).a},248:function(t,e,s){"use strict";s.r(e);var a={data:()=>({newsData:[]}),created(){this.WYnewsfn()},methods:{async WYnewsfn(){let t=localStorage.getItem("WYnews"),e=localStorage.getItem("curhour");if(t&&e==(new Date).getHours())return void(this.newsData=JSON.parse(t));const s=await this.$http("post","openSource_WYnews");this.newsData=s.data.result,localStorage.setItem("WYnews",JSON.stringify(this.newsData))},news_datailesfn(t){window.open(t)}}},n=(s(237),s(11)),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news_page_box"},t._l(t.newsData,(function(e,a){return s("div",{key:a,staticClass:"new_line"},[s("h4",{staticClass:"pointer",on:{click:function(s){return s.stopPropagation(),t.news_datailesfn(e.path)}}},[t._v(t._s(e.title))]),t._v(" "),s("img",{attrs:{src:e.image,alt:""}}),t._v(" "),s("p",{staticClass:"pointer passtime",on:{click:function(s){return s.stopPropagation(),t.news_datailesfn(e.path)}}},[t._v(t._s(e.passtime))])])})),0)}),[],!1,null,"9e38f0be",null);e.default=i.exports}}]);