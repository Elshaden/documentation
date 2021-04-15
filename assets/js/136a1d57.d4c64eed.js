(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),i=(n(0),n(222)),s={title:"Authorization"},o={unversionedId:"features/authorization",id:"features/authorization",isDocsHomePage:!1,title:"Authorization",description:"- How it works",source:"@site/docs/features/authorization.md",slug:"/features/authorization",permalink:"/docs/next/features/authorization",editUrl:"https://github.com/apiato/documentation/tree/master/docs/features/authorization.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618500500,formattedLastUpdatedAt:"4/15/2021",sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/next/features/authentication"},next:{title:"User Registration",permalink:"/docs/next/features/user-registration"}},l=[{value:"How it works",id:"how-it-works",children:[]},{value:"Responses",id:"responses",children:[]},{value:"Assign Roles &amp; Permission to the Testing User",id:"assign-roles-permission-to-the-testing-user",children:[]},{value:"Seeding some users (Admins)",id:"seeding-some-users-admins",children:[]},{value:"Roles &amp; Permissions guards",id:"roles-permissions-guards",children:[]},{value:"Permissions Inheriting with Levels",id:"permissions-inheriting-with-levels",children:[]}],p={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-it-works"},"How it works")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#responses"},"Responses")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#seeding-some-users-admins"},"Seeding some users (Admins)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#roles-permissions-guards"},"Roles & Permissions guards")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#permissions-inheriting-with-levels"},"Permissions Inheriting with Levels"))),Object(i.b)("p",null,"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container."),Object(i.b)("p",null,"Behind the scenes apiato is using the ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/authorization"},"Laravel's authorization")," functionality that was introduced in version 5.1.11 with the helper package ",Object(i.b)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission"},"laravel-permission"),". So you can always refer to the correspond documentation for more information."),Object(i.b)("h2",{id:"how-it-works"},"How it works"),Object(i.b)("p",null,"Authorization in apiato is very simple and easy."),Object(i.b)("p",null,"1) Create some Roles and permissions. By default, an ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," role and some permissions are provided by Apiato. You can find the code in ",Object(i.b)("inlineCode",{parentName:"p"},"app/Containers/AppSection/Authorization/Data/Seeders/*")," directory."),Object(i.b)("p",null,"2) Attach some permissions to the roles."),Object(i.b)("p",null,"3) Now start creating users (or use existing users), to assign them to the new created Roles."),Object(i.b)("p",null,"4) Finally, you need to protect your endpoints by Permissions (or/and Roles). The right place to do that is the Requests class."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example protecting the (delete user) endpoint with ",Object(i.b)("inlineCode",{parentName:"strong"},"delete-users")," permission:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"class DeleteUserRequest extends Request\n{\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => '',\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'hasAccess',\n        ]);\n    }\n}\n\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"For detailed explanation of this example, please visit the ",Object(i.b)("a",{parentName:"strong",href:"../main-components/requests"},"Requests")," Page.")),Object(i.b)("h2",{id:"responses"},"Responses"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Authorization failed JSON response:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "This action is unauthorized."\n}\n')),Object(i.b)("h2",{id:"assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User"),Object(i.b)("p",null,"You will need to set ",Object(i.b)("inlineCode",{parentName:"p"},"$access")," property in your test class, check out the ",Object(i.b)("a",{parentName:"p",href:"../miscellaneous/tests-helpers"},"Tests Helpers")," page for more details."),Object(i.b)("h2",{id:"seeding-some-users-admins"},"Seeding some users (Admins)"),Object(i.b)("p",null,"By default, Apiato comes with a ",Object(i.b)("inlineCode",{parentName:"p"},"Super Admin"),"."),Object(i.b)("p",null,"This Super Admin Credentials are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"email: ",Object(i.b)("a",{parentName:"li",href:"mailto:admin@admin.com"},"admin@admin.com")),Object(i.b)("li",{parentName:"ul"},"password: admin")),Object(i.b)("p",null,"This Admin seeded by ",Object(i.b)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/AuthorizationDefaultUsersSeeder_3.php"),"."),Object(i.b)("p",null,"The Default Super User, has a default role ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," default role ",Object(i.b)("strong",{parentName:"p"},"has no permissions given to it"),"."),Object(i.b)("p",null,"To give permissions to the ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," role (or any other role), you can use the dedicated endpoints (from your custom Admin Interface) or use this command ",Object(i.b)("inlineCode",{parentName:"p"},"php artisan apiato:permissions:toRole admin")," to give it all the permissions in the system."),Object(i.b)("p",null,"Checkout each container ",Object(i.b)("strong",{parentName:"p"},"Seeders")," directory ",Object(i.b)("inlineCode",{parentName:"p"},"app/Containers/AppSection/{container-name}/Data/Seeders/"),", to edit the default ",Object(i.b)("strong",{parentName:"p"},"Users"),", ",Object(i.b)("strong",{parentName:"p"},"Roles")," and ",Object(i.b)("strong",{parentName:"p"},"Permissions"),"."),Object(i.b)("h2",{id:"roles-permissions-guards"},"Roles & Permissions guards"),Object(i.b)("p",null,"By default, Apiato uses a single guard called ",Object(i.b)("inlineCode",{parentName:"p"},"web")," for all it's roles and permissions, you can add/edit this behavior and support multiple guards at any time. Refer to the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission#using-multiple-guards"},"laravel-permission")," package for more details."),Object(i.b)("h2",{id:"permissions-inheriting-with-levels"},"Permissions Inheriting with Levels"),Object(i.b)("p",null,"When you create a role you can set an optional parameter, called ",Object(i.b)("inlineCode",{parentName:"p"},"level"),", which is set to ",Object(i.b)("inlineCode",{parentName:"p"},"0")," by default,\nThe default seeded ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," role has it set to ",Object(i.b)("inlineCode",{parentName:"p"},"999"),"."),Object(i.b)("p",null,"Level allows inheriting permissions.\nRole with higher level is inheriting permission from roles with lower level."),Object(i.b)("p",null,"Below is a nice example of how it works:"),Object(i.b)("p",null,"You have three roles: user, moderator and admin.\nUser has a permission to read articles, moderator can manage comments and admin can create articles.\nUser has a level 1, moderator level 2 and admin level 3.\nIt means, moderator and administrator has also permission to read articles, but administrator can manage comments as well."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"if ($user->getRoleLevel() > 10) {\n    //\n}\n")),Object(i.b)("p",null,"If user has multiple roles, the ",Object(i.b)("inlineCode",{parentName:"p"},"getRoleLevel()")," method returns the highest one."),Object(i.b)("p",null,"If you don't need the permissions inheriting feature, simply ignore the optional level parameter when creating roles."))}c.isMDXComponent=!0}}]);