(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),d=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(a),b=r,f=l["".concat(s,".").concat(b)]||l[b]||p[b]||o;return a?n.a.createElement(f,i(i({ref:t},u),{},{components:a})):n.a.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},282:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-sources (1)-9fbcfd1975ec94e74c9d05cdf20f14a1.png"},283:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-sets-0b6fd0d6bed4362c7d831e6437e651af.png"},284:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/interaction-data-ca56a564aaa8081dd33a0ebdd0a66723.png"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(100)),s={title:"Data Sources"},i={unversionedId:"data-sources",id:"data-sources",isDocsHomePage:!1,title:"Data Sources",description:"Browse data sources",source:"@site/docs/data-sources.md",slug:"/data-sources",permalink:"/intermine-user-docs/data-sources",editUrl:"https://github.com/intermine/intermine-user-docs/edit/master/docs/data-sources.md",version:"current",sidebar:"docs",previous:{title:"Results Tables",permalink:"/intermine-user-docs/results-tables"},next:{title:"Gene Ontology Data",permalink:"/intermine-user-docs/cookbook-of-examples-humanmine/gene-ontology"}},c=[{value:"Browse data sources",id:"browse-data-sources",children:[]},{value:"Data in the database",id:"data-in-the-database",children:[]}],u={toc:c};function d(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"browse-data-sources"},"Browse data sources"),Object(o.b)("p",null,"The BlueGenes application includes a link to all data sources on the homepage, which provides details of all data included in the database. This link applies to all InterMine instances. You can browse the full set of data available, including data set name, publications and links to the original data source by clicking the ",Object(o.b)("strong",{parentName:"p"},"Show Sources")," button. The data sources will be displayed as a standard results table, as shown below. "),Object(o.b)("p",null,Object(o.b)("img",{src:a(282).default})),Object(o.b)("h3",{id:"data-in-the-database"},"Data in the database"),Object(o.b)("p",null,"The source of all data is stored in the data source and data set classes within the database. The data source stores the main data provider, such as a database; while the data set represents any individual sets of data from that data source. For example, an InterMine may load Gene Ontology data for several organisms from the Gene Ontology Consortium. The data source is the Gene Ontology Consortium, while each organism's data will be recorded as a data set.  "),Object(o.b)("p",null,Object(o.b)("img",{src:a(283).default})),Object(o.b)("p",null,"Data sets and data sources can be included in queries results;  this is particularly useful if the same type of data is loaded from different sources. For example, HumanMine loads interaction data from two data sources, ",Object(o.b)("strong",{parentName:"p"},"IntAct")," and ",Object(o.b)("strong",{parentName:"p"},"BioGRID"),". "),Object(o.b)("p",null,Object(o.b)("img",{src:a(284).default})),Object(o.b)("p",null,"For more on how to add information to the query results, see ",Object(o.b)("a",{parentName:"p",href:"results-tables#adding-additional-columns-of-data-to-your-results"},"Adding additional columns of data to your results"),", or ",Object(o.b)("a",{parentName:"p",href:"the-query-builder"},"The Query Builder"),"."))}d.isMDXComponent=!0}}]);