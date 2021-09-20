var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,a=(e,a)=>{for(var o in a||(a={}))n.call(a,o)&&r(e,o,a[o]);if(t)for(var o of t(a))i.call(a,o)&&r(e,o,a[o]);return e},o=("undefined"!=typeof require&&require,(e,r)=>{var a={};for(var o in e)n.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&t)for(var o of t(e))r.indexOf(o)<0&&i.call(e,o)&&(a[o]=e[o]);return a});import{s as l,R as c,r as m}from"./vendor.035881c7.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var s={lang:"en",name:"Marko Rusić",title:"Frontend Engineer with expertise in React.js",bio:["For the past 4 years, I've had an opportunity to work on many projects as a frontend engineer in a wide variety of fields. I’m responsible, with a good work ethic. I enjoy taking initiative and ownership over projects and seeing them through to completion.","During the past year, I was also in charge of mentoring other team members, sharing tasks between them, and giving them regular, honest, and constructive feedback about their work. On the other hand, I was also in charge of reporting to my manager, setting proper time estimates on tasks, and communicating between the team and the product owners.","I’m resourceful and curious. I know where and how to find answers to my questions in order to provide high-quality work. I enjoy working in a team of hardworking and ambitious individuals."],skils:["JavaScript","TypeScript","React","React Native","Next","Vue.js","REST","PHP","Laravel","Java","Spring Boot","MySQL","MongoDB","HTML5","CSS3"],links:[{id:1,icon:"envelope-o",text:"markorusic98@gmail.com"},{id:2,icon:"mobile",text:"+381 60 4609090"},{id:3,icon:"map-marker",text:"Belgrade, Serbia"},{id:4,icon:"linkedin",text:"linkedin.com/in/markorusic",url:"https://www.linkedin.com/in/markorusic/"},{id:5,icon:"github",text:"github.com/markorusic",url:"https://github.com/markorusic"},{id:6,icon:"medium",text:"medium.com/@markorusic",url:"https://medium.com/@markorusic"}],workExperience:[{id:3,position:"Frontend Team Lead",company:"NetCast",location:"Belgrade, Serbia",time:"09/2019 – Present",achievements:[{id:1,content:"Architected and managed client side app development"},{id:2,content:"Mentored and reviewed team members"},{id:3,content:"Managed communication with product owners"},{id:4,content:"Ensured that software met product and design requirements"}]},{id:2,position:"Frontend Engineer",company:"NetCast",location:"Belgrade, Serbia",time:"01/2019 – Present",achievements:[{id:1,content:"Created interactive command line interface for generating boilterplate pieces of code. Tech stack: Node JS"},{id:2,content:"Architected and developed large scale back-office portal for managing video streaming platform. Tech stack: React, TypeScript"},{id:3,content:"Architected and developed end user video streaming cross platform application. Tech stack: React, React Native, TypeScript"}]},{id:1,position:"Full Stack Engineer",company:"NetCast",location:"Belgrade, Serbia",time:"09/2017 – 01/2019",achievements:[{id:1,content:"Architected and developed photo voting platform Slike Srbije. Tech stack: MySQL, Laravel, REST, Vue.js",url:"https://www.slikesrbije.rs/"},{id:2,content:"Architected and developed TV content management service. Implemented complex electronic program guide (EPG) views and editors. Tech stack: MongoDB, Spring Boot, REST, Vue.js"},{id:3,content:"Architected and developed end user TV content portal. Tech stack: Vue.js",url:"http://volim.tv/"}]}],education:[{id:1,name:"Informational Technologies",institution:"ICT COLLEGE OF VOCATIONAL STUDIES",time:"08/2017 – 2021",location:"Belgrade, Serbia"},{id:2,name:"Informational Technologies",institution:'High School of electrical engineering "Nikola Tesla"',time:"09/2012 – 06/2016",location:"Belgrade, Serbia"}],projects:[{id:1,name:"Dermaceutical (05/2018 – 06/2018)",description:"E-commerce website with full featured back-office content management portal. Tech stack: Laravel, jQuery",url:"https://dermaceutical.rs/"},{id:2,name:"Belgrade Now Party (03/2018 – 04/2018)",description:"Night life promotion website with full featured back-office content management portal. Tech stack: Laravel, jQuery",url:"https://belgradenow.party/"}],competitions:[{id:1,name:"Saga ML Hackathon (11/2018)",description:""},{id:2,name:"Fon Case Study Hackaton (06/2018)",description:""},{id:3,name:"Mathackaton (05/2018)",description:""},{id:4,name:"FON Hackathon (04/2018)",description:""}]};const p=e=>{var t=e,{type:n,size:i="",title:r,color:l="#000",className:m="",style:s={},tag:p="span",iconProps:d={},children:u}=t,g=o(t,["type","size","title","color","className","style","tag","iconProps","children"]);return c.createElement(p,g,c.createElement(c.Fragment,null,c.createElement("i",a({style:a({color:l},s),className:`\n    fa fa-${n}\n    ${i?" fa-"+i:""}\n    ${m?" "+m:""}`.trim(),"aria-hidden":"true"},d)),c.createElement("span",{style:{marginLeft:"10px"}},r||u)))},d=l.div`
  margin: ${e=>e.margin?e.margin:""};
  padding: ${e=>e.padding?e.padding:""};
  color: ${e=>e.color?e.color:"#000"};
  @media print {
    margin: ${e=>e.printMargin?e.printMargin:""};
    padding: ${e=>e.printPadding?e.printPadding:""};
  }
