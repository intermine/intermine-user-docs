(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(r,".").concat(p)]||b[p]||d[p]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},102:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},106:function(e,t,n){"use strict";var a=n(0),i=n(107);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},107:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},115:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(106),r=n(102),l=n(60),s=n.n(l);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:b,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[h,g]=Object(a.useState)(l),y=a.Children.toArray(e.children),O=[];if(null!=d){const e=m[d];null!=e&&e!==h&&b.some((t=>t.value===e))&&g(e)}const j=e=>{const t=e.target,n=O.indexOf(t),a=y[n].props.value;g(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&i<=r&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},v=e=>{var t;let n;switch(e.keyCode){case u:{const t=O.indexOf(e.target)+1;n=O[t]||O[0];break}case c:{const t=O.indexOf(e.target)-1;n=O[t]||O[O.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>O.push(e),onKeyDown:v,onFocus:j,onClick:j},t)))),t?Object(a.cloneElement)(y.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},116:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},239:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/upload-tab-43feea4a067dbb57ac09fb222139be35.png"},240:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/upload-a-list-ed76d92c52d66a4c325171679defb0f3.png"},241:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/new-uploaded-list-64caa04c0b046018c09fd358d764fd25.png"},242:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/new-uploaded-list-2-9796b1cd08b519d0543791bdda7beb38.png"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(100)),r=n(115),l=n(116),s={title:"Upload a list"},c={unversionedId:"lists/upload-a-list",id:"lists/upload-a-list",isDocsHomePage:!1,title:"Upload a list",description:"The BlueGenes application gives you and other users the ability to create new lists by filling in a simple upload form. However, you need to be logged in to your intermine account to create a new list. To upload a list, click on the \u2018Upload\u2019 tab.",source:"@site/docs/lists/upload-a-list.mdx",slug:"/lists/upload-a-list",permalink:"/docs/user/lists/upload-a-list",editUrl:"https://github.com/intermine/intermine-user-docs/edit/master/docs/lists/upload-a-list.mdx",version:"current",sidebar:"docs",previous:{title:"Lists",permalink:"/docs/user/lists/lists"},next:{title:"List analysis",permalink:"/docs/user/lists/list-analysis-pages"}},u=[{value:"The Identifier resolution page",id:"the-identifier-resolution-page",children:[]}],b={toc:u};function d(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The BlueGenes application gives you and other users the ability to create new lists by filling in a simple upload form. However, you need to be logged in to your intermine account to create a new list. To upload a list, click on the ",Object(o.b)("strong",{parentName:"p"},"\u2018Upload\u2019")," tab. "),Object(o.b)("p",null,Object(o.b)("img",{src:n(239).default})),Object(o.b)("p",null,Object(o.b)("img",{src:n(240).default})),Object(o.b)("p",null,"The following is a breakdown of key fields in the list upload form: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The type of list - you can select the type of list you are uploading from the drop-down menu, e.g. gene or protein. "),Object(o.b)("li",{parentName:"ol"},"The organism your items are from. You can select the organism from the available drop-down menu. However, It is still possible to upload a list containing items from more than one organism by setting the organism to ",Object(o.b)("strong",{parentName:"li"},"\u2018Any\u2019"),"."),Object(o.b)("li",{parentName:"ol"},"Check the box if list identifiers are case sensitive. This option is useful in some cases, for example, when entering gene symbols for Drosophila melanogaster, where the case matters.  "),Object(o.b)("li",{parentName:"ol"},"You can type in your list or paste it as a text with identifiers separated by a comma, space, or a new line. See the screenshot under the ",Object(o.b)("strong",{parentName:"li"},"Free Text")," tab below for an example. "),Object(o.b)("li",{parentName:"ol"},"If you are unsure how to add your list in text format, click the ",Object(o.b)("strong",{parentName:"li"},"Example")," button for a sample text. "),Object(o.b)("li",{parentName:"ol"},"You can upload a list from a file; however, only ",Object(o.b)("strong",{parentName:"li"},"\u2018.txt\u2019")," files are accepted. Although the type of items you are uploading must be the same, the type of identifier can differ. For example, you can enter a mixture of gene symbols, identifiers and names. Check the screenshot under the ",Object(o.b)("strong",{parentName:"li"},"File Upload")," tab below.  "),Object(o.b)("li",{parentName:"ol"},"You can click ",Object(o.b)("strong",{parentName:"li"},"Continue")," to activate the identifier resolution system. A search will be performed for all the identifiers in your list. You can click ",Object(o.b)("strong",{parentName:"li"},"Reset")," to cancel.")),Object(o.b)(r.a,{defaultValue:"free_text",values:[{label:"Free Text",value:"free_text"},{label:"File Upload",value:"file_upload"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"free_text",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("img",{src:"/img/free-text-upload.png"}))),Object(o.b)(l.a,{value:"file_upload",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("img",{src:"/img/text-file-upload.png"})))),Object(o.b)("p",null,"You can click ",Object(o.b)("strong",{parentName:"p"},"Save List")," to add the list to your stored lists."),Object(o.b)("p",null,Object(o.b)("img",{src:n(241).default})),Object(o.b)("p",null,Object(o.b)("img",{src:n(242).default})),Object(o.b)("h3",{id:"the-identifier-resolution-page"},"The Identifier resolution page"),Object(o.b)("p",null,"When you upload a list, all identifiers entered will be checked against the database to see if matches can be found. InterMine has a sophisticated identifier resolution system that will help you map your identifiers to the database's correct identifiers. This is particularly useful if some gene models have changed and some of your identifiers become outdated. The identifier resolution system will report the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The number of exact matches found to entries in the database."),Object(o.b)("li",{parentName:"ol"},"Identifiers that match a synonym but not a main or primary identifier."),Object(o.b)("li",{parentName:"ol"},"Identifiers that match more than one database entry."),Object(o.b)("li",{parentName:"ol"},"Identifiers that match a different type - e.g. entering a protein identifier when you upload a list of genes.")),Object(o.b)("p",null,"The identifier resolution system is also used during InterMine data releases to check that all identifiers in your lists are still valid. Any discrepancies found will be reported to you, and you will be asked to \u2018",Object(o.b)("strong",{parentName:"p"},"Upgrade your lists"),"\u2019. The ",Object(o.b)("strong",{parentName:"p"},"Verify identifier matches")," page allows you to resolve any conflicts and decide which genes you want in your list. By default, exact matches are automatically added to your list.  You can choose to either add all other types of matches to your list or analyse each one individually and add as required.   "),Object(o.b)("p",null,"For example, for the ",Object(o.b)("strong",{parentName:"p"},"New Uploaded List")," created in the previous section, we have the following: "),Object(o.b)(r.a,{defaultValue:"matches",values:[{label:"Matches",value:"matches"},{label:"Converted",value:"converted"},{label:"Synonyms",value:"synonyms"},{label:"Ambiguous",value:"ambiguous"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"matches",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",null,"Exact matches:")," some exact matches were found for the listed identifiers."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/matches-2-.png"}))),Object(o.b)(l.a,{value:"converted",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",null,"Converted types:")," these identifiers matched non-Gene records from which a relationship to a Gene was found. For example, we have selected to upload a list of genes, but one of the identifiers is for a protein, ",Object(o.b)("strong",null,"uncoupling protein 3"),". The gene identifier for this protein is given."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/converted-2-.png"}))),Object(o.b)(l.a,{value:"synonyms",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",null,"Synonym match:")," these identifiers match old identifiers. For example, the GLUT4 identifier is old, and the gene now has a new identifier."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/synonyms.png"}))),Object(o.b)(l.a,{value:"ambiguous",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",null,"Ambiguous:")," some of the identifiers matched more than one entry in the database. In this case, the identifiers could belong to different species, and this could have been avoided by selecting the organism on the list upload page."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/ambiguous-3-.png"})))))}d.isMDXComponent=!0}}]);