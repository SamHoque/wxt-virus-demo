var proxy=function(){"use strict";function e(r){return r}const t={async main(){},matches:["*://*.facebook.com/messages/*"],runAt:"document_start",world:"MAIN"};function c(){}function n(r,...i){}const o={debug:(...r)=>n(console.debug,...r),log:(...r)=>n(console.log,...r),warn:(...r)=>n(console.warn,...r),error:(...r)=>n(console.error,...r)};return(async()=>{try{return await t.main()}catch(r){throw o.error('The content script "proxy" crashed on startup!',r),r}})()}();
proxy;
