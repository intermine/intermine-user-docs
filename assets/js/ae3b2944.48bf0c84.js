(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,f=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return n?i.a.createElement(f,l(l({ref:t},c),{},{components:n})):i.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},102:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(16),i=n(105);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},105:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},108:function(e,t,n){"use strict";var a=n(0),i=n(109);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},109:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},114:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(108),o=n(102),l=n(57),s=n.n(l);var c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,d=e.groupId,p=e.className,f=Object(r.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,g=Object(a.useState)(l),y=g[0],O=g[1],v=a.Children.toArray(e.children),j=[];if(null!=d){var w=m[d];null!=w&&w!==y&&b.some((function(e){return e.value===w}))&&O(w)}var x=function(e){var t=e.target,n=j.indexOf(t),a=v[n].props.value;O(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,i,r,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case c:var i=j.indexOf(e.target)-1;n=j[i]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:T,onFocus:x,onClick:x},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},115:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},239:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/upload-tab-43feea4a067dbb57ac09fb222139be35.png"},240:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/upload-a-list-ed76d92c52d66a4c325171679defb0f3.png"},241:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/new-uploaded-list-64caa04c0b046018c09fd358d764fd25.png"},242:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/new-uploaded-list-2-9796b1cd08b519d0543791bdda7beb38.png"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(100)),o=n(103),l=n(114),s=n(115),c={title:"Upload a list"},u={unversionedId:"lists/upload-a-list",id:"lists/upload-a-list",isDocsHomePage:!1,title:"Upload a list",description:"The BlueGenes application gives you and other users the ability to create new lists by filling in a simple upload form. However, you need to be logged in to your intermine account to create a new list. To upload a list, click on the \u2018Upload\u2019 tab.",source:"@site/docs/lists/upload-a-list.mdx",slug:"/lists/upload-a-list",permalink:"/intermine-user-docs/lists/upload-a-list",editUrl:"https://github.com/intermine/intermine-user-docs/edit/master/docs/lists/upload-a-list.mdx",version:"current",sidebar:"docs",previous:{title:"Lists",permalink:"/intermine-user-docs/lists/lists"},next:{title:"List analysis",permalink:"/intermine-user-docs/lists/list-analysis-pages"}},b=[{value:"The Identifier resolution page",id:"the-identifier-resolution-page",children:[]}],d={toc:b};function p(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The BlueGenes application gives you and other users the ability to create new lists by filling in a simple upload form. However, you need to be logged in to your intermine account to create a new list. To upload a list, click on the ",Object(r.b)("strong",{parentName:"p"},"\u2018Upload\u2019")," tab. "),Object(r.b)("p",null,Object(r.b)("img",{src:n(239).default})),Object(r.b)("p",null,Object(r.b)("img",{src:n(240).default})),Object(r.b)("p",null,"The following is a breakdown of key fields in the list upload form: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The type of list - you can select the type of list you are uploading from the drop-down menu, e.g. gene or protein. "),Object(r.b)("li",{parentName:"ol"},"The organism your items are from. You can select the organism from the available drop-down menu. However, It is still possible to upload a list containing items from more than one organism by setting the organism to ",Object(r.b)("strong",{parentName:"li"},"\u2018Any\u2019"),"."),Object(r.b)("li",{parentName:"ol"},"Check the box if list identifiers are case sensitive. This option is useful in some cases, for example, when entering gene symbols for Drosophila melanogaster, where the case matters.  "),Object(r.b)("li",{parentName:"ol"},"You can type in your list or paste it as a text with identifiers separated by a comma, space, or a new line. See the screenshot under the ",Object(r.b)("strong",{parentName:"li"},"Free Text")," tab below for an example. "),Object(r.b)("li",{parentName:"ol"},"If you are unsure how to add your list in text format, click the ",Object(r.b)("strong",{parentName:"li"},"Example")," button for a sample text. "),Object(r.b)("li",{parentName:"ol"},"You can upload a list from a file; however, only ",Object(r.b)("strong",{parentName:"li"},"\u2018.txt\u2019")," files are accepted. Although the type of items you are uploading must be the same, the type of identifier can differ. For example, you can enter a mixture of gene symbols, identifiers and names. Check the screenshot under the ",Object(r.b)("strong",{parentName:"li"},"File Upload")," tab below.  "),Object(r.b)("li",{parentName:"ol"},"You can click ",Object(r.b)("strong",{parentName:"li"},"Continue")," to activate the identifier resolution system. A search will be performed for all the identifiers in your list. You can click ",Object(r.b)("strong",{parentName:"li"},"Reset")," to cancel.")),Object(r.b)(l.a,{defaultValue:"free_text",values:[{label:"Free Text",value:"free_text"},{label:"File Upload",value:"file_upload"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"free_text",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("img",{src:Object(o.a)("/img/free-text-upload.png")}))),Object(r.b)(s.a,{value:"file_upload",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("img",{src:Object(o.a)("/img/text-file-upload.png")})))),Object(r.b)("p",null,"You can click ",Object(r.b)("strong",{parentName:"p"},"Save List")," to add the list to your stored lists."),Object(r.b)("p",null,Object(r.b)("img",{src:n(241).default})),Object(r.b)("p",null,Object(r.b)("img",{src:n(242).default})),Object(r.b)("h3",{id:"the-identifier-resolution-page"},"The Identifier resolution page"),Object(r.b)("p",null,"When you upload a list, all identifiers entered will be checked against the database to see if matches can be found. InterMine has a sophisticated identifier resolution system that will help you map your identifiers to the database's correct identifiers. This is particularly useful if some gene models have changed and some of your identifiers become outdated. The identifier resolution system will report the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The number of exact matches found to entries in the database."),Object(r.b)("li",{parentName:"ol"},"Identifiers that match a synonym but not a main or primary identifier."),Object(r.b)("li",{parentName:"ol"},"Identifiers that match more than one database entry."),Object(r.b)("li",{parentName:"ol"},"Identifiers that match a different type - e.g. entering a protein identifier when you upload a list of genes.")),Object(r.b)("p",null,"The identifier resolution system is also used during InterMine data releases to check that all identifiers in your lists are still valid. Any discrepancies found will be reported to you, and you will be asked to \u2018",Object(r.b)("strong",{parentName:"p"},"Upgrade your lists"),"\u2019. The ",Object(r.b)("strong",{parentName:"p"},"Verify identifier matches")," page allows you to resolve any conflicts and decide which genes you want in your list. By default, exact matches are automatically added to your list.  You can choose to either add all other types of matches to your list or analyse each one individually and add as required.   "),Object(r.b)("p",null,"For example, for the ",Object(r.b)("strong",{parentName:"p"},"New Uploaded List")," created in the previous section, we have the following: "),Object(r.b)(l.a,{defaultValue:"matches",values:[{label:"Matches",value:"matches"},{label:"Converted",value:"converted"},{label:"Synonyms",value:"synonyms"},{label:"Ambiguous",value:"ambiguous"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"matches",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",null,"Exact matches:")," some exact matches were found for the listed identifiers."),Object(r.b)("p",null,Object(r.b)("img",{src:Object(o.a)("/img/matches-2-.png")}))),Object(r.b)(s.a,{value:"converted",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",null,"Converted types:")," these identifiers matched non-Gene records from which a relationship to a Gene was found. For example, we have selected to upload a list of genes, but one of the identifiers is for a protein, ",Object(r.b)("strong",null,"uncoupling protein 3"),". The gene identifier for this protein is given."),Object(r.b)("p",null,Object(r.b)("img",{src:Object(o.a)("/img/converted-2-.png")}))),Object(r.b)(s.a,{value:"synonyms",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",null,"Synonym match:")," these identifiers match old identifiers. For example, the GLUT4 identifier is old, and the gene now has a new identifier."),Object(r.b)("p",null,Object(r.b)("img",{src:Object(o.a)("/img/synonyms.png")}))),Object(r.b)(s.a,{value:"ambiguous",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",null,"Ambiguous:")," some of the identifiers matched more than one entry in the database. In this case, the identifiers could belong to different species, and this could have been avoided by selecting the organism on the list upload page."),Object(r.b)("p",null,Object(r.b)("img",{src:Object(o.a)("/img/ambiguous-3-.png")})))))}p.isMDXComponent=!0}}]);