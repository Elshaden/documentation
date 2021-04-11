(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(223)),i={title:"User Registration"},s={unversionedId:"features/user-registration",id:"features/user-registration",isDocsHomePage:!1,title:"User Registration",description:"- Register users by credentials (email and passwords)",source:"@site/docs/features/user-registration.md",slug:"/features/user-registration",permalink:"/docs/next/features/user-registration",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/user-registration.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Authorization",permalink:"/docs/next/features/authorization"},next:{title:"Social Authentication",permalink:"/docs/next/features/social-authentication"}},c=[{value:"Register users by credentials (email and passwords)",id:"register-users-by-credentials-email-and-passwords",children:[]},{value:"Register users by Social Account",id:"register-users-by-social-account",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#register-users-by-credentials-email-and-passwords"},"Register users by credentials (email and passwords)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#register-users-by-social-account"},"Register users by Social Account"))),Object(o.b)("h3",{id:"register-users-by-credentials-email-and-passwords"},"Register users by credentials (email and passwords)"),Object(o.b)("p",null,"Call the ",Object(o.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register")," endpoint (you can find its documentation after generating the API Docs."),Object(o.b)("p",null,"Check out the ",Object(o.b)("inlineCode",{parentName:"p"},"registerUser")," endpoint in the API Routes files."),Object(o.b)("p",null,"This will register a new User and respond with user object."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Registration request:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-http"},"curl --request POST \\\n  --url http://api.apiato.test/v1/register \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'email=apiato%40mail.com1&password=password&name=Mahmoud%20Zalt'\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Registration response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": XbPW7awNkzl83LD6,\n    "name": "Mahmoud Zalt",\n    "email": "apiato@mail.com",\n    "confirmed": null,\n    "nickname": "Mega",\n    "gender": "male",\n    "birth": null,\n    "social_auth_provider": null,\n    "social_id": null,\n    "social_avatar": {\n      "avatar": null,\n      "original": null\n    },\n    "created_at": "2021-03-24T15:02:56.000000Z",\n    "updated_at": "2021-03-24T15:02:56.000000Z",\n    "readable_created_at": "19 seconds ago",\n    "readable_updated_at": "19 seconds ago"\n    "roles": {\n      "data": []\n    }\n  }\n}\n')),Object(o.b)("p",null,"Note: After registration in order to get the user access token you will have to send another call to ",Object(o.b)("inlineCode",{parentName:"p"},"http://api.example.com/v1/oauth/token")," with following fields and values"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"username => your_username e.g. admin@admin.com\npassword => your_password\ngrant_type => password\nclient_id => your_client_id\nclient_secret => your_client_secret\n")),Object(o.b)("p",null,"For Third-Party Clients you must have client ID and secret first. You can generate them by creating new client in your app using Laravel Passport."),Object(o.b)("p",null,"For First-Party Clients you can use a proxy to add those fields on requests coming from your trusted client. For an example on how to do it look at ",Object(o.b)("inlineCode",{parentName:"p"},"ProxyLoginForAdminWebClientAction")," Action in Authentication Container."),Object(o.b)("h3",{id:"register-users-by-social-account"},"Register users by Social Account"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"(Facebook, Twitter, Google..)")),Object(o.b)("p",null,"Checkout the ",Object(o.b)("a",{parentName:"p",href:".././features/social-authentication"},"Social Authentication")," Page for how to Sign up with Social Account."))}u.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);