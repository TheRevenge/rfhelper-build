(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"7fa3":function(t,e,n){"use strict";var o=n("cb85"),i=n.n(o);i.a},a55b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h1",{staticStyle:{color:"white"}},[t._v("Veuillez vous connecter")]),n("br"),n("div",{attrs:{id:"form"}},[t.firstStep?n("div",[n("vs-input",{staticStyle:{display:"inline-block","vertical-align":"baseline","margin-right":"10px","text-align":"left !important"},attrs:{"icon-no-border":"",icon:"account_circle","label-placeholder":"Pseudo"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("vs-button",{staticStyle:{display:"inline-block","vertical-align":"baseline"},attrs:{type:"relief"},on:{click:t.firstSubmit}},[t._v("Suivant")])],1):t._e(),t.secondStep?n("div",[n("p",{staticStyle:{color:"white"}},[t._v("Veuillez mettre le code suivant en humeur : "),n("span",{staticStyle:{padding:"6px","background-color":"#656565",border:"black solid 1px","border-radius":"15px"}},[t._v(t._s(t.mottoCode))]),t._v(" (le code a été copié)")]),n("br"),n("vs-button",{staticStyle:{display:"inline-block","vertical-align":"baseline"},attrs:{color:"success",type:"relief"},on:{click:t.secondSubmit}},[t._v("Terminer")])],1):t._e()])])},i=[],r=(n("c975"),n("bc3a")),s=n.n(r),c={name:"Login",components:{},data:function(){return{username:"",mottoCode:"",currentMotto:"",firstStep:!0,secondStep:!1,tempData:{}}},beforeCreate:function(){this.$parent.checkConnected()},methods:{openLoading:function(){this.$vs.loading({type:"radius"})},generateCode:function(){for(var t=8,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length,i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*o));return e="#RFH_"+e,e},firstSubmit:function(){var t=this,e=this;this.openLoading(),s.a.get("https://www.habbo.fr/api/public/users?name="+e.username).then((function(e){t.$vs.loading.close(),console.log(e),t.$vs.notify({title:"Succès !",text:"Données récupérées ! Veuillez confirmer la connexion ",color:"success",position:"top-center"}),t.mottoCode=t.generateCode(),t.$copyText(t.mottoCode),t.firstStep=!1,t.secondStep=!0})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Erreur !",text:"Une erreur s'est produite : "+e,color:"danger",position:"top-center"})}))},secondSubmit:function(){var t=this,e=this;this.openLoading(),s.a.get("https://www.habbo.fr/api/public/users?name="+e.username).then((function(n){t.$vs.loading.close(),console.log(n.data.motto+" ?= "+t.mottoCode),e.currentMotto=n.data.motto,e.tempData=n.data})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Erreur !",text:"Une erreur s'est produite : "+e,color:"danger",position:"top-center"})}));var n=0;this.currentMotto.indexOf(this.mottoCode)>-1?(this.$vs.notify({title:"Succès !",text:"Connexion en cours...",color:"success",position:"top-center"}),this.$parent.login(this.tempData)):(console.log("Failed"),n++,n<2?setTimeout(this.secondSubmit,500):this.$vs.notify({title:"Erreur !",text:"Code erroné, veuillez réessayer",color:"danger",position:"top-center"}))}}},a=c,l=(n("7fa3"),n("2877")),u=Object(l["a"])(a,o,i,!1,null,null,null);e["default"]=u.exports},a640:function(t,e,n){"use strict";var o=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&o((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var o=n("83ab"),i=n("d039"),r=n("5135"),s=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(r(c,t))return c[t];e||(e={});var n=[][t],l=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:a,d=r(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(l&&!o)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,u,d)}))}},c975:function(t,e,n){"use strict";var o=n("23e7"),i=n("4d64").indexOf,r=n("a640"),s=n("ae40"),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:a||!l||!u},{indexOf:function(t){return a?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},cb85:function(t,e,n){}}]);
//# sourceMappingURL=login-legacy.68c8b3c7.js.map