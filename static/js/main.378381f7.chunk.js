(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(27)},21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(10),i=t.n(c),l=(t(21),t(8)),o=t(3),u=t(1),m=t(2);function s(){var e=Object(u.a)(["\n  display: inline-block;\n  background-color: #487399;\n  border-radius: 5px;\n  padding: 5px 30px;\n  margin: 3px;\n  color: white;\n  font-size: 17px;\n"]);return s=function(){return e},e}function f(){var e=Object(u.a)(["\n  max-width: 150px;\n  max-height: 150px;\n  border-radius: 50%;\n"]);return f=function(){return e},e}function p(){var e=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n"]);return p=function(){return e},e}function d(){var e=Object(u.a)(["\n  color: ",";\n  font-style: italic;\n  font-size: ",";\n"]);return d=function(){return e},e}function E(){var e=Object(u.a)(["\n  font-size: 17px;\n  margin-bottom: 10px;\n  font-weight: bold;\n"]);return E=function(){return e},e}function g(){var e=Object(u.a)(["\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #487399;\n  margin-bottom: 10px;\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\n  flex-basis: 100%;\n  flex: ",";\n"]);return b=function(){return e},e}function v(){var e=Object(u.a)(["\n  padding: 1em 2em;\n  margin-top: 1em;\n  background-color: ",";\n"]);return v=function(){return e},e}function x(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n"]);return x=function(){return e},e}function j(){var e=Object(u.a)(["\n  padding-top: 3em;\n  margin: 0 auto;\n  max-width: 1100px;\n"]);return j=function(){return e},e}function O(){var e=Object(u.a)(["\n  margin: ",";\n  padding: ",";\n  color: ",";\n"]);return O=function(){return e},e}var h=m.a.div(O(),function(e){return e.margin?e.margin:""},function(e){return e.padding?e.padding:""},function(e){return e.color?e.color:"#000"}),y=function(e){var n=e.type,t=e.size,a=void 0===t?"":t,c=e.title,i=e.color,u=void 0===i?"#000":i,m=e.className,s=void 0===m?"":m,f=e.style,p=void 0===f?{}:f,d=e.tag,E=void 0===d?"span":d,g=e.iconProps,b=void 0===g?{}:g,v=e.children,x=Object(o.a)(e,["type","size","title","color","className","style","tag","iconProps","children"]);return r.a.createElement(E,Object(l.a)({children:r.a.createElement(r.a.Fragment,null,r.a.createElement("i",Object.assign({style:Object(l.a)({color:u},p),className:"\n          fa fa-".concat(n,"\n          ").concat(a?" fa-"+a:"","\n          ").concat(s?" "+s:"").trim(),"aria-hidden":"true"},b)),r.a.createElement("span",{style:{marginLeft:"10px"}},c||v))},x))},k=m.a.div(j()),z=m.a.div(x(),function(e){return e.direction},function(e){return e.justifyContent},function(e){return e.alignItems}),w=Object(m.a)(z)(v(),function(e){return e.bgColor?e.bgColor:"#fff"}),C=m.a.div(b(),function(e){return e.size?parseInt(e.size)/12:1}),S=m.a.h3(g()),P=m.a.h4(E()),F=function(e){var n=e.title,t=e.children,a=Object(o.a)(e,["title","children"]);return r.a.createElement(h,Object.assign({margin:"0 0 30px 0"},a),r.a.createElement(S,null,n),r.a.createElement("div",null,t))},I=function(e){var n=e.url,t=e.children,a=Object(o.a)(e,["url","children"]);return r.a.createElement(h,{margin:"0 0 10px 0"},r.a.createElement(z,a,r.a.createElement(h,{margin:"0 10px 0 0",color:"#487399"},"-"),r.a.createElement(C,null,t,n&&r.a.createElement(y,{tag:"a",type:"external-link",href:n,target:"_blank",style:{textDecoration:"none",marginLeft:"5px",color:"#487399"}}))))},N=m.a.span(d(),function(e){return e.color?e.color:"gray"},function(e){return e.fontSize?e.fontSize:"13px"}),J=m.a.a(p()),L=m.a.img(f()),R=function(e){var n=e.time,t=e.location;return r.a.createElement(z,{justifyContent:"space-between"},r.a.createElement(N,null,n),r.a.createElement(N,null,t))},_=m.a.span(s()),A=function(e){var n=e.name,t=e.avatar,a=e.title,c=e.description;return r.a.createElement(z,null,t&&r.a.createElement(C,{size:"2"},r.a.createElement(L,{alt:n+"'s avatar",src:t})),r.a.createElement(C,{size:"10"},r.a.createElement("h1",null,n),r.a.createElement("h3",null,a),r.a.createElement("p",null,c)))};function B(){var e=Object(u.a)(["\n  margin: 12px 0;\n"]);return B=function(){return e},e}var D=m.a.div(B()),W=function(e){var n,t,a=e.links,c=e.itemsPerRow,i=void 0===c?3:c,l=Object(o.a)(e,["links","itemsPerRow"]);return r.a.createElement(w,Object.assign({bgColor:"#dde0e14f"},l),(n=a,t=i,n.slice(0,(n.length+t-1)/t|0).map(function(e,a){return n.slice(t*a,t*a+t)})).map(function(e,n){return r.a.createElement(C,{key:n},e.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(y,{type:e.icon},e.url?r.a.createElement(J,{href:e.url,target:"_blank"},e.text):r.a.createElement(r.a.Fragment,null,e.text)),r.a.createElement(D,null))}))}))},q=function(e){var n=e.position,t=e.company,a=e.location,c=e.description,i=e.time,l=e.achievements,o=void 0===l?[]:l;return r.a.createElement(h,{margin:"0 0 40px 0"},r.a.createElement(P,null,n),r.a.createElement(h,{margin:"7px 0"},r.a.createElement("div",null,t),r.a.createElement(N,null,c)),r.a.createElement(h,{margin:"5px 0"},r.a.createElement(R,{time:i,location:a})),r.a.createElement(N,null,"Achievements"),o.map(function(e){return r.a.createElement(I,{key:e.id,url:e.url},e.content)}))},G=t(4),H=function(e){var n=e.url,t=e.children,r=Object(a.useState)(null),c=Object(G.a)(r,2),i=c[0],l=c[1],o=Object(a.useState)(!0),u=Object(G.a)(o,2),m=u[0],s=u[1],f=Object(a.useState)(null),p=Object(G.a)(f,2),d=p[0],E=p[1];return Object(a.useEffect)(function(){return s(!0),fetch(n).then(function(e){return e.json()}).then(function(e){return l(e)}).catch(function(e){return E(e)}).finally(function(){return s(!1)}),function(){}},[n]),t({value:i,loading:m,error:d})},K=function(){return r.a.createElement(H,{url:"content.json"},function(e){var n=e.value;return n&&r.a.createElement(k,null,r.a.createElement(A,{name:n.name,avatar:n.avatar,title:n.title,description:n.description}),r.a.createElement(W,{links:n.links}),r.a.createElement(w,null,r.a.createElement(C,{size:"5"},r.a.createElement(F,{title:"Work experience"},n.workExperience.map(function(e){return r.a.createElement(q,Object.assign({key:e.id},e))})),r.a.createElement(F,{title:"Education"},n.education.map(function(e){return r.a.createElement(h,{key:e.id,margin:"0 0 25px 0"},r.a.createElement(P,null,e.name),r.a.createElement(h,null,e.institution),r.a.createElement(R,{time:e.time,location:e.location}))}))),r.a.createElement(C,{size:"1"}),r.a.createElement(C,{size:"5"},r.a.createElement(F,{title:"Skills"},n.skils.map(function(e){return r.a.createElement(_,{key:e},e)})),r.a.createElement(F,{title:"Personal projects"},n.projects.map(function(e){return r.a.createElement(h,{key:e.id,margin:"0 0 25px 0"},r.a.createElement(h,null,e.name),r.a.createElement(I,null,e.description))})),r.a.createElement(F,{title:"Competitions"},n.competitions.map(function(e){return r.a.createElement(h,{key:e.id,margin:"0 0 25px 0"},r.a.createElement(h,null,e.name),r.a.createElement(N,null,e.description))})))))})};i.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.378381f7.chunk.js.map