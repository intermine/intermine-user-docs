(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),u=function(e){var t=s.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(r,".").concat(h)]||d[h]||b[h]||o;return a?s.a.createElement(m,i(i({ref:t},c),{},{components:a})):s.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},106:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),s=a.n(n),o={sm:[560,315],md:[800,450]},r=function(e){var t=e.id,a=e.size,n=void 0===a?"md":a;return s.a.createElement("iframe",{width:o[n][0],height:o[n][1],src:"https://www.youtube-nocookie.com/embed/"+t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowfullscreen:!0})}},107:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}));var n=a(16),s=a(110);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,r=o.forcePrependBaseUrl,i=void 0!==r&&r,l=o.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(s.b)(a))return a;if(i)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+u:u}(o,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},110:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}))},116:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABaCAIAAABGwY3YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKpSURBVHhe7dzNS5RRFMfxqb9g/oDctAgrSYMcR+nNrGQ0LK0WiYlRQRTmOqiIFhFEiL0sg6KimopC6g/oBcsRClq0aBHk05+Q6+kHHeEJ7sw8L/c+9z73nM/Gc5jV9zjIgDOzpl6vFxhbSz+5kn7epJ836edN+nnj3t/w9e/c7buLtaXPizXa82zXzh1dnVtmps/RHqLuf1Z9ceHiZVp8ceP6tcNjh2hZpX7+P60+p8kjDx49pilE3f9reZkmjwRBQFOIur+vt0yTRza2t9MUou4/c/oUTR45P32WphB1f0fH5jtzs7R4ATnlUomWEHU/DFUGvTkBQpBDy/8a9oMfJ2gSD836Ie8naB4PLfohvydoGQ+t+yGPJ4gSD5H6IV8niBgPUfshLyeIHg8x+sH9E8SKh3j94PIJ4sZD7H5w8wQJ4iFJP7h2gmTxkLAf3DlB4nhI3g8unCBNPKTqB7snSBkPafvB1gnSx4OGfsj+BFriQU8/ZHkCXfGgrR+yOYHGeNDZD6ZPoDceNPeDuRNojwf9/WDiBCbiwUg/6D2BoXgw1Q+6TmAuHgz2Q/oTGI0Hs/2Q5gSm4yGj97+u37CJpjh+/vhOkzHGf/+Ok37epJ836edN+nmTft6knzfp5036eZN+3qSfN+nnTfp5k37epD8TA/27aXJMRv379+2lyTEZ9R89Mqb8+Ll1mX7/VRD8Hh4Z/bOyQnsrvv3/v61t3bevS8cnxml3gJ3vP/u48Gly6iQtjXn7/o/tfb1fagsHhiu022OnH4rF4q3Zm1evXKLdEmv9/0yMH3tZfVLq3kZ7SLlH8XF17Sz3w9auzof3752YmqR9VU+pmyaT7Pz9U3r1en7+zdt37z8MVQYH9vSPHhyhB0xyqN8K+89/u6SfN+nnjXd/ofAXES7rJZB18pQAAAAASUVORK5CYII="},122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/export-new-da60261a35917fe77dd7a6a977c8b282.png"},200:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/navigate-data-1-85328529c1d691273276bd768699f600.png"},201:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/field-names-8a522f052c79cf99d8f0d66873230446.png"},202:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/links-5e3877aabaf53ab0d14ad30dd6e9fb43.png"},203:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/graph-9d13e4b46a35590d9f7df9331d5958c0.png"},204:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pathway-names-2 (1)-61357d7de274391271e7bfa47b7b39ce.png"},205:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/numerical-data-2-a16441dc68f7f8e8ef9d1f7ba79d9ada.png"},206:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/filtering-a-graph-376cb4361b87ee2a183a10c0cc9ab8ca.png"},207:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/remove-filters (1)-14ec7f9e48d71f918815faf60644ef2a.png"},208:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/log-linear-graph-1164e045d3e69164de11703ce58c334c.png"},209:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/column-summary-application-1-cut-4dd3585d09a118e4e2897b50e1927d66.png"},210:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/unique-genes-e2b58aa767def1dc606b304dc06054ab.png"},211:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/filters-e8a6b3e9d92d7e63f1a1651705b52d2f.png"},212:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/adding-a-filter (1)-2fd814fce12c68afbc698ab9f93662ab.png"},213:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manage-filters-d666ce29aed1d73c63dd2aad0431a4d4.png"},214:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/remove-filters-2-f4fc4c8360dbc57d6d03aa39bc37ee43.png"},215:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/adding-new-columns-346bcaecc01cb558a78c7f9ad0ca8d98.png"},216:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/remove-columns-61f377ddffdc8063a6ac229d6c09b383.png"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sorting-columns-2-0aec1f260b2f839f9aa6f83484e538c4.png"},218:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sorting-cols-5d7fea352a73f5b771b447b768c7a8be.png"},219:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/save-list-7c04543017440e7d3c374346f4150d07.png"},220:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/save-list-default-76d5f8ddc85c8d7e8475eb5e3c41000a.png"},221:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/save-a-list-new-e02306ffffbf8eb2335e0806d962a2d8.png"},222:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/success-message-1e02788414ff5a290080087a345df167.png"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(3),s=a(7),o=(a(0),a(103)),r=a(106),i=a(107),l={title:"Results Tables"},c={unversionedId:"results-tables",id:"results-tables",isDocsHomePage:!1,title:"Results Tables",description:"Running any search from the available template searches or using the query builder will return results as a results table. Results tables are also used to display the contents of a particular list on list analysis pages. Results tables are not limited to displaying search results, but they are also considered powerful analysis tools. They allow you to summarise, filter, add or remove columns, create lists, and download data.",source:"@site/docs/results-tables.md",slug:"/results-tables",permalink:"/intermine-user-docs/docs/results-tables",editUrl:"https://github.com/intermine/intermine-user-docs/edit/master/docs/results-tables.md",version:"current",sidebar:"docs",previous:{title:"Report Pages",permalink:"/intermine-user-docs/docs/report-pages"},next:{title:"Data Sources",permalink:"/intermine-user-docs/docs/data-sources"}},u=[{value:"Understanding and navigating through the data",id:"understanding-and-navigating-through-the-data",children:[]},{value:"Finding out more - links",id:"finding-out-more---links",children:[]},{value:"Column summaries",id:"column-summaries",children:[]},{value:"Some applications of column summaries:",id:"some-applications-of-column-summaries",children:[]},{value:"Apply a filter to your results",id:"apply-a-filter-to-your-results",children:[]},{value:"<strong>Returning to your original results</strong>",id:"returning-to-your-original-results",children:[]},{value:"Adding additional columns of data to your results",id:"adding-additional-columns-of-data-to-your-results",children:[]},{value:"Removing columns from your results",id:"removing-columns-from-your-results",children:[]},{value:"Changing the sort order of columns in your results",id:"changing-the-sort-order-of-columns-in-your-results",children:[]},{value:"Save a result set for further analysis",id:"save-a-result-set-for-further-analysis",children:[]},{value:"Download a set of results",id:"download-a-set-of-results",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"I have added a new column of data, but now I get \u2018No results\u2019",id:"i-have-added-a-new-column-of-data-but-now-i-get-no-results",children:[]},{value:"I can\u2019t see my list in the drop-down when I use the <strong>Add to existing list</strong> function.",id:"i-cant-see-my-list-in-the-drop-down-when-i-use-the-add-to-existing-list-function",children:[]},{value:"Video tutorial",id:"video-tutorial",children:[]}],d={toc:u};function b(e){var t=e.components,l=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Running any search from the available ",Object(o.b)("a",{parentName:"p",href:"/docs/template-search"},"template searches "),"or using the ",Object(o.b)("a",{parentName:"p",href:"/docs/the-query-builder"},"query builder")," will return results as a results table. Results tables are also used to display the contents of a particular list on list analysis pages. Results tables are not limited to displaying search results, but they are also considered powerful analysis tools. They allow you to summarise, filter, add or remove columns, create lists, and download data."),Object(o.b)("h3",{id:"understanding-and-navigating-through-the-data"},"Understanding and navigating through the data"),Object(o.b)("p",null,"The first thing to note on results tables is the number of rows returned by your query. By default, the number of rows shown per page is 10 and can be changed to 20, 50, 100, or 250 rows per page. For large data sets, you can navigate through your results one page at a time using the backward and forward arrow icons \u25c0 \u25b6, or you can go straight to the last or the first pages using the skip icons ",Object(o.b)("img",{className:"inline-image",src:Object(i.a)("/img/previous2.png")})," ",Object(o.b)("img",{className:"inline-image",src:Object(i.a)("/img/next2.png")}),"."),Object(o.b)("p",null,Object(o.b)("img",{src:a(200).default})),Object(o.b)("p",null,"The second thing to note is the column headings, which give the field name for the data shown and - in some cases - the class the data comes from. For example, in the following results table, the first two columns give a gene primary identifier and a gene symbol. The next column gives the gene name and the pathway identifier, and so on. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(201).default})),Object(o.b)("h3",{id:"finding-out-more---links"},"Finding out more - links"),Object(o.b)("p",null,"Columns showing certain object identifiers or symbols will be linked to the ",Object(o.b)("a",{parentName:"p",href:"/docs/report-pages"},"Report Pages")," for that object. In addition, hovering over a given cell in the table shows a pop-up summary of the object, which gives more details about its main attributes."),Object(o.b)("p",null,Object(o.b)("img",{src:a(202).default})),Object(o.b)("h3",{id:"column-summaries"},"Column summaries"),Object(o.b)("p",null,"A summary of the data in each column of a results table can be accessed by clicking on the graph icon ",Object(o.b)("img",{className:"inline-image",src:Object(i.a)("/img/bar-chart.png")})," in the column header."),Object(o.b)("p",null,Object(o.b)("img",{src:a(203).default})),Object(o.b)("p",null,"The type of summary shown depends on the type of data in the column - whether it is text or numerical data. For example, the results table below is showing pathways associated with the Pax6 targets list. Therefore, the summary for the pathway ",Object(o.b)("strong",{parentName:"p"},"Name")," column shows how many genes are associated with the same pathway. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(204).default})),Object(o.b)("p",null,"Whereas the following column of numerical data - gene lengths - shows the minimum and maximum values, the mean, and the standard deviation of the data."),Object(o.b)("p",null,Object(o.b)("img",{src:a(205).default})),Object(o.b)("p",null,"Results can also be filtered through the column summary depending on the type of data. For text data, you can filter by selecting the relevant checkbox","(","s",")"," or enter some text value in the search field and then select the relevant checkbox","(","s",")",". For numerical data, use the sliders to select the range of data you wish to view. Click the ",Object(o.b)("strong",{parentName:"p"},"Filter")," button to re-draw the table with your added filters. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(206).default})),Object(o.b)("p",null,"To remove a filter, either click the ",Object(o.b)("strong",{parentName:"p"},"UNDO")," button at the top of the table or the filter icon in the column header and remove it from there. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(207).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Column summary graph:")),Object(o.b)("p",null,"The graph shown at the top of a column summary gives an idea of the data's linear and log distribution. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(208).default})),Object(o.b)("h3",{id:"some-applications-of-column-summaries"},"Some applications of column summaries:"),Object(o.b)("p",null,"Column summaries are useful for several reasons. The following are a few ideas for how they can be used:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For a list of genes, find how many have the same annotation, where annotation could be anything associated with your genes such as GO terms, pathways or diseases.")),Object(o.b)("p",null,"You have a public list of Pax6 genes, ",Object(o.b)("strong",{parentName:"p"},"PL","_","Pax6","_","Targets"),", and want to find out which pathways they are involved in. You can run the ",Object(o.b)("inlineCode",{parentName:"p"},"Gene \u2192 Pathways")," template with your list of genes. The results table shows your genes and the names of all pathways they are annotated with. By clicking on the ",Object(o.b)("strong",{parentName:"p"},"column summary")," for the ",Object(o.b)("em",{parentName:"p"},"pathway.name")," column, you can now find out how many genes are associated with each pathway. In the example shown below, 44 of the genes in the list are associated with the ",Object(o.b)("strong",{parentName:"p"},"Signal Transduction")," pathway. If you wish to analyse this set of genes further, you can filter the table for this set and then create a new list with this set of genes. Check the ",Object(o.b)("a",{parentName:"p",href:"/docs/results-tables#save-a-result-set-for-further-analysis"},"Save a result set for further analysis")," section for how to create a sub-list of genes."),Object(o.b)("p",null,Object(o.b)("img",{src:a(209).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Find the number of unique genes in your results.")),Object(o.b)("p",null,"Often a results table will have multiple rows with information about several genes. By looking just through the table, it will be difficult to know how many genes you have in your results. You can use the column summary to give you this information."),Object(o.b)("p",null,"For example, when you run the ",Object(o.b)("inlineCode",{parentName:"p"},"Gene \u2192 Pathways")," template search with the same public list - ",Object(o.b)("strong",{parentName:"p"},"PL","_","Pax6","_","Targets")," - to determine which pathways the genes in the list are involved in, the results table gives 1,575 rows.  However, there are multiple genes associated with a single pathway, which means you do not know how many genes you have. When you click on the ",Object(o.b)("strong",{parentName:"p"},"column summary")," for either the gene primary or secondary identifiers or the gene symbol, you can find the number of unique genes. As shown in the following screenshot, there are 153 genes."),Object(o.b)("p",null,Object(o.b)("img",{src:a(210).default})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note that if you want to create a list of these genes, you will create a list of 153 unique genes. Please see the ",Object(o.b)("a",{parentName:"p",href:"/docs/results-tables#save-a-result-set-for-further-analysis"},"Save a result set for further analysis")," section for more details."))),Object(o.b)("p",null,"Results by default are always returned with what we call an inner join. So, in the example above, if a gene in the list does not have associated pathway data then it will not appear in the results. This can be changed - see the ",Object(o.b)("a",{parentName:"p",href:"/docs/the-query-builder#outer-joins"},"Query Builder - Outer joins")," section for more details."),Object(o.b)("h3",{id:"apply-a-filter-to-your-results"},"Apply a filter to your results"),Object(o.b)("p",null,"Results tables allow you to explore your results by applying filters to any of the resulting data columns. Filters can be applied through the ",Object(o.b)("strong",{parentName:"p"},"filter")," icon ",Object(o.b)("img",{className:"inline-image",src:Object(i.a)("/img/screenshot-902-.png")})," in the column header and the ",Object(o.b)("a",{parentName:"p",href:"/docs/results-tables#column-summaries"},"Column summaries"),". The filter icon allows you to edit or remove any existing filters and add additional filters to your results. Any active filters are shown and can only be removed or edited when you click the filter icon."),Object(o.b)("p",null,Object(o.b)("img",{src:a(211).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To add a new filter:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"filter")," icon",Object(o.b)("img",{src:a(116).default}),"shown on all columns' headers."),Object(o.b)("li",{parentName:"ol"},"Use the drop-down lists and input field to define your filter."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Apply")," button to re-draw the results table with your filter in place. ")),Object(o.b)("p",null,Object(o.b)("img",{src:a(212).default})),Object(o.b)("p",null,"You can also add, edit or remove filters using the ",Object(o.b)("strong",{parentName:"p"},"Manage Filters")," button, which provides information on filters added to all columns in the results. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(213).default})),Object(o.b)("h3",{id:"returning-to-your-original-results"},Object(o.b)("strong",{parentName:"h3"},"Returning to your original results")),Object(o.b)("p",null,"Filters can be removed by clicking on ",Object(o.b)("img",{className:"inline-image",src:Object(i.a)("/img/screenshot-902-.png")})," icon and then click the delete icon ",Object(o.b)("img",{className:"inline-image",src:Object(i.a)("/img/remove-filters-2-copy.png")})," shown below. Alternatively, you can use the ",Object(o.b)("strong",{parentName:"p"},"UNDO")," button above the results to return to previous states. If you have added multiple filters, you can go back to any previous state of your results table or straight back to the original table state."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The original state may still have filters applied. Original state refers to the original query run, not to a table with no filters applied."))),Object(o.b)("p",null,Object(o.b)("img",{src:a(214).default})),Object(o.b)("h3",{id:"adding-additional-columns-of-data-to-your-results"},"Adding additional columns of data to your results"),Object(o.b)("p",null,"Additional fields of data can be added to your results using the ",Object(o.b)("strong",{parentName:"p"},"Add Columns")," button, which allows you to browse all fields available and select those you wish to add:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Add columns")," button."),Object(o.b)("li",{parentName:"ol"},"Browse the fields to find the ones of interest. "),Object(o.b)("li",{parentName:"ol"},"Click on any field to add that data to your results."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Apply")," to re-draw the results table.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you do not know which field contains the data you require, try adding one or more columns and re-draw the table - it is easy to remove them again. Alternatively, you can ",Object(o.b)("a",{parentName:"p",href:"/docs/contact-us"},"Contact Us"),", and we are here to help."))),Object(o.b)("p",null,Object(o.b)("img",{src:a(215).default})),Object(o.b)("h3",{id:"removing-columns-from-your-results"},"Removing columns from your results"),Object(o.b)("p",null,"To remove any column from the list of columns shown in your results: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the delete icon \u2716 in the desired column's header.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To add the deleted column back, click the ",Object(o.b)("strong",{parentName:"p"},"Undo")," button to revert to the previous state."))),Object(o.b)("p",null,Object(o.b)("img",{src:a(216).default})),Object(o.b)("h3",{id:"changing-the-sort-order-of-columns-in-your-results"},"Changing the sort order of columns in your results"),Object(o.b)("p",null,"There are two ways to change the sort order of the columns in your results tables. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First, every column header has a sort icon which allows you to sort on a specific column in either direction ",Object(o.b)("inlineCode",{parentName:"li"},"a \u2192 z")," or ",Object(o.b)("inlineCode",{parentName:"li"},"z \u2192 a"))),Object(o.b)("p",null,Object(o.b)("img",{src:a(217).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The second way to set the sort order is through the ",Object(o.b)("a",{parentName:"li",href:"/docs/the-query-builder"},Object(o.b)("strong",{parentName:"a"},"Query Builder"))," tab, where you can define the sort order of all columns in your table under the ",Object(o.b)("a",{parentName:"li",href:"/docs/the-query-builder#overview"},Object(o.b)("strong",{parentName:"a"},"Manage Columns"))," sub-tab.")),Object(o.b)("p",null,Object(o.b)("img",{src:a(218).default})),Object(o.b)("p",null,"By default, the table is usually sorted according to the first column in your results; however, template searches may be sorted on a column other than the first. "),Object(o.b)("h3",{id:"save-a-result-set-for-further-analysis"},"Save a result set for further analysis"),Object(o.b)("p",null,"Lists of objects can be saved from results tables to your private lists account or temporarily for the duration of your session if you are not logged in. A list of objects can contain only one type of object. For example,  if you have a results table showing both genes and proteins, you can create a list of all or some of the genes and another list of all or some of the proteins. However, you cannot create a mixed list of genes or proteins or save the table,  maintaining the association between each gene and protein. You can download the full table or subsets of it - see ",Object(o.b)("a",{parentName:"p",href:"/docs/results-tables#download-a-set-of-results"},"Download a set of results"),"."),Object(o.b)("p",null,"You can save a subset of the resulting data in a new list by clicking the ",Object(o.b)("strong",{parentName:"p"},"Save List")," button at the top of the columns header. You can select from the sets of objects available to save or choose individual items from the table using their corresponding checkboxes. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(219).default})),Object(o.b)("p",null,"Once you have made your selection, a default name will be given to your list, including the type of the objects in your list, e.g. genes, the date, time of creation, and the time zone. There is also an optional description filed to add a short description of your list. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(220).default})),Object(o.b)("p",null,"You can edit the default name and a description, if desires, and then click ",Object(o.b)("strong",{parentName:"p"},"Save"),". "),Object(o.b)("p",null,Object(o.b)("img",{src:a(221).default})),Object(o.b)("p",null,"The new list will be saved, and a  message will appear at the bottom of the screen if your list creation was successful. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(222).default})),Object(o.b)("h3",{id:"download-a-set-of-results"},"Download a set of results"),Object(o.b)("p",null,"Results tables can be downloaded in various formats using the ",Object(o.b)("strong",{parentName:"p"},"Export")," button at the top of the table's header. You can select whether to export your results table in ",Object(o.b)("strong",{parentName:"p"},"tsv"),", ",Object(o.b)("strong",{parentName:"p"},"csv"),", or ",Object(o.b)("strong",{parentName:"p"},"fasta")," format.   By default, the output format is set to tsv, and the downloaded results table will be saved to a file. "),Object(o.b)("p",null,"You can also export your results as a ",Object(o.b)("strong",{parentName:"p"},"Frictionless Data Package"),", which uses the ",Object(o.b)("strong",{parentName:"p"},"ZIP Compression"),' to download your results as a "',Object(o.b)("strong",{parentName:"p"},".zip"),'" file. By default, results will be downloaded uncompressed; however, you can use the ',Object(o.b)("strong",{parentName:"p"},"Compression")," option to compress your results, as shown in the following screenshot.  "),Object(o.b)("p",null,Object(o.b)("img",{src:a(122).default})),Object(o.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("h3",{id:"i-have-added-a-new-column-of-data-but-now-i-get-no-results"},"I have added a new column of data, but now I get \u2018No results\u2019"),Object(o.b)("p",null,"The InterMine data model comprises classes and fields - or attributes - Each class has a set of fields depending on the type of data. For example, Gene is a class and has the Primary identifier, Name and Symbol fields",Object(o.b)("em",{parentName:"p"},","),' among others. If the new data you are adding to your results is a field from a class already in your results, your new results table should be the same as your original results, but of course, with the new data column. If this field does not contain any data, it doesn\u2019t matter, and it will just say "No value". However, if you are adding a field of data from a new class that is not already in your results, there is a chance that your search will now return ',Object(o.b)("strong",{parentName:"p"},"No results")," if it does not contain any data for the set of constraints you already have in your query."),Object(o.b)("h3",{id:"i-cant-see-my-list-in-the-drop-down-when-i-use-the-add-to-existing-list-function"},"I can\u2019t see my list in the drop-down when I use the ",Object(o.b)("strong",{parentName:"h3"},"Add to existing list")," function."),Object(o.b)("p",null,"First, make sure you are logged in so you can access your saved lists. Besides, make sure the type of the list ","(","e.g. genes or proteins",")"," is the same as the list you are trying to add to because the drop-down menu only shows lists of the same type of objects."),Object(o.b)("h3",{id:"video-tutorial"},"Video tutorial"),Object(o.b)(r.a,{id:"vYqny26gElE",mdxType:"Youtube"}))}b.isMDXComponent=!0}}]);