import{d as u,e as a,s as c,c as t,a as l,u as d,r,o as s}from"./index.52aedcf8.js";const p=u({__name:"Menu",setup(i){const e=a("#abd123"),n=c([{label:"\u9996\u9875",index:"/",disabled:!0,icon:"document"},{label:"\u56FE\u6807\u9009\u62E9\u5668",index:"/choose-icon",icon:"document"},{label:"\u5730\u5740\u9009\u62E9\u5668",index:"/choose-area",icon:"document",children:[{label:"\u56FE\u6807\u9009\u62E9\u5668",index:"/choose-icon",icon:"document",children:[{label:"\u9996\u9875",index:"/",icon:"document"}]}]}]);return(m,f)=>{const o=r("r-menu");return s(),t("div",null,[l(o,{defaultActive:e.value,data:d(n),"background-color":"#fff2a2",router:""},null,8,["defaultActive","data"])])}}});export{p as default};