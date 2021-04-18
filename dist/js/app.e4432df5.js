(function(e){function t(t){for(var s,l,o=t[0],i=t[1],c=t[2],d=0,m=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},r=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},7315:function(e,t,a){"use strict";a("900c")},"900c":function(e,t,a){},a89b:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("5c96"),r=a.n(n),l=a("b2d6"),o=a.n(l),i=(a("0fae"),a("bc3a")),c=a.n(i),u=a("ecee"),d=a("c074"),m=a("ad3d"),p=a("1da1"),f=(a("96cf"),a("d81d"),a("b0c0"),a("2f62")),b=(a("498a"),"https://actocards-api.guizo.dev.br/api");function v(e){return h.apply(this,arguments)}function h(){return h=Object(p["a"])(regeneratorRuntime.mark((function e(t){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.name,s=t.cards,e.next=3,c.a.post("".concat(b,"/game/play"),{name:a.trim(),cards:s.trim()});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function x(){return _.apply(this,arguments)}function _(){return _=Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(b,"/player/leaderboard"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}s["default"].use(f["a"]);var y=new f["a"].Store({state:{tableData:[]},mutations:{},actions:{fetchLeaderboard:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:a=t.sent,e.state.tableData=a.map((function(e,t){return{position:t+1,name:e.name,games:e.games,wins:e.wins,losses:e.losses,ties:e.ties}}));case 4:case"end":return t.stop()}}),t)})))()}},modules:{}}),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main",{staticClass:"p-3 flex flex-col items-center justify-center"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"text-center mb-5"},[e._v("ACTOCARDS")]),a("Game",{staticClass:"mb-5"}),a("Leaderboard")],1)])])},g=[],w=(a("b972"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card"},[a("h2",{staticClass:"text-center"},[e._v("Feeling Lucky?")]),a("div",{staticClass:"my-5"},[a("span",{staticClass:"underline cursor-pointer hover:font-bold",on:{click:function(t){e.gameInstructionsModalVisible=!0}}},[a("font-awesome-icon",{attrs:{icon:"info-circle"}}),e._v(" How it works? ")],1),a("GameInstructionsModal",{attrs:{visible:e.gameInstructionsModalVisible},on:{close:e.closeGameInstructionsModal}})],1),a("el-form",{ref:"form",attrs:{model:e.form},nativeOn:{input:function(t){return e.handleInput(t)},submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("el-form-item",{attrs:{error:e.errors.name}},[a("span",{staticClass:"text-sm",attrs:{slot:"label"},slot:"label"},[e._v("Name:")]),a("el-input",{attrs:{placeholder:"Player's name",required:""},on:{input:e.handleNameInput},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{staticClass:"mb-8",attrs:{error:e.errors.cards}},[a("span",{staticClass:"text-sm",attrs:{slot:"label"},slot:"label"},[e._v("Cards:")]),a("el-input",{attrs:{placeholder:"Player's cards",required:""},on:{input:e.handleCardsInput},model:{value:e.form.cards,callback:function(t){e.$set(e.form,"cards",t)},expression:"form.cards"}})],1),a("el-form-item",{staticClass:"text-center"},[a("el-button",{attrs:{type:"warning","native-type":"button"},on:{click:e.clearForm}},[a("font-awesome-icon",{attrs:{icon:"times"}}),e._v(" Clear ")],1),a("el-button",{attrs:{type:"primary","native-type":"submit"}},[a("font-awesome-icon",{attrs:{icon:"play"}}),e._v(" Play ")],1)],1)],1),e.game?a("GameResultsModal",{attrs:{visible:e.gameResultsModalVisible,game:e.game},on:{close:e.closeGameResultsModal}}):e._e()],1)}),j=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"Game Instructions",visible:e.visible,"before-close":e.onClose,"lock-scroll":"",width:"80%"}},[a("ul",[a("li",{staticClass:"mb-2"},[a("div",[a("b",[e._v("1.")]),e._v(" Enter your username ")]),a("span",{staticClass:"text-xs text-gray-500"},[e._v(" Example: player1 ")]),a("ul",{staticClass:"list-disc list-inside ml-3"},[a("li",{staticClass:"text-xs text-red-500"},[e._v(" Only alphanumeric, dashes and underscores allowed ")])])]),a("li",{staticClass:"mb-2"},[a("div",[a("b",[e._v("2.")]),e._v(" Enter a list of cards separated by spaces (player's hand) ")]),a("span",{staticClass:"text-xs text-gray-500"},[e._v(" Example: 2 K 10 ")]),a("ul",{staticClass:"list-disc list-inside ml-3"},[a("li",{staticClass:"text-xs text-red-500"},[e._v(" 3 to 13 cards ")]),a("li",{staticClass:"text-xs text-red-500"},[e._v(" Available cards: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A ")]),a("li",{staticClass:"text-xs text-red-500"},[e._v(" List must contain distinct values ")])])]),a("li",{staticClass:"mb-2"},[a("b",[e._v("3.")]),e._v(" The game will generate a random list of cards (computer's hand) ")]),a("li",[a("b",[e._v("4.")]),e._v(" The hands are compared card by card in order. The higher card scores a point. The hand with more points win! ")])])])},M=[],I=s["default"].extend({props:{visible:Boolean},methods:{onClose:function(){this.$emit("close")}}}),R=I,S=a("2877"),k=Object(S["a"])(R,O,M,!1,null,null,null),G=k.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"Game Results",visible:e.visible,"before-close":e.onClose,"lock-scroll":"",width:"80%"}},[a("h3",{staticClass:"text-center text-lg mb-8 "},[a("el-alert",{attrs:{title:e.gameStatus.text,type:e.gameStatus.type,center:"",closable:!1}})],1),a("div",{staticClass:"flex items-center justify-between"},[a("span",{staticClass:"font-bold"},[e._v("Username:")]),a("span",{staticClass:"font-mono"},[e._v(e._s(e.game.player.name))])]),a("div",{staticClass:"flex items-center justify-between"},[a("span",{staticClass:"font-bold"},[e._v("Your hand:")]),a("span",{staticClass:"font-mono"},[e._v(e._s(e.hands.player))])]),a("div",{staticClass:"flex items-center justify-between"},[a("span",{staticClass:"font-bold"},[e._v("Computer hand:")]),a("span",{staticClass:"font-mono"},[e._v(e._s(e.hands.computer))])]),a("h4",{staticClass:"text-center text-lg underline my-5"},[e._v("Score")]),a("div",{staticClass:"flex items-center justify-center text-lg"},[a("span",{staticClass:"text-xs mr-3"},[e._v("(You)")]),e._v(" "+e._s(e.game.player_score)+" "),a("span",{staticClass:"text-xl font-bold mx-5"},[e._v("X")]),e._v(" "+e._s(e.game.computer_score)+" "),a("span",{staticClass:"text-xs ml-3"},[e._v("(Computer)")])]),a("h4",{staticClass:"text-center text-lg underline my-5"},[e._v("Stats")]),a("div",[a("div",{staticClass:"flex items-center justify-between"},[a("span",{staticClass:"font-bold"},[e._v("Games:")]),a("span",{staticClass:"font-mono"},[e._v(e._s(e.game.player.games))])]),a("div",{staticClass:"flex items-center justify-between"},[a("span",{staticClass:"font-bold"},[e._v("Wins:")]),a("span",{staticClass:"font-mono"},[e._v(e._s(e.game.player.wins))])]),a("div",{staticClass:"flex items-center justify-between"},[a("span",{staticClass:"font-bold"},[e._v("Losses:")]),a("span",{staticClass:"font-mono"},[e._v(e._s(e.game.player.losses))])]),a("div",{staticClass:"flex items-center justify-between"},[a("span",{staticClass:"font-bold"},[e._v("Ties:")]),a("span",{staticClass:"font-mono"},[e._v(e._s(e.game.player.ties))])])])])},$=[],L=(a("a15b"),s["default"].extend({props:{visible:Boolean,game:{type:Object}},methods:{onClose:function(){this.$emit("close")}},computed:{hands:function(){var e=JSON.parse(this.game.hands),t=e.player.join(","),a=e.computer.join(",");return{player:t,computer:a}},gameStatus:function(){return this.game.win?{text:"YOU WIN!",type:"success"}:this.game.lose?{text:"YOU LOSE!",type:"error"}:{text:"IT'S A TIE!",type:"warning"}}}})),E=L,P=Object(S["a"])(E,T,$,!1,null,null,null),V=P.exports,D=s["default"].extend({components:{GameInstructionsModal:G,GameResultsModal:V},data:function(){return{gameInstructionsModalVisible:!1,gameResultsModalVisible:!1,game:null,form:{name:"",cards:""},errors:{active:!1,name:"",cards:""}}},methods:{handleSubmit:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a,s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e.form);case 3:a=t.sent,e.gameResultsModalVisible=!0,e.game=a,e.$store.dispatch("fetchLeaderboard"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),422===t.t0.response.status&&(r=t.t0.response.data.errors,e.errors={active:!0,name:(null===(s=r.name)||void 0===s?void 0:s[0])||"",cards:(null===(n=r.cards)||void 0===n?void 0:n[0])||""});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},handleNameInput:function(e){this.form.name=e.toLowerCase()},handleCardsInput:function(e){this.form.cards=e.toUpperCase()},handleInput:function(){this.errors.active&&(this.errors={active:!1,name:"",cards:""})},clearForm:function(){this.handleInput(),this.form={name:"",cards:""}},closeGameInstructionsModal:function(){this.gameInstructionsModalVisible=!1},closeGameResultsModal:function(){this.gameResultsModalVisible=!1,this.clearForm()}}}),A=D,N=Object(S["a"])(A,w,j,!1,null,null,null),F=N.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card"},[a("h2",{staticClass:"text-center mb-5"},[a("font-awesome-icon",{attrs:{icon:"trophy"}}),e._v(" Leaderboard ")],1),a("el-table",{staticClass:"w-full",attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"position",label:"#",width:"50px"}}),a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"games",label:"Games"}}),a("el-table-column",{attrs:{prop:"wins",label:"Wins"}}),a("el-table-column",{attrs:{prop:"losses",label:"Losses"}}),a("el-table-column",{attrs:{prop:"ties",label:"Ties"}})],1)],1)},U=[],Y=s["default"].extend({computed:{tableData:function(){return this.$store.state.tableData}},mounted:function(){this.$store.dispatch("fetchLeaderboard")}}),W=Y,q=Object(S["a"])(W,J,U,!1,null,null,null),B=q.exports,K=(a("a89b"),s["default"].extend({components:{Game:F,Leaderboard:B}})),z=K,H=(a("7315"),Object(S["a"])(z,C,g,!1,null,"c3d9e404",null)),Q=H.exports;u["c"].add(d["b"]),u["c"].add(d["c"]),u["c"].add(d["d"]),u["c"].add(d["a"]),s["default"].component("font-awesome-icon",m["a"]),s["default"].config.productionTip=!1,s["default"].use(r.a,{locale:o.a}),c.a.defaults.headers={Accept:"application/json","Content-Type":"application/json"},new s["default"]({store:y,render:function(e){return e(Q)}}).$mount("#app")}});
//# sourceMappingURL=app.e4432df5.js.map