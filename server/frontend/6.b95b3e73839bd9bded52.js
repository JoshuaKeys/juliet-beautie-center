(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iydT:function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return q}));var i=n("ofXK"),r=n("tyNb"),s=n("l7P3");const o=Object(s.n)("[HomeComponent] AssembleProductsRequest"),c=Object(s.n)("[HomeEffects] AssembleProductsSuccess",Object(s.s)()),a=Object(s.o)("home"),l=Object(s.q)(a,e=>e?e.featuredProducts:[]),d=Object(s.q)(a,e=>e?e.bestSellingProducts:[]);var b=n("fXoL"),u=n("zgUX"),h=n("TlR+");const p=["slider"],f=["prev"],m=["next"],g=["container"];let _=(()=>{class e{constructor(e){this.renderer=e,this.direction=null}ngOnInit(){setInterval(()=>{this.onNextClicked()},5e3)}onDrag(e){console.log(e)}ngAfterViewInit(){this.renderer.listen(this.slider.nativeElement,"transitionend",()=>{-1===this.direction?this.renderer.appendChild(this.slider.nativeElement,this.slider.nativeElement.firstElementChild):1===this.direction&&this.renderer.insertBefore(this.slider.nativeElement,this.slider.nativeElement.lastElementChild,this.slider.nativeElement.firstElementChild),this.renderer.setStyle(this.slider.nativeElement,"transition","none"),this.renderer.setStyle(this.slider.nativeElement,"transform","translateX(0)"),setTimeout(()=>this.renderer.setStyle(this.slider.nativeElement,"transition","all 0.5s"))})}onPrevClicked(){1!==this.direction&&(this.direction=1,this.renderer.appendChild(this.slider.nativeElement,this.slider.nativeElement.firstElementChild)),this.renderer.setStyle(this.container.nativeElement,"justifyContent","flex-end"),this.renderer.setStyle(this.slider.nativeElement,"transform","translateX(50%)")}onNextClicked(){null===this.direction?this.direction=-1:1===this.direction&&(this.direction=-1,this.renderer.insertBefore(this.slider.nativeElement,this.slider.nativeElement.lastElementChild,this.slider.nativeElement.firstElementChild)),this.renderer.setStyle(this.container.nativeElement,"justifyContent","flex-start"),this.renderer.setStyle(this.slider.nativeElement,"transform","translateX(-50%)")}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(b.D))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-infinite-carousel"]],viewQuery:function(e,t){var n;1&e&&(b.nc(p,!0),b.nc(f,!0),b.nc(m,!0),b.nc(g,!0)),2&e&&(b.bc(n=b.Sb())&&(t.slider=n.first),b.bc(n=b.Sb())&&(t.prev=n.first),b.bc(n=b.Sb())&&(t.next=n.first),b.bc(n=b.Sb())&&(t.container=n.first))},decls:17,vars:0,consts:[[1,"infinite-carousel"],[1,"infinite-carousel__container",3,"dragstart"],["container",""],[1,"infinite-carousel__slider"],["slider",""],[1,"infinite-carousel__item","infinite-carousel__item--first"],[1,"infinite-carousel__item-header"],["routerLink","shop/all",1,"infinite-carousel__button"],[1,"infinite-carousel__item","infinite-carousel__item--second"],[1,"infinite-carousel__item-body"]],template:function(e,t){1&e&&(b.Kb(0,"div",0),b.Kb(1,"div",1,2),b.Rb("dragstart",(function(e){return t.onDrag(e)})),b.Kb(3,"div",3,4),b.Kb(5,"section",5),b.Kb(6,"h1",6),b.ic(7,"Welcome to Juliet Beauty center"),b.Jb(),b.Kb(8,"button",7),b.ic(9,"shop now"),b.Jb(),b.Jb(),b.Kb(10,"section",8),b.Kb(11,"h1",6),b.ic(12,"Foaming Scrubs"),b.Jb(),b.Kb(13,"p",9),b.ic(14,"slought off dry, dead skin & leave your skin feeling baby soft"),b.Jb(),b.Kb(15,"button",7),b.ic(16,"shop now"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb())},directives:[r.c],styles:[".infinite-carousel[_ngcontent-%COMP%]{width:100%;height:500px;margin:0 auto}.infinite-carousel__container[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:3px;display:flex;justify-content:flex-start;position:relative;box-sizing:border-box;overflow-x:hidden;cursor:pointer}.infinite-carousel__item-header[_ngcontent-%COMP%]{color:#fff;font-size:46px;max-width:506px;text-transform:uppercase;text-align:center}.infinite-carousel__item-body[_ngcontent-%COMP%]{max-width:506px;color:#fff!important;color:#d26e4b;text-transform:uppercase;font-size:1.2em}.infinite-carousel__slider[_ngcontent-%COMP%]{display:flex;width:200%;flex-shrink:0;box-sizing:border-box;transition:all .5s}.infinite-carousel__item[_ngcontent-%COMP%]{flex-basis:50%;flex-shrink:0;width:50%;display:flex;justify-content:center;flex-direction:column;background-size:cover;background-position:50%;align-items:center;flex:1;box-sizing:border-box}.infinite-carousel__item--first[_ngcontent-%COMP%]{background-image:url(carousel-img-1.7cab3d9bd325971d5a8f.jpg)}.infinite-carousel__item--second[_ngcontent-%COMP%]{background-image:url(carousel-img-2.8b2c0453c7c768721504.jpg)}.infinite-carousel__button[_ngcontent-%COMP%]{font-size:1.15em;background-color:#e20a96;color:#fff;width:150px;height:50px;border:none;text-transform:uppercase}.infinite-carousel__button[_ngcontent-%COMP%]:after{box-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,.1),inset 0 2em 15px 0 hsla(0,0%,100%,.2);display:block}.infinite-carousel__arrow[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:10px}.infinite-carousel__arrow--prev[_ngcontent-%COMP%]{left:10px}.infinite-carousel__arrow--next[_ngcontent-%COMP%]{right:10px}"]}),e})();const w=[[["h2"]],[["p"]],[["button"]]],x=["h2","p","button"];let y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Bb({type:e,selectors:[["app-what-we-do-item"]],ngContentSelectors:x,decls:4,vars:0,consts:[[1,"what-we-do-item"]],template:function(e,t){1&e&&(b.Xb(w),b.Kb(0,"div",0),b.Wb(1),b.Wb(2,1),b.Wb(3,2),b.Jb())},styles:[".what-we-do-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),e})(),O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Bb({type:e,selectors:[["app-what-we-do"]],decls:22,vars:0,consts:[[1,"what-we-do"],[1,"what-we-do__container","container"],[1,"what-we-do__header"],[1,"what-we-do__heading"],[1,"what-we-do__items"],[1,"what-we-do__item"],[1,"what-we-do__item-header"],[1,"what-we-do__item-body"],["routerLink","",1,"what-we-do__ctas"]],template:function(e,t){1&e&&(b.Kb(0,"section",0),b.Kb(1,"div",1),b.Kb(2,"header",2),b.Kb(3,"h2",3),b.ic(4,"what we do"),b.Jb(),b.Jb(),b.Kb(5,"ul",4),b.Kb(6,"li",5),b.Kb(7,"app-what-we-do-item"),b.Kb(8,"h2",6),b.ic(9,"handmade products"),b.Jb(),b.Kb(10,"p",7),b.ic(11," We create healthy bath and body products in small batches to ensure quality and freshness "),b.Jb(),b.Kb(12,"button",8),b.ic(13,"Learn More"),b.Jb(),b.Jb(),b.Jb(),b.Kb(14,"li",5),b.Kb(15,"app-what-we-do-item"),b.Kb(16,"h2",6),b.ic(17,"great customer service"),b.Jb(),b.Kb(18,"p",7),b.ic(19," Finding companies that genuinely care about their customers is hard these days. We are for you "),b.Jb(),b.Kb(20,"button",8),b.ic(21,"Learn More"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb())},directives:[y,r.c],styles:[".what-we-do[_ngcontent-%COMP%]{background-color:#fff}.what-we-do__heading[_ngcontent-%COMP%]{font-size:46px;text-transform:uppercase;color:#e20a96;text-align:center;margin:0;height:80px;display:flex;align-items:center;justify-content:center}.what-we-do__items[_ngcontent-%COMP%]{padding:0;margin:0;display:flex;justify-content:space-between}.what-we-do__item[_ngcontent-%COMP%]{list-style-type:none;max-width:500px}.what-we-do__item-header[_ngcontent-%COMP%]{font-size:26px;text-transform:uppercase;text-align:center}.what-we-do__item-body[_ngcontent-%COMP%]{text-align:center;margin:0 0 20px}.what-we-do__ctas[_ngcontent-%COMP%]{height:50px;width:150px;background-color:#e20a96;color:#fff;border:none;cursor:pointer}"]}),e})();var v=n("TnyQ"),C=n("R8s9");function P(e,t){if(1&e&&(b.Kb(0,"li",4),b.Ib(1,"app-product-item",5),b.Jb()),2&e){const e=t.$implicit;b.xb(1),b.Yb("product",e)}}function J(e,t){if(1&e&&(b.Kb(0,"li",4),b.Ib(1,"app-product-item",5),b.Jb()),2&e){const e=t.$implicit;b.xb(1),b.Yb("product",e)}}const K=[{path:"",component:(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.store.dispatch(o()),this.featuredProducts$=this.store.select(l),this.bestSellingProducts$=this.store.select(d)}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(s.h))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-home"]],decls:17,vars:6,consts:[[1,"home__best-selling","container"],[1,"home__best-selling-header"],[1,"home__best-selling-items"],["class","home__best-selling-item",4,"ngFor","ngForOf"],[1,"home__best-selling-item"],[3,"product"]],template:function(e,t){1&e&&(b.Ib(0,"app-top-header"),b.Ib(1,"app-main-header"),b.Ib(2,"app-infinite-carousel"),b.Ib(3,"app-what-we-do"),b.Kb(4,"section",0),b.Kb(5,"h4",1),b.ic(6,"feature products"),b.Jb(),b.Kb(7,"ul",2),b.gc(8,P,2,1,"li",3),b.Ub(9,"async"),b.Jb(),b.Jb(),b.Kb(10,"section",0),b.Kb(11,"h4",1),b.ic(12,"best selling products"),b.Jb(),b.Kb(13,"ul",2),b.gc(14,J,2,1,"li",3),b.Ub(15,"async"),b.Jb(),b.Jb(),b.Ib(16,"app-footer")),2&e&&(b.xb(8),b.Yb("ngForOf",b.Vb(9,2,t.featuredProducts$)),b.xb(6),b.Yb("ngForOf",b.Vb(15,4,t.bestSellingProducts$)))},directives:[u.a,h.a,_,O,i.l,v.a,C.a],pipes:[i.b],styles:[".home__best-selling[_ngcontent-%COMP%]{border-top:1px solid #d8d8d8;margin-top:70px}.home__best-selling-header[_ngcontent-%COMP%]{font-size:1.25em;text-transform:uppercase;border:1px solid #d8d8d8;display:flex;justify-content:center;padding:10px 20px;margin:-25px auto 0;background-color:#fff;max-width:280px}.home__best-selling-items[_ngcontent-%COMP%]{display:flex;margin:30px 0;padding:0;width:100%;flex-wrap:wrap}.home__best-selling-item[_ngcontent-%COMP%]{list-style-type:none;width:25%;padding:0 25px;box-sizing:border-box}@media screen and (max-width:968px){.home__best-selling-item[_ngcontent-%COMP%]{width:33.3%}}@media screen and (max-width:549px){.home__best-selling-item[_ngcontent-%COMP%]{width:50%}}"]}),e})()}];let j=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[r.f.forChild(K)],r.f]}),e})();var M=n("FpXt");const E=Object(s.p)(null,Object(s.r)(c,(e,{bestSelling:t,featured:n})=>Object.assign(Object.assign({},e),{featuredProducts:n,bestSellingProducts:t})));function S(e,t){return E(e,t)}var k=n("wO+i"),F=n("tk/3");let I=(()=>{class e{constructor(e){this.httpClient=e}getFeatureProducts(){return this.httpClient.get("/api/featured-products").pipe(Object(k.a)("products"))}getBestSellingProducts(){return this.httpClient.get("/api/best-selling-products").pipe(Object(k.a)("products"))}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(F.a))},e.\u0275prov=b.Db({token:e,factory:e.\u0275fac}),e})();var z=n("9jGm"),B=n("cp0P"),$=n("5+tZ"),X=n("lJxs");let W=(()=>{class e{constructor(e,t){this.actions$=e,this.homeService=t,this.assembleProductsRequest$=Object(z.c)(()=>this.actions$.pipe(Object(z.d)(o),Object($.a)(e=>Object(B.a)({bestSelling:this.homeService.getBestSellingProducts(),featured:this.homeService.getFeatureProducts()}).pipe(Object(X.a)(({bestSelling:e,featured:t})=>c({bestSelling:e,featured:t}))))))}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(z.a),b.Ob(I))},e.\u0275prov=b.Db({token:e,factory:e.\u0275fac}),e})(),q=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},providers:[I],imports:[[j,i.c,M.a,s.j.forFeature("home",S),z.b.forFeature([W])]]}),e})()}}]);