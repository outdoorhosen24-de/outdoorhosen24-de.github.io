(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5,15,16],{255:function(t,e,r){"use strict";r.r(e);r(140),r(10),r(30);var o=r(22),n=r(67),l=r(139),c=r(256),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=this.product.categories[this.product.categories.length-2],r=n.find((function(t){return t.key===e.toLowerCase()||t.subCategories.find((function(t){return t.key==e.toLowerCase()}))}));r.key===e.toLowerCase()||(r=r.subCategories.find((function(t){return t.key===e.toLowerCase()})));var c=l.find((function(e){return e.name===t.product.brand}));return{config:o,categoryData:r,brandData:c}},methods:{decode:function(t){return c.decode(t)}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/hersteller/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,r){"use strict";r.r(e);var o={name:"products",props:{products:Array}},n=r(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(255).default})},259:function(t,e,r){"use strict";r.r(e);r(18),r(10);var o=r(22),n=r(67),l=r(35);for(var c=[],i=0;i<=l.length;i++)try{c.push(l[i].brand)}catch(t){}c=c.filter((function(t,e,r){return r.indexOf(t)===e}));var d={name:"categorySidebar",data:function(){return{config:o,categories:n}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},t._l(t.categories,(function(e,o){return r("div",{key:o,staticClass:"dropdown"},[r("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:e.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+e.slug+"/",title:""+e.name,id:"dropdownUser1","data-bs-toggle":e.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.subCategories.length>=1?r("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[r("li",t._l(e.subCategories,(function(e,o){return r("a",{key:o,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+e.slug+"/"}},[t._v(t._s(e.name))])})),0)]):t._e()],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,r){r(261)},261:function(t,e,r){"use strict";var o=r(5),n=r(1),l=r(13),c=r(3),d=r(25),f=r(8),m=r(109),h=r(14),v=r(50),C=r(110),x=r(191),y=r(6),_=r(32),D=y("replace"),k=RegExp.prototype,w=n.TypeError,E=c(C),T=c("".indexOf),L=c("".replace),S=c("".slice),A=Math.max,O=function(t,e,r){return r>t.length?-1:""===e?r:T(t,e,r)};o({target:"String",proto:!0},{replaceAll:function(t,e){var r,o,n,c,C,y,$,R,I,P=d(this),U=0,j=0,F="";if(null!=t){if((r=m(t))&&(o=h(d("flags"in k?t.flags:E(t))),!~T(o,"g")))throw w("`.replaceAll` does not allow non-global regexes");if(n=v(t,D))return l(n,t,P,e);if(_&&r)return L(h(P),t,e)}for(c=h(P),C=h(t),(y=f(e))||(e=h(e)),$=C.length,R=A(1,$),U=O(c,C,0);-1!==U;)I=y?h(e(C,U,c)):x(C,c,U,[],void 0,e),F+=S(c,j,U)+I,j=U+$,U=O(c,C,U+R);return j<c.length&&(F+=S(c,j)),F}})},281:function(t,e,r){"use strict";r.r(e);r(33),r(68),r(260),r(30);var o=r(22),n=r(82),l={name:"categoryComponent",head:function(){return{title:this.seoData&&this.seoData.seo&&this.seoData.seo.title?this.seoData.seo.title:o.categorySeo.defaultTitle.replaceAll("$PRODUKT",this.categoryData.name).replaceAll("$HERSTELLER",this.categoryData.brand).replaceAll("$KATEGORIE",this.categoryData.name),meta:[{hid:"description",name:"description",content:this.seoData&&this.seoData.seo&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription:o.categorySeo.defaultMetaDescription.replaceAll("$PRODUKT",this.categoryData.name).replaceAll("$HERSTELLER",this.categoryData.brand).replaceAll("$KATEGORIE",this.categoryData.name)},{hid:"robots",name:"robots",content:this.seoData&&this.seoData.seo&&this.seoData.seo.robots?this.seoData.seo.robots:o.categorySeo.defaultRobots}]}},data:function(){var t=this.$route.params.slug,e=n.a.categories.getCategoryFromSlug(t);return{products:n.a.products.getProductsFromCategory(e),categoryData:e,seoData:n.a.seo.getSeoForCategory(e)}}},c=r(19),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n              Kategorie\n            ")]),t._v(" "),r("h1",{staticClass:"mb-5 h2"},[t._v("\n              "+t._s(t.categoryData.name)+"\n            ")])]),t._v(" "),r("Products",{attrs:{products:t.products}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(259).default,Products:r(257).default})}}]);