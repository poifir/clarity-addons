(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Xo0":function(n,l,u){"use strict";var t=u("CcnG"),e=u("Ip0R"),r=u("ZYCi"),i=function(){function n(n){this.renderer=n,this.anchors=[],this.throttle=!1}return Object.defineProperty(n.prototype,"links",{set:function(n){var l=this;this.anchors=n.map(function(n){return"#"+n.fragment}),this.sub=n.changes.subscribe(function(){l.anchors=n.map(function(n){return"#"+n.fragment})})},enumerable:!0,configurable:!0}),n.prototype.handleEvent=function(){var n=this;this.scrollPosition=this.scrollable.scrollTop,this.throttle||window.requestAnimationFrame(function(){var l=n.findCurrentAnchor()||0;n.linkElements.forEach(function(u,t){n.renderer.setElementClass(u.nativeElement,"active",t===l)}),n.throttle=!1}),this.throttle=!0},n.prototype.findCurrentAnchor=function(){for(var n=this.anchors.length-1;n>=0;n--){var l=this.anchors[n];if(this.scrollable.querySelector(l)&&this.scrollable.querySelector(l).offsetTop<=this.scrollPosition)return n}},n.prototype.ngOnInit=function(){this.scrollable.addEventListener("scroll",this)},n.prototype.ngOnDestroy=function(){this.scrollable&&this.scrollable.removeEventListener("scroll",this),this.sub&&this.sub.unsubscribe()},n}(),o=function(){function n(n,l){var u=this;this.route=n,this.platformId=l,this.sub=this.route.fragment.subscribe(function(n){u.scrollToAnchor(n,!1)})}return n.prototype.ngOnInit=function(){this.scrollToAnchor(this.route.snapshot.fragment,!1)},n.prototype.scrollToAnchor=function(n,l){if(void 0===l&&(l=!0),n&&Object(e.B)(this.platformId)){var u=document.querySelector("#"+n);u&&u.scrollIntoView({behavior:l?"smooth":"instant",block:"start"})}},n.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},n}();u("0G9f"),u.d(l,"a",function(){return a}),u.d(l,"b",function(){return d});var a=t.La({encapsulation:2,styles:[],data:{}});function s(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t.fb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.description)})}function c(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"span",[["class","bug bug-ng"]],null,null,null,null,null)),(n()(),t.Na(1,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null))],null,function(n,l){var u=l.component;n(l,1,0,t.Pa(1,"assets/images/bugs/badge_ng",u.ngInProgress?"_inprogress":"",".svg"),t.Pa(1,"",u.uiInProgress?"Development in Progress":"Angular",""),t.Pa(1,"",u.uiInProgress?"Development in Progress":"Angular",""))})}function f(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,6,"div",[["class","component-workstream-bugs"]],null,null,null,null,null)),(n()(),t.Na(1,0,null,null,1,"span",[["class","bug bug-html"]],[[2,"hidden",null]],null,null,null,null)),(n()(),t.Na(2,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null)),(n()(),t.Na(3,0,null,null,1,"span",[["class","bug bug-css"]],[[2,"hidden",null]],null,null,null,null)),(n()(),t.Na(4,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null)),(n()(),t.Fa(16777216,null,null,1,null,c)),t.Ma(6,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,6,0,u.ngDone||u.ngInProgress)},function(n,l){var u=l.component;n(l,1,0,!u.uiDone&&!u.uiInProgress),n(l,2,0,t.Pa(1,"assets/images/bugs/badge_html5",u.uiInProgress?"_inprogress":"",".svg"),t.Pa(1,"",u.uiInProgress?"Development in Progress":"HTML5",""),t.Pa(1,"",u.uiInProgress?"Development in Progress":"HTML5","")),n(l,3,0,!u.uiDone&&!u.uiInProgress),n(l,4,0,t.Pa(1,"assets/images/bugs/badge_css3",u.uiInProgress?"_inprogress":"",".svg"),t.Pa(1,"",u.uiInProgress?"Development in Progress":"CSS3",""),t.Pa(1,"",u.uiInProgress?"Development in Progress":"CSS3",""))})}function g(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),t.Na(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","top"],["id","topTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Xa(n,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.Ma(2,671744,[[4,4],[1,4]],0,r.n,[r.l,r.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.Ma(3,1720320,null,2,r.m,[r.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.db(603979776,3,{links:1}),t.db(603979776,4,{linksWithHrefs:1}),(n()(),t.fb(-1,null,[" Examples & Code "]))],function(n,l){n(l,2,0,"top","."),n(l,3,0,"active")},function(n,l){n(l,1,0,t.Xa(l,2).target,t.Xa(l,2).href)})}function h(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),t.Na(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","guidelines"],["id","guidelinesTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Xa(n,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.Ma(2,671744,[[6,4],[1,4]],0,r.n,[r.l,r.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.Ma(3,1720320,null,2,r.m,[r.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.db(603979776,5,{links:1}),t.db(603979776,6,{linksWithHrefs:1}),(n()(),t.fb(-1,null,[" Design Guidelines "]))],function(n,l){n(l,2,0,"guidelines","."),n(l,3,0,"active")},function(n,l){n(l,1,0,t.Xa(l,2).target,t.Xa(l,2).href)})}function b(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),t.Na(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","top"],["id","topTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Xa(n,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.Ma(2,671744,[[8,4],[1,4]],0,r.n,[r.l,r.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.Ma(3,1720320,null,2,r.m,[r.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.db(603979776,7,{links:1}),t.db(603979776,8,{linksWithHrefs:1}),(n()(),t.fb(-1,null,[" Design Guidelines "]))],function(n,l){n(l,2,0,"top","."),n(l,3,0,"active")},function(n,l){n(l,1,0,t.Xa(l,2).target,t.Xa(l,2).href)})}function p(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),t.Na(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","examples"],["id","guidelinesTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Xa(n,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.Ma(2,671744,[[10,4],[1,4]],0,r.n,[r.l,r.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.Ma(3,1720320,null,2,r.m,[r.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.db(603979776,9,{links:1}),t.db(603979776,10,{linksWithHrefs:1}),(n()(),t.fb(-1,null,[" Code & Examples "]))],function(n,l){n(l,2,0,"examples","."),n(l,3,0,"active")},function(n,l){n(l,1,0,t.Xa(l,2).target,t.Xa(l,2).href)})}function d(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,20,"div",[["class","dox-wrapper dox-header"]],[[2,"new-component-layout",null]],null,null,null,null)),(n()(),t.Na(1,0,null,null,19,"section",[],null,null,null,null,null)),(n()(),t.Na(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.fb(3,null,["",""])),(n()(),t.Fa(16777216,null,null,1,null,s)),t.Ma(5,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Fa(16777216,null,null,1,null,f)),t.Ma(7,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Na(8,0,null,null,12,"div",[["class","dox-tabs"]],null,null,null,null,null)),(n()(),t.Na(9,0,null,null,11,"ul",[["class","list-unstyled"]],null,null,null,null,null)),t.Ma(10,212992,null,2,i,[t.C],{scrollable:[0,"scrollable"]},null),t.db(603979776,1,{links:1}),t.db(603979776,2,{linkElements:1}),(n()(),t.Fa(16777216,null,null,1,null,g)),t.Ma(14,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Fa(16777216,null,null,1,null,h)),t.Ma(16,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Fa(16777216,null,null,1,null,b)),t.Ma(18,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Fa(16777216,null,null,1,null,p)),t.Ma(20,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Na(21,0,[["scrollable",1]],null,4,"section",[["class","dox-content"],["hash-listener",""]],[[4,"position",null]],null,null,null,null)),t.Ma(22,212992,null,0,o,[r.a,t.z],null,null),(n()(),t.Na(23,0,null,null,2,"div",[["class","dox-content-wrapper"]],null,null,null,null,null)),(n()(),t.Na(24,0,null,null,0,"a",[["id","top"]],null,null,null,null,null)),t.Wa(null,0)],function(n,l){var u=l.component;n(l,5,0,u.description),n(l,7,0,!u.useNewLayout),n(l,10,0,t.Xa(l,21)),n(l,14,0,!u.useNewLayout),n(l,16,0,!u.useNewLayout),n(l,18,0,u.useNewLayout),n(l,20,0,u.useNewLayout),n(l,22,0)},function(n,l){var u=l.component;n(l,0,0,u.useNewLayout),n(l,3,0,u.title),n(l,21,0,"relative")})}},"0G9f":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.title="",this.newLayout=!1,this.ui=0,this.ng=0,this.description=""}return Object.defineProperty(n.prototype,"useNewLayout",{get:function(){return!!this.newLayout},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"uiInProgress",{get:function(){return 4<this.ui&&this.ui<20},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"uiDone",{get:function(){return this.ui>19},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"ngInProgress",{get:function(){return 4<this.ng&&this.ui<20},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"ngDone",{get:function(){return this.ng>19},enumerable:!0,configurable:!0}),n}()},JsA7:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){}},"N+3j":function(n,l,u){"use strict";for(var t=u("qwhO"),e=new Map,r=0,i=t.list;r<i.length;r++){var o=i[r];e.set(o.url,o)}u.d(l,"a",function(){return a});var a=function(){function n(n){this.ui=-1,this.ng=-1,this.title="",this.newLayout=!1;var l=e.get(n);this.populateComponentDetails(l.text,l.ui,l.ng,l.newLayout)}return n.prototype.populateComponentDetails=function(n,l,u,t){this.ui=l,this.ng=u,this.title=n,this.newLayout=t},n}()},QkwE:function(n,l,u){"use strict";u.d(l,"a",function(){return i}),u.d(l,"b",function(){return s});var t=u("CcnG"),e=u("KZfJ"),r=u("Ip0R"),i=(u("vAyd"),t.La({encapsulation:0,styles:["pre[_ngcontent-%COMP%] {\n            background: transparent;\n            padding: 12px;\n        }"],data:{}}));function o(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),t.Na(1,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),t.Na(2,0,null,null,2,"code",[],null,null,null,null,null)),t.Ma(3,1064960,[[1,4]],0,e.p,[t.k,t.D,t.z],{highlight:[0,"highlight"]},null),(n()(),t.fb(4,null,["",""]))],function(n,l){n(l,3,0,"language-"+l.component.language)},function(n,l){n(l,4,0,l.component.code.trim())})}function a(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),t.Na(1,0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),t.Na(2,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(n()(),t.fb(3,null,["",""]))],null,function(n,l){n(l,3,0,l.component.code.trim())})}function s(n){return t.hb(0,[t.db(671088640,1,{codeHighlight:0}),(n()(),t.Fa(16777216,null,null,1,null,o)),t.Ma(2,16384,null,0,r.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Fa(16777216,null,null,1,null,a)),t.Ma(4,16384,null,0,r.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,2,0,!u.disablePrism),n(l,4,0,u.disablePrism)},null)}},vAyd:function(n,l,u){"use strict";u.d(l,"a",function(){return t}),u("KZfJ");var t=function(){function n(){this.language="html",this.disablePrism=!1}return n.prototype.ngAfterViewInit=function(){this.codeHighlight&&this.codeHighlight.redraw()},n}()}}]);