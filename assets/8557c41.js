(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7],{261:function(t,e,n){"use strict";n.r(e);var r=n(19),c={data:function(){return{config:r}}},o=n(18),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row gy-2 gx-4 mb-4 mt-5"},t._l(t.config.checklist,(function(e,r){return n("div",{key:r,staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},266:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},269:function(t,e,n){"use strict";n.r(e);var r=n(19),c=n(258),o={name:"productheader",props:{product:Object},data:function(){return{config:r}},methods:{decode:function(t){return c.decode(t)}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[n("div",{staticClass:"position-relative h-100"},[n("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.name,preset:"productHeader"}})],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 fadeInUp"},[n("div",{staticClass:"section-title bg-white text-start text-primary pe-3 h6"},[t._v("\n            "+t._s(t.config.seo.mainKeyword)+"\n          ")]),t._v(" "),n("h1",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n            Die "+t._s(t.product.name)+" ist eine\n            "+t._s(t.product.categories[this.product.categories.length-2].slice(0,-1))+"\n            von der Marke "+t._s(t.decode(t.product.brand))+". Sie ist für einen Preis\n            von "+t._s(t.product.price)+" EUR verfügbar und ist sofort lieferbar.\n            Die "+t._s(t.decode(t.product.name))+" hat eine Gesamtbewertung von\n            "+t._s(t.product.stars)+"/5.\n          ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n            Das Produkt "),n("strong",[t._v(t._s(t.product.name))]),t._v(" bestand folgende\n            Testkriterien:\n          ")]),t._v(" "),n("Checklist"),t._v(" "),n("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testbericht"}},[t._v("Zum Testbericht")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Checklist:n(261).default})}}]);