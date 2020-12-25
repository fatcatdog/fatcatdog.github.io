(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{135:function(e,t,a){var n={"./2017-11-17-project-in-production/index.md":[138,3],"./anotherFakeBlog/index.md":[139,4],"./fakeBlog/index.md":[140,5],"./javascriptAndTheBrowser/index.md":[141,6]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id=135,e.exports=r},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),l=a.n(o),c=a(7);a(44);var i=function(){return r.a.createElement("div",{className:"everythingInHeader"},r.a.createElement("ul",{className:"linksInHeader"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/blogs"},"Blogs")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/projects"},"Coding Projects"))))},s=(a(50),[{tag:4,name:"JavaScript and the web browser",ourDate:"12-24-2020",ourUrl:"../blogRepo/javascriptAndTheBrowser/index.md"},{tag:3,name:"Another Fake Blog Post",ourDate:"2-7-2020",ourUrl:"../blogRepo/anotherFakeBlog/index.md"},{tag:2,name:"Fake Blog Post",ourDate:"2-6-2020",ourUrl:"../blogRepo/fakeBlog/index.md"},{tag:1,name:"Build basic D3.js(D3 Plus) Data Visualizations with your Email Data",ourDate:"11-17-2017",ourUrl:"../blogRepo/2017-11-17-project-in-production/index.md"}]),m=[{name:"SpringJpaVueJsTodoApp",description:"A web app to manage personal tasks built with VueJs, Java 8, SpringBoot, JPA, MySql, Docker Compose",url:"https://github.com/fatcatdog/SpringJpaVueJsTodoApp",demoUrl:"",screenshot:""},{name:"hotOrNot",description:"A web app built to host, comment, and rank images of hamburgers (any image really) built in SpringBoot, Spring Security, JSP, JDBC, MySql, AWS S3 buckets for image hosting, AWS EB",url:"https://github.com/fatcatdog/hamburgerApp/tree/master/hotornot",demoUrl:"",screenshot:""},{name:"BlogCity",description:"This project was actually my first SpringBoot, Spring Security, and SQL project. A 'Medium' blogging platform clone built with SpringBoot, Spring Security, JSP, JDBC, Oracle AWS RDS, and AWS EB",demoUrl:"http://ec2-18-235-222-8.compute-1.amazonaws.com/",url:"https://github.com/fatcatdog/SpringBlog",screenshot:""},{name:"WikipediaReader",description:"App built utilizing WikiPedia API, JQuery, and Normalize CSS",url:"https://codepen.io/fatcatdog/pen/aGbrga",demoUrl:"https://codepen.io/fatcatdog/full/aGbrga/",screenshot:""},{name:"UsingWeatherGovApiWithReact",description:"Web App built to explore api.weather.gov and its various api endpoints using React.",url:"https://github.com/fatcatdog/UsingWeatherGovApiWithReact",demoUrl:"",screenshot:""},{name:"My old portfolio site",description:"Built with Create React App",url:"https://github.com/fatcatdog/simple_react_site",demoUrl:"",screenshot:""}],u=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("div",{className:"projectsHeader"},r.a.createElement("h2",null,"Personal Projects")),r.a.createElement("div",{className:"projectsContainer"},r.a.createElement("div",{className:"listOfProjects"},r.a.createElement("p",null,"Most of these projects don't really dive too deep into any particular technology, but hopefully they can be used by fellow beginners to guide them into a framework or technology:"),r.a.createElement("ul",{className:"ourListStyles"},m.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("div",{className:"projectTitle"},e.name),r.a.createElement("br",null),r.a.createElement("div",{className:"projectDescription"},e.description," - ",r.a.createElement("a",{className:"project_link",href:e.url,rel:"noreferrer noopener",target:"_blank"},"Repo")),r.a.createElement("br",null))})),r.a.createElement("br",null)))))};a(51);var p=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("div",{className:"aboutHeader"},r.a.createElement("h2",null,"About")),r.a.createElement("div",{className:"aboutContainer"},r.a.createElement("div",{className:"aboutMeParagraph"},r.a.createElement("p",null,"After working in software sales for a few years, I realized I wanted to learn how to build digital products not just sell them. I currently work as a software engineer in the New York area."),r.a.createElement("p",null,"In my free time I likely can be found playing pickup basketball or staring at a computer screen. I can be reached at ",r.a.createElement("a",{href:"https://twitter.com/fatcatdog2"},"@fatcatdog2")))))},d=(a(52),s),g=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("div",{className:"projectsHeader"},r.a.createElement("h2",null,"Blogs")),r.a.createElement("div",{className:"projectsContainer"},r.a.createElement("div",{className:"listOfProjects"},r.a.createElement("ul",{className:"ourListStyles"},d.map((function(e){return r.a.createElement("li",{key:e.ourUrl},r.a.createElement(c.b,{to:{pathname:"/blog/"+e.tag}},e.name)," - ",e.ourDate,r.a.createElement("br",null),r.a.createElement("br",null))}))))))},h=a(23),f=a.n(h),E=a(36),b=a(38),v=(a(54),a(55),a(37)),y=a.n(v),w=function(e){var t=Object(n.useState)("Blog does not exist... :("),o=Object(b.a)(t,2),l=o[0],c=o[1];function m(){return(m=Object(E.a)(f.a.mark((function t(){var n,r,o,l,i,m;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.location.pathname,r=n.slice(6),void 0!==(o=s.filter((function(e){return e.tag==r})))[0]){t.next=6;break}t.next=12;break;case 6:return l=o[0].ourUrl,i=l.split("/"),t.next=10,a(135)("./".concat(i[2],"/index.md"));case 10:m=t.sent;try{fetch(m.default).then((function(e){return e.text()})).then((function(e){c(e)}))}catch(u){console.log(u)}case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()})),r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("div",{className:"settingMargins"},r.a.createElement("div",{className:"markdown-body"},r.a.createElement(y.a,{source:l,escapeHtml:!1}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(8);a(136);var S=r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:u}),r.a.createElement(k.a,{path:"/projects",component:u}),r.a.createElement(k.a,{path:"/about",component:p}),r.a.createElement(k.a,{path:"/blogs",component:g}),r.a.createElement(k.a,{path:"/blog/:tag",component:w}),r.a.createElement(k.a,{component:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"everything"},r.a.createElement(i,null),r.a.createElement("h2",null,"404"),r.a.createElement("p",null,"Something went very wrong :(")))}}))));l.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,a){e.exports=a(137)},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.bcfb1d81.chunk.js.map