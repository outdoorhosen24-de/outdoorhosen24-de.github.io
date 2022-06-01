(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4,7,12,15,16,18],{255:function(t,e,r){"use strict";r.r(e);r(140),r(10),r(30);var n=r(22),o=r(67),c=r(139),l=r(256),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=this.product.categories[this.product.categories.length-2],r=o.find((function(t){return t.key===e.toLowerCase()||t.subCategories.find((function(t){return t.key==e.toLowerCase()}))}));r.key===e.toLowerCase()||(r=r.subCategories.find((function(t){return t.key===e.toLowerCase()})));var l=c.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:r,brandData:l}},methods:{decode:function(t){return l.decode(t)}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/hersteller/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,r){"use strict";r.r(e);var n={name:"products",props:{products:Array}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(255).default})},262:function(t,e,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("717cada8",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";r(262)},264:function(t,e,r){var n=r(69)(!1);n.push([t.i,"h1[data-v-7c996c46]{color:#fff}.bg-image[data-v-7c996c46]{min-height:400px;background-image:url(/assets/images/featureHeader/outdoor-hosen.jpg);height:100%;background-repeat:no-repeat;background-size:cover}",""]),t.exports=n},267:function(t,e,r){"use strict";r.r(e);var n={name:"featureHeaderTwo",props:{headline:String,subline:String}},o=(r(263),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"bg-dark py-5 bg-image"},[r("div",{staticClass:"container px-4 px-lg-5 my-5"},[r("div",{staticClass:"text-center text-white"},[r("h1",{staticClass:"display-4 fw-bolder"},[t._v(t._s(t.headline))]),t._v(" "),r("p",{staticClass:"lead fw-normal text-white mb-0"},[t._v("\n        "+t._s(t.subline)+"\n      ")])])])])}),[],!1,null,"7c996c46",null);e.default=component.exports;installComponents(component,{Header:r(192).default})},268:function(t,e,r){"use strict";r.r(e);r(44);var n=r(22),o=r(139),c={name:"brandsComponent",data:function(){return{config:n,brands:o.slice(0,20)}}},l=r(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row py-5"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n          "+t._s(t.config.seo.mainKeyword)+"\n        ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v("Marken")])]),t._v(" "),t._l(t.brands,(function(e,n){return r("div",{key:n,staticClass:"col-2 h4 w-50"},[r("nuxt-link",{attrs:{to:"/hersteller/"+e.slug+"/",title:t.config.seo.mainKeyword+" von "+e.name},domProps:{innerHTML:t._s(e.name)}})],1)}))],2)])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,r){"use strict";r.r(e);r(18),r(10),r(45),r(55);var n=r(22),o=r(35).filter((function(t){return n.winnerProducts.includes(t.sku)})),c={name:"testsieger",data:function(){return{featured:o,config:n}}},l=r(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v("Testsieger")])]),t._v(" "),r("div",{staticClass:"row g-4 justify-content-center"},t._l(t.featured,(function(t){return r("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[r("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(255).default})},270:function(t,e,r){"use strict";r.r(e);var n=r(22),o=r(82).a.products.getFeaturedProducts(),c={name:"popularProducts",data:function(){return{config:n,products:o}}},l=r(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),r("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return r("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[r("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(255).default})},283:function(t,e,r){"use strict";r.r(e);r(44);var n=r(22),o=r(35),c={name:"IndexPage",head:{title:n.seo.index.title,meta:[{hid:"description",name:"description",content:n.seo.index.metaDescription},{hid:"robots",name:"robots",content:n.seo.index.robots}]},asyncData:function(){return{config:n,products:o.slice(0,n.numberOfProductsOnStartpage)}}},l=r(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("FeatureHeaderTwo",{attrs:{headline:t.config.seo.mainKeyword,subline:t.config.subline}}),t._v(" "),r("Brands"),t._v(" "),r("WinnerProducts"),t._v(" "),r("div",{staticClass:"container"},[r("Products",{attrs:{products:t.products}})],1),t._v(" "),r("PopularProducts")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FeatureHeaderTwo:r(267).default,Brands:r(268).default,WinnerProducts:r(269).default,Products:r(257).default,PopularProducts:r(270).default})}}]);