"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7453],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),s=(n(7294),n(3905)),o=["components"],a={id:"system-design",title:"System Design Interviews"},l=void 0,u={unversionedId:"system-design",id:"system-design",title:"System Design Interviews",description:"The objective of system design interviews is to evaluate a candidate's skill at designing real-world software systems involving multiple components. System design questions are typically given to more senior candidates (with a few years of experience). Interns aren't typically given system design questions as it is hard to expect interns to have sufficient and relevant industry experience to answer this type of questions well.",source:"@site/../contents/system-design.md",sourceDirName:".",slug:"/system-design",permalink:"/system-design",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/system-design.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1642931956,formattedLastUpdatedAt:"1/23/2022",frontMatter:{id:"system-design",title:"System Design Interviews"},sidebar:"docs",previous:{title:"Trie",permalink:"/algorithms/trie"},next:{title:"Overview",permalink:"/behavioral-round-overview"}},c=[{value:"Quality Courses",id:"quality-courses",children:[],level:2},{value:"Free resources",id:"free-resources",children:[],level:2},{value:"Books",id:"books",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The objective of system design interviews is to evaluate a candidate's skill at designing real-world software systems involving multiple components. System design questions are typically given to more senior candidates (with a few years of experience). Interns aren't typically given system design questions as it is hard to expect interns to have sufficient and relevant industry experience to answer this type of questions well."),(0,s.kt)("p",null,"Some common questions include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Design a URL shortener (e.g. Bitly)"),(0,s.kt)("li",{parentName:"ul"},"Design a social media website (e.g. Twitter)"),(0,s.kt)("li",{parentName:"ul"},"Design a video watching website (e.g. YouTube)"),(0,s.kt)("li",{parentName:"ul"},"Design a chatting service (e.g. Telegram, Slack, Discord)"),(0,s.kt)("li",{parentName:"ul"},"Design a file sharing service (e.g. Google Drive, Dropbox)"),(0,s.kt)("li",{parentName:"ul"},"Design a ride sharing service (e.g. Uber, Lyft)"),(0,s.kt)("li",{parentName:"ul"},"Design a photo sharing service (e.g. Flickr, Pinterest)"),(0,s.kt)("li",{parentName:"ul"},"Design an e-commerce website (e.g. Amazon, eBay)"),(0,s.kt)("li",{parentName:"ul"},"Design a jobs portal (e.g. LinkedIn, Indeed)"),(0,s.kt)("li",{parentName:"ul"},"Design a web crawler (e.g. Google)")),(0,s.kt)("p",null,"System design content is still work-in-progress, but there are some resources to help you in the meanwhile:"),(0,s.kt)("h2",{id:"quality-courses"},"Quality Courses"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.educative.io/courses/grokking-the-system-design-interview?aff=x23W"},"Grokking the System Design Interview")," - This is probably the most famous system design interview course on the internet and what makes it different from the other courses is that it is purely text-based, great for people who refer reading over watching videos. It contains a repository of the popular system design problems along with a glossary of system design basics. I've personally taken this course and have recommended many others to use this. Highly recommended!"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.tryexponent.com/courses/system-design-interview"},"System Design Interview Course by Exponent")," - This course by Exponent covers system designs basics and has a huge database of popular system design questions with video explanations. Use this ",(0,s.kt)("a",{parentName:"li",href:"https://www.tryexponent.com/refer/abdlb"},"referral link to get 10% off"),"! In my opinion, Exponent is one of the most credible interview preparation resources out there as their resources are high quality and goes beyond Software Engineering roles."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.educative.io/courses/grokking-adv-system-design-intvw?aff=x23W"},"Grokking the Advanced System Design Interview")," - I haven't tried this but it's by the same people who created \"Grokking the System Design Interview\", so it should be good! In my opinion you probably wouldn't need this unless you're very senior or going for a specialist position.")),(0,s.kt)("h2",{id:"free-resources"},"Free resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/donnemartin/system-design-primer"},"System Design Primer")," - Most comprehensive resource on system design out there. Recommended only if you have a ton of time to spare."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/checkcheckzz/system-design-interview"},"System Design Interview")," - Contains many links to tips about system design, system design-related topics and engineering blogs of famous companies."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gist.github.com/vasanthk/485d1c25737e8e72759f"},"System Design Cheatsheet")," - Brief and concise content. Serves as a good revision right before your system design interview.")),(0,s.kt)("h2",{id:"books"},"Books"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF"},"System Design Interview \u2013 An insider's guide, Second Edition")," - Beginner friendly resource to learn about system design, the content is easy to read and understand.")))}d.isMDXComponent=!0}}]);