`,u=l.div`
  max-width: 1100px;
  margin: 1em auto;
  font-family: sans-serif;
`,g=l.div`
  padding: 1em 2em;
  @page {
    padding: 0.5em 1em;
    size: auto;
    margin: 0;
  }
`,h=l.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justifyContent};
  align-items: ${e=>e.alignItems};
`,f=l.div`
  flex-basis: 100%;
  flex: ${e=>e.size?parseInt(e.size)/12:1};
`,E=l.h3`
  text-transform: uppercase;
  font-size: 20px;
  color: #000;
  margin-bottom: 10px;
  @media print {
    margin-bottom: 5px;
  }
`,k=l.h4`
  font-size: 17px;
  margin-bottom: 5px;
  font-weight: bold;
  @media print {
    margin-bottom: 2px;
  }
`,x=e=>{var t=e,{title:n,children:i}=t,r=o(t,["title","children"]);return c.createElement(d,a({margin:"0 0 20px 0"},r),c.createElement(E,null,n),c.createElement("div",null,i))},b=l.span`
  @media print {
    font-size: ${e=>e.fontSize?e.fontSize:"12px"};
    line-height: 0px !important;
  }
`,y=l.div`
  margin-bottom: 10px;
  @media print {
    margin-bottom: 3px;
  }
`,v=e=>{var t=e,{title:n,url:i,children:r}=t,l=o(t,["title","url","children"]);return c.createElement(y,null,c.createElement(h,a({},l),c.createElement(d,{margin:"0 10px 0 0",color:"#000"},"-"),c.createElement(f,null,r||c.createElement(b,null,n),i&&c.createElement(p,{tag:"a",type:"external-link",href:i,target:"_blank",style:{textDecoration:"none",marginLeft:"5px",color:"#000"}}))))},w=l.span`
  color: ${e=>e.color?e.color:"gray"};
  font-style: italic;
  font-size: ${e=>e.fontSize?e.fontSize:"12px"};
`,S=l.a`
  text-decoration: none;
  color: black;
`,j=l.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  @media print {
    max-width: 110px;
    max-height: 110px;
  }
`,z=({time:e,location:t})=>c.createElement(h,{justifyContent:"space-between"},c.createElement(w,null,e),c.createElement(w,null,t)),T=l.span`
  display: inline-block;
  border-radius: 5px;
  padding: 5px 30px;
  margin: 3px;
  font-size: 17px;
  color: #000;
  border: 1px solid black;
  @media print {
    padding: 5px 10px;
    margin: 2px;
    font-size: 12px;
  }
`,M=l(f)`
  @media print {
    margin-right: 1em;
  }
`,I=l.h3`
  color: gray;
  font-weight: normal;
