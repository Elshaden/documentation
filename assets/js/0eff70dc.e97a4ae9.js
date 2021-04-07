(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{172:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?a.a.createElement(f,s(s({ref:n},p),{},{components:t})):a.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(172)),i={title:"Profiler"},s={unversionedId:"features/profiler",id:"features/profiler",isDocsHomePage:!1,title:"Profiler",description:"Profiling is very important to optimize the performance of your application. And help you better understand what happens when a request is received, as well as it can speed up the debugging process.",source:"@site/docs/features/profiler.md",slug:"/features/profiler",permalink:"/documentation/docs/features/profiler",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/profiler.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Admin Dashboard",permalink:"/documentation/docs/features/admin-dashboard"},next:{title:"Routes",permalink:"/documentation/docs/main-components/routes"}},l=[{value:"Sample Profiler response",id:"sample-profiler-response",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Profiling is very important to optimize the performance of your application. And help you better understand what happens when a request is received, as well as it can speed up the debugging process."),Object(o.b)("p",null,"Apiato uses the third-party package ",Object(o.b)("a",{parentName:"p",href:"https://github.com/barryvdh/laravel-debugbar"},"laravel-debugbar")," (which uses the ",Object(o.b)("a",{parentName:"p",href:"http://phpdebugbar.com/"},"PHP Debug Bar"),"), to collect the profiling data."),Object(o.b)("p",null,"By default the ",Object(o.b)("strong",{parentName:"p"},"laravel-debugbar")," package displays the profiling data in the browser.\nHowever, Apiato uses a middleware ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Middlewares/Http/ProfilerMiddleware.php")," to append the profiling data to the response."),Object(o.b)("h3",{id:"sample-profiler-response"},"Sample Profiler response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    // Actual Response Here...\n    "_profiler": {\n        "__meta": {\n            "id": "X167f293230e3457f1bbd95d9c82aba4a",\n            "datetime": "2017-09-22 18:45:27",\n            "utime": 1506105927.799299,\n            "method": "GET",\n            "uri": "/",\n            "ip": "172.20.0.1"\n        },\n        "messages": {\n            "count": 0,\n            "messages": []\n        },\n        "time": {\n            "start": 1506105922.742068,\n            "end": 1506105927.799333,\n            "duration": 5.057265043258667,\n            "duration_str": "5.06s",\n            "measures": [\n                {\n                    "label": "Booting",\n                    "start": 1506105922.742068,\n                    "relative_start": 0,\n                    "end": 1506105923.524004,\n                    "relative_end": 1506105923.524004,\n                    "duration": 0.7819359302520752,\n                    "duration_str": "781.94ms",\n                    "params": [],\n                    "collector": null\n                },\n                {\n                    "label": "Application",\n                    "start": 1506105923.535343,\n                    "relative_start": 0.7932748794555664,\n                    "end": 1506105927.799336,\n                    "relative_end": 0.00000286102294921875,\n                    "duration": 4.26399302482605,\n                    "duration_str": "4.26s",\n                    "params": [],\n                    "collector": null\n                }\n            ]\n        },\n        "memory": {\n            "peak_usage": 13234248,\n            "peak_usage_str": "12.62MB"\n        },\n        "exceptions": {\n            "count": 0,\n            "exceptions": []\n        },\n        "route": {\n            "uri": "GET /",\n            "middleware": "api, throttle:30,1",\n            "domain": "http://api.apiato.test",\n            "as": "apis_root_page",\n            "controller": "App\\\\Containers\\\\Welcome\\\\UI\\\\API\\\\Controllers\\\\Controller@apiRoot",\n            "namespace": "App\\\\Containers\\\\Welcome\\\\UI\\\\API\\\\Controllers",\n            "prefix": "/",\n            "where": [],\n            "file": "app/Containers/Welcome/UI/API/Controllers/Controller.php:20-25"\n        },\n        "queries": {\n            "nb_statements": 0,\n            "nb_failed_statements": 0,\n            "accumulated_duration": 0,\n            "accumulated_duration_str": "0\u03bcs",\n            "statements": []\n        },\n        "swiftmailer_mails": {\n            "count": 0,\n            "mails": []\n        },\n        "logs": {\n            "count": 3,\n            "messages": [\n                {\n                    "message": "...",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "error",\n                    "time": 1506105927.694807\n                },\n                {\n                    "message": "...",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "error",\n                    "time": 1506105927.694811\n                },\n                {\n                    "message": "[2017-09-18 17:38:15] testing.INFO: New User registration. ID = 970ylqvaogmxnbdr | Email = apiato@mail.test.      Thank you for signing up.\\n</div>\\n</body>\\n</html>\\n  \\n",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "info",\n                    "time": 1506105927.694812\n                }\n            ]\n        },\n        "auth": {\n            "guards": {\n                "web": "array:2 [\\n  \\"name\\" => \\"Guest\\"\\n  \\"user\\" => array:1 [\\n    \\"guest\\" => true\\n  ]\\n]",\n                "api": "array:2 [\\n  \\"name\\" => \\"Guest\\"\\n  \\"user\\" => array:1 [\\n    \\"guest\\" => true\\n  ]\\n]"\n            },\n            "names": ""\n        },\n        "gate": {\n            "count": 0,\n            "messages": []\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"By default the profiler feature is turned off. To turn it on edit the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file and set ",Object(o.b)("inlineCode",{parentName:"p"},"DEBUGBAR_ENABLED=true"),"."),Object(o.b)("p",null,"To control and modify the profiler response, you need to edit this config file ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/debugbar.php"),"."))}u.isMDXComponent=!0}}]);