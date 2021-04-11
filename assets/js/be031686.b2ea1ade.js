(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{188:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return m}));var a=t(3),o=t(8),r=(t(0),t(223)),l={title:"Commands"},c={unversionedId:"optional-components/commands",id:"optional-components/commands",isDocsHomePage:!1,title:"Commands",description:"* Definition",source:"@site/docs/optional-components/commands.md",slug:"/optional-components/commands",permalink:"/docs/next/optional-components/commands",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/commands.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618014201,formattedLastUpdatedAt:"4/10/2021",sidebar:"docs",previous:{title:"Configs",permalink:"/docs/next/optional-components/configs"},next:{title:"Jobs",permalink:"/docs/next/optional-components/jobs"}},i=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Schedule Commands Execution",id:"Schedule-Commands-Execution",children:[]},{value:"Define Consoles Routes",id:"define-consoles-routes",children:[]}],s={toc:i};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Schedule-Commands-Execution"},"Schedule Commands Execution")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#define-consoles-routes"},"Define Consoles Routes"))),Object(r.b)("h3",{id:"definition"},"Definition"),Object(r.b)("p",null,"Commands:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"is a laravel artisan command. Laravel has its own default commands, and you create your own as well."),Object(r.b)("li",{parentName:"ul"},"provides a way to interact with the Laravel app."),Object(r.b)("li",{parentName:"ul"},'a Command can be scheduled by a Task scheduler, like Cron Job or by the Laravel built-in wrapper of the Cron Job "laravel scheduler".'),Object(r.b)("li",{parentName:"ul"},"Commands could be Closure based or Classes."),Object(r.b)("li",{parentName:"ul"},'"dispatch" is the term that is usually used to call a Command.')),Object(r.b)("h3",{id:"principles"},"Principles"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Commands.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Every Command SHOULD call an Action to perform its job, and should not container any business logic.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ship may contain Application general Commands."))),Object(r.b)("h3",{id:"rules"},"Rules"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All Commands MUST extend from ",Object(r.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Commands\\ConsoleCommand"),".")),Object(r.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - CLI\n                    - Commands\n                        - SayHelloCommand.php\n                        - ...\n    - Ship\n        - Commands\n            - GeneralCommand.php\n            - ...\n")),Object(r.b)("h3",{id:"code-samples"},"Code Samples"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example: a simple Command")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Welcome\\UI\\CLI\\Commands;\n\nuse App\\Ship\\Parents\\Commands\\ConsoleCommand;\n\n/**\n * Class SayWelcomeCommand\n *\n * @author  Mahmoud Zalt  <mahmoud@zalt.me>\n */\nclass SayWelcomeCommand extends ConsoleCommand\n{\n\n    /**\n     * The name and signature of the console command.\n     *\n     * @var string\n     */\n    protected $signature = 'apiato:welcome';\n\n    /**\n     * The console command description.\n     *\n     * @var string\n     */\n    protected $description = 'Just saying Welcome.';\n\n    /**\n     * Create a new command instance.\n     *\n     * @return void\n     */\n    public function __construct()\n    {\n        parent::__construct();\n    }\n\n    /**\n     * Execute the console command.\n     *\n     * @return void\n     */\n    public function handle()\n    {\n        $this->info('Welcome to apiato :)'); // green color\n        // $this->line('Welcome to apiato :)'); // normal color\n    }\n}\n\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage from CLI (Terminal):")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan apiato:welcome\n")),Object(r.b)("h3",{id:"Schedule-Commands-Execution"},"Schedule Commands Execution"),Object(r.b)("p",null,"To Schedule the execution of a Command checkout the ",Object(r.b)("a",{parentName:"p",href:".././miscellaneous/tasks-scheduling"},"Tasks Scheduling")," page."),Object(r.b)("h3",{id:"define-consoles-routes"},"Define Consoles Routes"),Object(r.b)("p",null,"To define Console route go to ",Object(r.b)("inlineCode",{parentName:"p"},"app/Ship/Commands/Routes.php"),"."))}m.isMDXComponent=!0},223:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),m=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=m(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(t),d=a,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);