`,L=({name:e,avatar:t,title:n,children:i})=>c.createElement(h,null,t&&c.createElement(M,{size:"2"},c.createElement(j,{alt:e+"'s avatar",src:t})),c.createElement(f,{size:"10"},c.createElement("h1",null,e),c.createElement(I,null,n),i)),N=l(h)`
  width: 100%;
  margin: 10px 0;
  @media print {
    margin: 3px 0;
  }
`,O=e=>{var t,n,i=e,{links:r,itemsPerColumn:l=2}=i,m=o(i,["links","itemsPerColumn"]);return c.createElement(N,a({},m),(t=r,n=l,t.slice(0,(t.length+n-1)/n|0).map(((e,i)=>t.slice(n*i,n*i+n)))).map(((e,t)=>c.createElement(f,{key:t,size:"4"},e.map((e=>c.createElement(d,{key:e.id,padding:"5px 0 0 0"},c.createElement(p,{type:e.icon},c.createElement(S,{href:e.url,target:"_blank"},c.createElement(b,null,e.text))))))))))};var P={aboutMe:"About me",workExpirience:"Work Experience",education:"Education",skils:"Skils",projects:"Freelance projects",competitions:"Competitions",workResponsibilities:"Responsibilities"};const R={en:P,sr:{aboutMe:"O meni",workExpirience:"Radno iskustvo",education:"Obrazovanje",skils:"Veštine",projects:"Projekti",competitions:"Takmičenja",workResponsibilities:"Zaduženja"}}[s.lang]||P,C=({position:e,company:t,location:n,description:i,time:r,achievements:a=[]})=>c.createElement(d,{margin:"0 0 30px 0",printMargin:"0 0 7px 0"},c.createElement(k,null,e),c.createElement(d,{margin:"7px 0",printMargin:"3px 0"},c.createElement("div",null,t," ",i&&c.createElement(w,null,"(",i,")"))),c.createElement(d,{margin:"5px 0",printMargin:"1px 0"},c.createElement(z,{time:r,location:n})),c.createElement(w,null,R.workResponsibilities),a.map((e=>c.createElement(v,{key:e.id,title:e.content,url:e.url})))),$=({resume:e})=>c.createElement(u,null,c.createElement(g,null,c.createElement(L,a({},e),c.createElement(O,{links:e.links}))),c.createElement(g,null,c.createElement(h,{justifyContent:"space-between"},c.createElement(f,{size:"6"},e.bio&&e.bio.length>0&&c.createElement(x,{title:R.aboutMe},e.bio.map((e=>c.createElement(d,{key:e,margin:"10px 0 0 0"},c.createElement(b,null,e))))),e.workExperience&&e.workExperience.length>0&&c.createElement(x,{title:R.workExpirience},e.workExperience.map((e=>c.createElement(C,a({key:e.id},e)))))),c.createElement(f,{size:"1"}),c.createElement(f,{size:"5"},e.education&&e.education.length>0&&c.createElement(x,{title:R.education},e.education.map((e=>c.createElement(d,{key:e.id,margin:"0 0 25px 0",printMargin:"0 0 10px 0"},c.createElement(b,{fontSize:"15px"},e.institution),c.createElement(d,{margin:"0 0 5px 0",printMargin:"0 0 2px 0"},c.createElement(b,{fontSize:"14px"},e.name)),c.createElement(z,{time:e.time,location:e.location}))))),e.skils&&e.skils.length>0&&c.createElement(x,{title:R.skils},e.skils.map((e=>c.createElement(T,{key:e},e)))),e.projects&&e.projects.length>0&&c.createElement(x,{title:R.projects},e.projects.map((e=>c.createElement(d,{key:e.id,margin:"0 0 25px 0",printMargin:"0 0 10px 0"},c.createElement(b,{fontSize:"14px"},e.name),c.createElement(v,{title:e.description,url:e.url}))))),e.competitions&&e.competitions.length>0&&c.createElement(x,{title:R.competitions},e.competitions.map((e=>c.createElement(d,{key:e.id,margin:"0 0 25px 0",printMargin:"0 0 10px 0"},c.createElement(b,{fontSize:"14px"},e.name),c.createElement("div",null,c.createElement(w,null,e.description)))))))))),B=()=>c.createElement($,{resume:s}),A=document.getElementById("root");m.exports.render(c.createElement(B,null),A);
