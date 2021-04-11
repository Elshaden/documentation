(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(223)),l={title:"Overview"},i={unversionedId:"getting-started/overview",id:"getting-started/overview",isDocsHomePage:!1,title:"Overview",description:"* The basic flow",source:"@site/docs/getting-started/overview.md",slug:"/getting-started/overview",permalink:"/docs/next/getting-started/overview",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/getting-started/overview.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/getting-started/installation"},next:{title:"Requests",permalink:"/docs/next/getting-started/requests"}},c=[{value:"The basic flow",id:"basic-flow",children:[{value:"Sample Route Endpoint",id:"sample-route-endpoint",children:[]},{value:"Sample Controller Function",id:"controller-function",children:[]},{value:"Sample Action",id:"sample-action",children:[]},{value:"Sample User Response",id:"sample-user-response",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#basic-flow"},"The basic flow"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#sample-route-endpoint"},"Sample Route Endpoint")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#controller-function"},"Controller Function")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#sample-action"},"Sample Action")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#sample-user-response"},"Sample User Response"))))),Object(a.b)("h2",{id:"basic-flow"},"The basic flow"),Object(a.b)("p",null,"When an HTTP request is received, it first hits your predefined Endpoint (each endpoint live in its own Route file)."),Object(a.b)("h3",{id:"sample-route-endpoint"},"Sample Route Endpoint"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n$router->get('hello', [\n    'uses' => 'Controller@sayHello',\n]);\n")),Object(a.b)("p",null,"After the user makes a request to the endpoint ",Object(a.b)("inlineCode",{parentName:"p"},"[GET] www.api.apiato.com/v1/hello")," it calls the defined controller\nfunction (",Object(a.b)("inlineCode",{parentName:"p"},"sayHello"),")."),Object(a.b)("h3",{id:"controller-function"},"Sample Controller Function"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\nclass Controller extends ApiController\n{\n    public function sayHello(SayHelloRequest $request)\n    {\n            $helloMessage = Apiato::call(SayHelloAction::class);\n\n            $this->json([\n                $helloMessage\n            ]);\n    }\n}\n")),Object(a.b)("p",null,"This function takes a Request class ",Object(a.b)("inlineCode",{parentName:"p"},"SayHelloRequest")," to automatically checks if the user has the right access to this\nendpoint. ",Object(a.b)("em",{parentName:"p"},"Only if the user has access, it proceeds to the function body.")),Object(a.b)("p",null,"Then the function calls an Action (",Object(a.b)("inlineCode",{parentName:"p"},"SayHelloAction"),") to perform the business logic."),Object(a.b)("h3",{id:"sample-action"},"Sample Action"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\nclass SayHelloAction extends Action\n{\n    public function run()\n    {\n        return 'Hello World!';\n    }\n}\n")),Object(a.b)("p",null,"The Action can do anything then return a result (could be an Object, a String or anything)."),Object(a.b)("p",null,"When the Action finishes its job, the controller function gets ready to build a response."),Object(a.b)("p",null,"Json responses can be built using the helper function ",Object(a.b)("inlineCode",{parentName:"p"},"json")," (",Object(a.b)("inlineCode",{parentName:"p"},"$this->json(['foo' => 'bar']);"),")."),Object(a.b)("h3",{id:"sample-user-response"},"Sample User Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'[\n    "Hello World!"\n]\n')))}p.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);