(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{19:function(e,t,a){e.exports={Button:"Button_Button__3pMEX"}},2:function(e,t,a){e.exports={Displayer:"AnswerDisplayer_Displayer__1vkxJ",opacityGrow:"AnswerDisplayer_opacityGrow__2IW_F",Letter:"AnswerDisplayer_Letter__28mOb",Visible:"AnswerDisplayer_Visible__3qbXk",Hidden:"AnswerDisplayer_Hidden__1PH02"}},20:function(e,t,a){e.exports={Result:"Popup_Result__3y316"}},21:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2QDMi",backdropShow:"Backdrop_backdropShow__3hs2v"}},23:function(e,t,a){e.exports={HintDisplayer:"HintDisplayer_HintDisplayer__1UqRj",opacityGrow:"HintDisplayer_opacityGrow__2XE_t"}},26:function(e,t,a){e.exports=a(50)},3:function(e,t,a){e.exports={Keyboard:"Keyboard_Keyboard__1zdhK",opacityGrow:"Keyboard_opacityGrow__12yoX",Letter:"Keyboard_Letter__3rmbo",Guessed:"Keyboard_Guessed__3UeAb",myAnimation:"Keyboard_myAnimation__1ckk8"}},31:function(e,t,a){},32:function(e,t,a){},4:function(e,t,a){e.exports={BarTop:"Bar_BarTop__pC7Ot",barTopShow:"Bar_barTopShow__jFrxe",BarBottom:"Bar_BarBottom__36mHl",barBottomShow:"Bar_barBottomShow__2o4Kk"}},5:function(e,t,a){e.exports={Hangman:"Hangman_Hangman__1M5KM",Hint:"Hangman_Hint__1nNaK"}},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),i=a.n(r),o=(a(31),a(32),a(16)),l=a(17),c=a(24),u=a(18),m=a(25),d=a(19),p=a.n(d),h=function(e){return s.a.createElement("button",{className:p.a.Button,onClick:e.clicked},e.btnTxt)},_=a(4),f=a.n(_),g=function(e){return s.a.createElement("div",{className:e.class?f.a.BarTop:f.a.BarBottom},s.a.createElement("p",null,e.barTxt),e.btn?s.a.createElement(h,{clicked:e.clicked,btnTxt:e.btnTxt}):null)},v=a(2),w=a.n(v),y=function(e){var t=e.answer.split(/[ ,]+/).map((function(e){return e.split("")})).map((function(t,a){return s.a.createElement("ul",{key:a},t.map((function(t,a){return s.a.createElement("li",{key:a,className:w.a.Letter},s.a.createElement("span",{className:e.guesses.includes(t)?w.a.Visible:w.a.Hidden},t))})),s.a.createElement("li",null,"\xa0"))}));return s.a.createElement("div",{className:w.a.Displayer},t)},b=a(3),k=a.n(b),S="abcdefghijklmnopqrstuvwxyz".split(""),E=function(e){return s.a.createElement("ul",{className:k.a.Keyboard},S.map((function(t){return s.a.createElement("li",{key:t,className:e.guessedLetters.includes(t)||e.missedLetters.includes(t)?k.a.Guessed:k.a.Letter,onClick:function(){return e.onClick(t)}},t)})))},H=a(20),L=a.n(H),x=function(e){return s.a.createElement("div",{className:L.a.Result},s.a.createElement("p",null,e.msg),s.a.createElement(h,{clicked:e.clicked1,btnTxt:e.btnTxt1}),s.a.createElement(h,{clicked:e.clicked2,btnTxt:e.btnTxt2}))},D=a(21),B=a.n(D),T=function(e){return s.a.createElement("div",{className:B.a.Backdrop,onClick:e.hide})},A=a(22),M=a.n(A).a.create({baseURL:"https://wicked-quiz.firebaseio.com/"}),C=a(23),N=a.n(C),j=function(e){return s.a.createElement("div",{className:N.a.HintDisplayer},s.a.createElement("p",null,e.hintTxt,e.hintData))},O=a(5),K=a.n(O),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={answer:"",hint:{},guessedLetters:[],missedLetters:[],animalsData:{},moviesData:{},movies:!1,animals:!1,won:!1,gameStarted:!1},a.keyboardHandler=function(e){if(!"abcdefghijklmnopqrstuvwxyz".split("").includes(e.key))return null;a.letterCompareHandler(e.key)},a.wonHandler=function(){a.state.answer.replace(/(.)(?=.*\1)/g,"").split(" ").join("").split("").length===a.state.guessedLetters.length&&a.setState({won:!0})},a.letterCompareHandler=function(e){var t=a.state.answer.split("").findIndex((function(t){return t===e}));if(a.state.guessedLetters.includes(e))return null;if(t>-1){var n=a.state.guessedLetters.concat(e);a.setState({guessedLetters:n},a.wonHandler)}else{var s=a.state.missedLetters.concat(e);a.setState({missedLetters:s})}},a.setAnswer=function(e){if("Animals"===e){var t=Object.getOwnPropertyNames(a.state.animalsData["-M1lH5PO7Mv_29581dC1"])[Math.floor(40*Math.random())],n=t.toLowerCase();a.setState({answer:n});var s=a.state.animalsData["-M1lH5PO7Mv_29581dC1"][t.toString()];a.setState({hint:s}),a.setState({animals:!0})}else{var r=Object.getOwnPropertyNames(a.state.moviesData)[Math.floor(46*Math.random())],i=r.toLowerCase();a.setState({answer:i});var o=a.state.moviesData[r.toString()];a.setState({hint:o}),a.setState({movies:!0})}},a.startHandler=function(e){a.setState({guessedLetters:[]}),a.setState({missedLetters:[]}),a.setState({won:!1}),a.setState({gameStarted:!0}),a.setState({movies:!1}),a.setState({animals:!1}),a.setAnswer(e)},a.playAgainHandler=function(){a.setState({answer:""}),a.setState({hint:{}}),a.setState({guessedLetters:[]}),a.setState({missedLetters:[]}),a.setState({movies:!1}),a.setState({animals:!1}),a.setState({won:!1}),a.setState({gameStarted:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),document.addEventListener("keydown",(function(t){return e.keyboardHandler(t)}));M.get("/Animals.json").then((function(t){e.setState({animalsData:t.data})})).catch((function(e){return console.log(e)}));M.get("/Movies.json").then((function(t){e.setState({moviesData:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keydown",(function(t){return e.keyboardHandler(t)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:K.a.Hangman},this.state.gameStarted?s.a.createElement(g,{class:!0,barTxt:this.state.animals?"Animal name:":this.state.movies?"Movie title:":null}):null,this.state.answer?s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{answer:this.state.answer,guesses:this.state.guessedLetters}),s.a.createElement("div",{className:K.a.Hint},this.state.missedLetters.length>4&&this.state.animals?s.a.createElement(j,{hintTxt:"Place of living: ",hintData:this.state.hint.Place}):null,this.state.missedLetters.length>4&&this.state.movies?s.a.createElement(j,{hintTxt:"Stars: ",hintData:this.state.hint.Stars}):null),s.a.createElement(E,{onClick:this.letterCompareHandler,guessedLetters:this.state.guessedLetters,missedLetters:this.state.missedLetters})):null,this.state.won?s.a.createElement(x,{msg:"You won!",clicked1:function(){return e.startHandler("Animals")},btnTxt1:"Animals",clicked2:function(){return e.startHandler("Movies")},btnTxt2:"Movies"}):null,this.state.gameStarted?null:s.a.createElement(x,{msg:"Choose category:",clicked1:function(){return e.startHandler("Animals")},btnTxt1:"Animals",clicked2:function(){return e.startHandler("Movies")},btnTxt2:"Movies"}),this.state.won||!this.state.gameStarted?s.a.createElement(T,{hide:this.backdropHideHandler}):null,this.state.gameStarted?s.a.createElement(g,{btn:!0,clicked:this.playAgainHandler,btnTxt:"Play Again"}):null)}}]),t}(n.Component);var P=function(){return s.a.createElement("div",null,s.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.cdba68a8.chunk.js.map