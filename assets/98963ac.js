(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{276:function(t,n,e){"use strict";e.r(n);e(43);var r=e(19),o=e(140),l=e(109),c={name:"brandsComponent",data:function(){var t=l.a.seo.getSeoForPage("shop");return{config:r,seoData:t,brands:o.slice(0,20)}}},d=e(18),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"row py-5"},[e("div",{staticClass:"text-center fadeInUp"},[e("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),e("div",{staticClass:"mb-5 h2"},[t._v("Marken")])]),t._v(" "),t._l(t.brands,(function(n,r){return e("div",{key:r,staticClass:"col-2 h4 w-50"},[e("nuxt-link",{attrs:{to:"/marken/"+n.slug+"/",title:t.config.seo.mainKeyword+" von "+n.name},domProps:{innerHTML:t._s(n.name)}})],1)})),t._v(" "),e("div",{staticClass:"text-center pt-5"},[e("nuxt-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/marken/",title:t.seoData.title}},[t._v("Alle Marken")])],1)],2)])}),[],!1,null,null,null);n.default=component.exports}}]);