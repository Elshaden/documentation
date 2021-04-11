(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(223)),i={title:"Social Authentication"},c={unversionedId:"features/social-authentication",id:"version-9.x/features/social-authentication",isDocsHomePage:!1,title:"Social Authentication",description:"- Default Supported Auth Provide",source:"@site/versioned_docs/version-9.x/features/social-authentication.md",slug:"/features/social-authentication",permalink:"/docs/features/social-authentication",editUrl:"https://github.com/moslem-deris/docs/edit/main/versioned_docs/version-9.x/features/social-authentication.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",sidebar:"version-9.x/docs",previous:{title:"User Registration",permalink:"/docs/features/user-registration"},next:{title:"Query Parameters",permalink:"/docs/features/query-parameters"}},l=[{value:"Default Supported Auth Provide",id:"default-supported-auth-provide",children:[]},{value:"How Social Authentication Works",id:"how-social-authentication-works",children:[]},{value:"Setup Social Authentication",id:"setup-social-authentication",children:[]},{value:"Support new Auth Provider",id:"support-new-auth-provide",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#default-supported-auth-provide"},"Default Supported Auth Provide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#how-social-authentication-works"},"How Social Authentication Works")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#setup-social-authentication"},"Setup Social Authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#support-new-auth-provide"},"Support new Auth Provide"))),Object(o.b)("p",null,"For Social Authentication Apiato uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/laravel/socialite"},"Socialite"),"."),Object(o.b)("h2",{id:"default-supported-auth-provide"},"Default Supported Auth Provide"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Facebook"),Object(o.b)("li",{parentName:"ul"},"Twitter")),Object(o.b)("h2",{id:"how-social-authentication-works"},"How Social Authentication Works"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter..)."),Object(o.b)("li",{parentName:"ol"},"The Social Auth Provider returns a Code (Tokens)."),Object(o.b)("li",{parentName:"ol"},"The Client makes a call to the server (our server) and passes the Code (Tokens) retrieved from the Provider."),Object(o.b)("li",{parentName:"ol"},"The Server fetches the user data from the Social Auth Provider using the received Code (Tokens)."),Object(o.b)("li",{parentName:"ol"},"The Server create new User from the collected social data and return the Authenticated User (If the user already created then it just returns it).")),Object(o.b)("h2",{id:"setup-social-authentication"},"Setup Social Authentication"),Object(o.b)("p",null,"1) Create an App on the supported Social Auth provider."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For Facebook: ",Object(o.b)("a",{parentName:"li",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps")),Object(o.b)("li",{parentName:"ul"},"For Twitter: ",Object(o.b)("a",{parentName:"li",href:"https://apps.twitter.com/app"},"https://apps.twitter.com/app")),Object(o.b)("li",{parentName:"ul"},"For Google: ",Object(o.b)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials"))),Object(o.b)("p",null,"For the callback URL you can use this Apiato web endpoint ",Object(o.b)("inlineCode",{parentName:"p"},"http://apiato.test/auth/{provider}/callback")," ",Object(o.b)("em",{parentName:"p"},"(replace the provider with any of the supported providers ",Object(o.b)("inlineCode",{parentName:"em"},"facebook"),", ",Object(o.b)("inlineCode",{parentName:"em"},"twitter"),",..)"),"."),Object(o.b)("p",null,"2) Set the Tokens and Secrets in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"    'facebook' => [\n        'client_id'     => env('AUTH_FACEBOOK_CLIENT_ID'), // App ID\n        'client_secret' => env('AUTH_FACEBOOK_CLIENT_SECRET'), // App Secret\n        'redirect'      => env('AUTH_FACEBOOK_CLIENT_REDIRECT'),\n    ],\n\n    'twitter' => [\n        'client_id'     => env('AUTH_TWITTER_CLIENT_ID'), // Consumer Key (API Key)\n        'client_secret' => env('AUTH_TWITTER_CLIENT_SECRET'), // Consumer Secret (API Secret)\n        'redirect'      => env('AUTH_TWITTER_CLIENT_REDIRECT'),\n    ],\n\n    'google' => [\n        'client_id'     => env('AUTH_GOOGLE_CLIENT_ID'), // Client ID\n        'client_secret' => env('AUTH_GOOGLE_CLIENT_SECRET'), // Client secret\n        'redirect'      => env('AUTH_GOOGLE_CLIENT_REDIRECT'),\n    ],\n")),Object(o.b)("p",null,"3) Make a request from your client to get the ",Object(o.b)("inlineCode",{parentName:"p"},"oauth")," info. ",Object(o.b)("strong",{parentName:"p"},"Each Social provider returns different response and keys")),Object(o.b)("p",null,"For testing purposes Apiato provides a web endpoint (",Object(o.b)("inlineCode",{parentName:"p"},"http://apiato.test/auth/{provider}")," ) to act as a client."),Object(o.b)("p",null,"Use that endpoint from your browser ",Object(o.b)("em",{parentName:"p"},"(replace the provider with any of the supported providers ",Object(o.b)("inlineCode",{parentName:"em"},"facebook"),", ",Object(o.b)("inlineCode",{parentName:"em"},"twitter"),",..)")," to get the ",Object(o.b)("inlineCode",{parentName:"p"},"oauth")," info."),Object(o.b)("p",null,"Example Twitter Response:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'User {\n  tokentoken: "121212121-121212121"\n  tokentokenSecret: "34343434343434343343434343"\n  tokenid: "777777777"\n  tokennickname: "Mahmoud_Zalt"\n  tokenname: "Mahmoud Zalt"\n  tokenemail: null\n  tokenavatar: "http://pbs.twimg.com/profile_images/88888888/PENrcePC_normal.jpg"\n  tokenuser:\n  token"avatar_original": "http://pbs.twimg.com/profile_images/9999999/PENrcePC.jpg"\n}\n')),Object(o.b)("p",null,"NOTE: This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps."),Object(o.b)("p",null,"4) Use the ",Object(o.b)("inlineCode",{parentName:"p"},"oauth")," info to make a call from your server to the Social Provider in order to get the User info."),Object(o.b)("p",null,"Example Getting Twitter User: ",Object(o.b)("strong",{parentName:"p"},"Twitter requires the ",Object(o.b)("inlineCode",{parentName:"strong"},"oauth_token")," and ",Object(o.b)("inlineCode",{parentName:"strong"},"oauth_secret"),", other Providers might only require the ",Object(o.b)("inlineCode",{parentName:"strong"},"oauth_token"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST /v1/auth/twitter HTTP/1.1\nHost: api.apiato.test\nContent-Type: application/x-www-form-urlencoded\nAccept: application/json\n\noauth_token=121212121-121212121&oauth_secret=34343434343434343343434343\n")),Object(o.b)("p",null,"Note: For Facebook only send ",Object(o.b)("inlineCode",{parentName:"p"},"oauth_token")," which is named as ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," in facebook response.\nFor more details about parameters checkout the generated documentation or visit ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php")),Object(o.b)("p",null,"5) The endpoint above should return the User and his Personal Access Token."),Object(o.b)("p",null,"Example Twitter Response:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "object": "User",\n        "id": "eqwja3vw94kzmxr0",\n        "name": "Mahmoud Zalt",\n        "email": null,\n        "confirmed": false,\n        "nickname": null,\n        "gender": null,\n        "birth": null,\n        "social_auth_provider": "twitter",\n        "social_id": "42719726",\n        "social_avatar": {\n            "avatar": "http://pbs.twimg.com/profile_images/1111111111/PENrcePC_normal.jpg",\n            "original": null\n        },\n        "created_at": {\n            "date": "2017-10-20 21:45:03.000000",\n            "timezone_type": 3,\n            "timezone": "UTC"\n        },\n        "updated_at": {\n            "date": "2017-10-20 21:45:03.000000",\n            "timezone_type": 3,\n            "timezone": "UTC"\n        },\n        "readable_created_at": "48 minutes ago",\n        "readable_updated_at": "48 minutes ago"\n    },\n    "meta": {\n        "include": [\n            "roles"\n        ],\n        "custom": {\n            "token_type": "personal",\n            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI..."\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"support-new-auth-provide"},"Support new Auth Provider"),Object(o.b)("p",null,"1) Pick an Auth Provider from the supported providers by ",Object(o.b)("a",{parentName:"p",href:"https://socialiteproviders.github.io/"},"Socialite"),"."),Object(o.b)("p",null,"2) Go to ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Socialauth/Tasks/FindUserSocialProfileTask.php")," and support your provider."))}s.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},p),{},{components:n})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);