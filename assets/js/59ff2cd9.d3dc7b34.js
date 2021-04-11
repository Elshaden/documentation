(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(223)),s={title:"Tasks Scheduling"},c={unversionedId:"miscellaneous/tasks-scheduling",id:"miscellaneous/tasks-scheduling",isDocsHomePage:!1,title:"Tasks Scheduling",description:"Tasks Scheduler:",source:"@site/docs/miscellaneous/tasks-scheduling.md",slug:"/miscellaneous/tasks-scheduling",permalink:"/docs/next/miscellaneous/tasks-scheduling",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/miscellaneous/tasks-scheduling.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Tests Helpers",permalink:"/docs/next/miscellaneous/tests-helpers"},next:{title:"Tasks Queuing",permalink:"/docs/next/miscellaneous/tasks-queuing"}},l=[{value:"Server Setup",id:"server-setup",children:[]},{value:"App Setup",id:"app-setup",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tasks Scheduler:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'is a script executor program, such as "Cron Job". (Cron Job is a time-based scripts scheduler in Unix-like computer\noperating systems).'),Object(o.b)("li",{parentName:"ul"},'its role is to schedule the execution of CLI Commands "Artisan Commands", periodically at fixed times, dates, or\nintervals.'),Object(o.b)("li",{parentName:"ul"},'Laravel has a wrapper around the "Cron Job" called the Laravel scheduler. This allows the framework to schedule class\nlike and Artisan Commands, Queued Jobs in addition to  custom Shell Commands, to run later.')),Object(o.b)("p",null,"Below is a quick guide for how to schedule some scripts execution such as (custom Shell Commands, Laravel Commands,\nLaravel ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/queues"},"Jobs"),", and other classes), in order to run at specific intervals or dates."),Object(o.b)("h3",{id:"server-setup"},"Server Setup"),Object(o.b)("p",null,"First let's set it up, by adding our single Cron entry, on the server. As follows:"),Object(o.b)("p",null,"1) Type ",Object(o.b)("inlineCode",{parentName:"p"},"crontab -e")),Object(o.b)("p",null,"2) At the last line add the following: ",Object(o.b)("inlineCode",{parentName:"p"},"* * * * * php /path-to-your-project/artisan schedule:run >> /dev/null 2>&1")),Object(o.b)("p",null,"Don't forget to replace the ",Object(o.b)("em",{parentName:"p"},"path-to-your-project"),"."),Object(o.b)("p",null,"More details ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/scheduling#introduction"},"here"),"."),Object(o.b)("h3",{id:"app-setup"},"App Setup"),Object(o.b)("p",null,"First you need to create some commands, that needs to be scheduled.\nThey can be created in the Containers ",Object(o.b)("inlineCode",{parentName:"p"},"(app/Containers/{container-name}/UI/CLI/Commands)")," or in the Ship (",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Commands"),").\nSee the ",Object(o.b)("a",{parentName:"p",href:".././optional-components/commands"},"Commands Page"),"."),Object(o.b)("p",null,"Once you have your command ready, go to ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Kernels/ConsoleKernel.php")," and start adding the commands you need\nto schedule inside the ",Object(o.b)("inlineCode",{parentName:"p"},"schedule")," function."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n    protected function schedule(Schedule $schedule)\n    {\n         $schedule->command('apiato:welcome')->everyMinute();\n         $schedule->job(new myJob)->hourly();\n         $schedule->exec('touch me.txt')->dailyAt('12:00');\n         // ...\n    }\n")),Object(o.b)("p",null,"More details ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/scheduling#defining-schedules"},"here"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: you do not need to register the commands with the ",Object(o.b)("inlineCode",{parentName:"p"},"$commands")," property or point to them in the ",Object(o.b)("inlineCode",{parentName:"p"},"commands()"),"\nfunction. Apiato will do that automatically for you.")))}p.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},i),{},{components:n})):a.a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);