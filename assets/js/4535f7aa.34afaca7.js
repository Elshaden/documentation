(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(8),r=(n(0),n(218)),l={title:"Mails"},o={unversionedId:"optional-components/mails",id:"optional-components/mails",isDocsHomePage:!1,title:"Mails",description:"* Definition",source:"@site/docs/optional-components/mails.md",sourceDirName:"optional-components",slug:"/optional-components/mails",permalink:"/docs/next/optional-components/mails",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/mails.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618740261,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Mails"},sidebar:"docs",previous:{title:"Events",permalink:"/docs/next/optional-components/events"},next:{title:"Notifications",permalink:"/docs/next/optional-components/notifications"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Email Templates",id:"email-templates",children:[]},{value:"Configure Emails",id:"configure-emails",children:[]},{value:"Queueing A Notification",id:"queueing",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#email-templates"},"Email Templates")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#configure-emails"},"Configure Emails")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#queueing"},"Queueing"))),Object(r.b)("h3",{id:"definition"},"Definition"),Object(r.b)("p",null,"The Mail component allows you to describe an email and send it whenever needed. "),Object(r.b)("h3",{id:"principles"},"Principles"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Mail.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ship may contain general Mails."))),Object(r.b)("h3",{id:"rules"},"Rules"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All Notifications MUST extend from ",Object(r.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Mails\\Mail"),"."),Object(r.b)("li",{parentName:"ul"},"Email Templates must be placed inside the Mail directory in a Templates directory ",Object(r.b)("inlineCode",{parentName:"li"},"app/Containers/{section}/{container}/Mails/Templates"),".")),Object(r.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"- app\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Mails\n          - UserRegisteredMail.php\n          - ...\n          - Templates\n            - user-registered.blade.php\n            - ...\n- Ship\n  - Mails\n    - SomeMail.php\n    - ...\n    - Templates\n      - some-template.blade.php\n      - ...\n")),Object(r.b)("h3",{id:"code-samples"},"Code Samples"),Object(r.b)("h4",{id:"a-simple-mail"},"A simple Mail"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"class UserRegisteredMail extends Mail implements ShouldQueue\n{\n    use Queueable;\n\n    protected $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function build()\n    {\n        return $this->view('appSection@user::user-registered')\n            ->to($this->user->email, $this->user->name)\n            ->with([\n                'name' => $this->user->name,\n            ]);\n    }\n}\n")),Object(r.b)("h4",{id:"usage-from-an-action"},"Usage from an Action"),Object(r.b)("p",null,"Notifications can be sent from Actions or Tasks using the ",Object(r.b)("inlineCode",{parentName:"p"},"Mail")," Facade."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"Mail::send(new UserRegisteredMail($user));\n")),Object(r.b)("h2",{id:"email-templates"},"Email Templates"),Object(r.b)("p",null,"Templates should be placed inside a folder ",Object(r.b)("inlineCode",{parentName:"p"},"Templates")," inside the ",Object(r.b)("inlineCode",{parentName:"p"},"Mail")," folder."),Object(r.b)("p",null,"To access a Mail template ",Object(r.b)("em",{parentName:"p"},"(same like accessing a web view)")," you must call the camelCase of its Section name + ",Object(r.b)("inlineCode",{parentName:"p"},"@")," + camelCase of its Container name.   "),Object(r.b)("p",null,"In the example below we're using the ",Object(r.b)("inlineCode",{parentName:"p"},"user-registered.blade.php")," template in the ",Object(r.b)("inlineCode",{parentName:"p"},"AppSection")," Section > ",Object(r.b)("inlineCode",{parentName:"p"},"User")," Container."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$this->view('appSection@user::user-registered');\n")),Object(r.b)("h2",{id:"configure-emails"},"Configure Emails"),Object(r.b)("p",null,"Open the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file and set the ",Object(r.b)("inlineCode",{parentName:"p"},"from")," mail and address. This will be used globally whenever the ",Object(r.b)("inlineCode",{parentName:"p"},"from")," function is not called in the Mail. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-env"},'MAIL_FROM_ADDRESS=test@test.test\nMAIL_FROM_NAME="apiato"\n')),Object(r.b)("p",null,"To use different email address in some classes add ",Object(r.b)("inlineCode",{parentName:"p"},"->to($this->email, $this->name)")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," function in your Mail class. "),Object(r.b)("p",null,"By default Apiato is configured to use Log Driver ",Object(r.b)("inlineCode",{parentName:"p"},"MAIL_DRIVER=log"),", you can change that from the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file."),Object(r.b)("h2",{id:"queueing"},"Queueing A Notification"),Object(r.b)("p",null,"To queue a notification you should use ",Object(r.b)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",Object(r.b)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"More info at ",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/mail"},"Laravel Docs"),"."))))}s.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||r;return n?i.a.createElement(d,o(o({ref:t},p),{},{components:n})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);