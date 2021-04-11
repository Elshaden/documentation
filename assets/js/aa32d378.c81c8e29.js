(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(8),o=(t(0),t(223)),r={title:"Notifications"},c={unversionedId:"optional-components/notifications",id:"version-9.x/optional-components/notifications",isDocsHomePage:!1,title:"Notifications",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/notifications.md",slug:"/optional-components/notifications",permalink:"/docs/optional-components/notifications",editUrl:"https://github.com/moslem-deris/docs/edit/main/versioned_docs/version-9.x/optional-components/notifications.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",sidebar:"version-9.x/docs",previous:{title:"Mails",permalink:"/docs/optional-components/mails"},next:{title:"Values",permalink:"/docs/optional-components/values"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}]},{value:"Select Channels",id:"select-channels",children:[]},{value:"Queueing a Notification",id:"queueing",children:[]},{value:"Use DB channel",id:"db-channel",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#select-channels"},"Select Channels")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#queueing"},"Queueing")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#db-channel"},"Use DB channel"))),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Notifications allow you to inform the user about a state changes in your application.  "),Object(o.b)("p",null,"The Laravel notifications supports sending notifications across a variety channels (mail, SMS, Slack, Database...). "),Object(o.b)("p",null,"When using the Database channel the notifications will be stored in a database to be displayed in your client interface."),Object(o.b)("p",null,"For more details refer to this ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/notifications"},"link"),"."),Object(o.b)("h2",{id:"principles"},"Principles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Notification.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ship may contain Application general Notifications."))),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Notifications MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Notifications\\Notification"),".")),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Notifications\n                - UserRegisteredNotification.php\n                - ...\n    - Ship\n        - Notifications\n            - SystemFailureNotification.php\n            - ...\n")),Object(o.b)("h3",{id:"code-samples"},"Code Samples"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example: a simple Notification")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\nnamespace App\\Containers\\User\\Notifications;\n\nuse App\\Containers\\User\\Models\\User;\nuse App\\Ship\\Parents\\Notifications\\Notification;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass BirthdayReminderNotification extends Notification implements ShouldQueue\n{\n\n    use Queueable;\n\n    protected $notificationMessage;\n\n    public function __construct($notificationMessage)\n    {\n        $this->notificationMessage = $notificationMessage;\n    }\n    \n    public function toArray($notifiable)\n    {\n        return [\n            \'content\' => $this->notificationMessage,\n        ];\n    }\n\n    public function toMail($notifiable)\n    {\n        // $notifiable is the object you want to notify "e.g. user"\n        return (new MailMessage)\n            ->subject("Hello World")\n            ->line("Hi, $notifiable->name")\n            ->line($this->notificationMessage);\n    }\n\n    public function toSms($notifiable)\n    {\n        // ...\n    }\n    \n    // ...\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage from an Action or Task:")),Object(o.b)("p",null,"Notifications can be sent from Actions or Tasks using the ",Object(o.b)("inlineCode",{parentName:"p"},"Notification")," Facade.  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"\\Notification::send($user, new BirthdayReminderNotification($notificationMessage));\n")),Object(o.b)("p",null,"Alternatively you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"Illuminate\\Notifications\\Notifiable"),' trait on the notifiable object "e.g. User" and then call it as follows:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// get any user\n$user = User::firstOrCreate([\n    'name' => 'Mahmoud Zalt',\n    'email' => 'mail@something.com',\n    'phone' => '0096123456789',\n]);\n\n// call notify, found on the Notifiable trait\n$user->notify(new BirthdayReminderNotification($notificationMessage));\n")),Object(o.b)("h2",{id:"select-channels"},"Select Channels"),Object(o.b)("p",null,"To select a notification channel, apiato have the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/notification.php"),' config file where you can define the array of supported channels "e.g. SMS, Email, WebPush...", to be used for all your notifications.'),Object(o.b)("p",null,"If you want to override the configuration for some notifications classes, or if you prefer to define the channels within each notification class itself,\nyou can override the ",Object(o.b)("strong",{parentName:"p"},"via")," function ",Object(o.b)("inlineCode",{parentName:"p"},"public function via($notifiable)")," in the notification class and define your channels. "),Object(o.b)("p",null,"Checkout ",Object(o.b)("a",{parentName:"p",href:"http://laravel-notification-channels.com"},"laravel notification channels")," for list of supported integrations."),Object(o.b)("h2",{id:"queueing"},"Queueing a Notification"),Object(o.b)("p",null,"To queue a notification you should use ",Object(o.b)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",Object(o.b)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."),Object(o.b)("h2",{id:"db-channel"},"Use DB channel"),Object(o.b)("p",null,"Generally you need to generate the notification migration ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan notifications:table"),", then run ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan migrate"),",\nhowever just running the migration command will do the job, since Apiato already adds the ",Object(o.b)("inlineCode",{parentName:"p"},"_create_notifications_table.php")," in the default migrations files directory ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Migrations/"),"."))}p.isMDXComponent=!0},223:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,d=u["".concat(r,".").concat(f)]||u[f]||b[f]||o;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);