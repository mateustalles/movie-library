(this["webpackJsonpmovie-database-crud"]=this["webpackJsonpmovie-database-crud"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),l=a.n(r),o=(a(31),a(8)),c=a(12),s=a(2),m=a(3),u=a(5),d=a(4),v=a(10),h=a(6),p=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loading"},"Carregando...")}}]),t}(n.Component),b=a(16),f=a(15),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state=Object(f.a)({},e.movie),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(b.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_title"},"T\xedtulo")))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_subtitle"},"Subt\xedtulo")))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_image"},"Imagem")))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("textarea",{id:"movie_storyline",className:"materialize-textarea",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_storyline"},"Sinopse")))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",{className:"row col"},i.a.createElement("label",{htmlFor:"movie_genre"},"Genre Select"),i.a.createElement("select",{className:"browser-default",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense")))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",className:"form-control",step:.1,min:0,max:5,value:t||"",onChange:function(t){return e.updateMovie("rating",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_rating"},"Avalia\xe7\xe3o")))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("button",{className:"btn waves-effect waves-light",type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"movie-form"},i.a.createElement("div",{className:"row"},i.a.createElement("form",{className:"col s12"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton())))}}]),t}(i.a.Component),E=g;g.defaultProps={movie:{title:"",subtitle:"",storyline:"",imagePath:"",id:0}};var y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card movie-card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:"../".concat(n)}),i.a.createElement("span",{className:"card-title"},t)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card-action"},i.a.createElement(o.b,{to:"/movies/".concat(e.id,"/")},"VER DETALHES")))))}}]),t}(i.a.Component),O=a(17),j=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(j));var N=function(){return JSON.parse(localStorage.getItem("movies"))},S=function(e){return localStorage.setItem("movies",JSON.stringify(e))},k=function(e){var t=N().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){setTimeout((function(){e(t)}),2e3)}))},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={movie:[],status:"loading",shouldRedirect:!1},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;k(t).then((function(t){return e.setState({movie:t,status:""})}))}},{key:"handleSubmit",value:function(e){!function(e){var t=N().map((function(t){return t.id===parseInt(e.id,10)?Object(f.a)({},t,{},e):t}));S(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))}(e),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):"loading"===t?i.a.createElement(p,null):i.a.createElement(E,{movie:n,onSubmit:this.handleSubmit})}}]),t}(n.Component);function I(e){var t=e.movie,a=t.title,n=t.storyline,r=t.imagePath,l=t.genre,o=t.rating,c=t.subtitle;return i.a.createElement("div",null,i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",src:"../../".concat(r)}),i.a.createElement("span",{className:"card-title"},a)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,"Subtitle: ".concat(c)),i.a.createElement("p",null,"Storyline: ".concat(n)),i.a.createElement("p",null,"Genre: ".concat(l)),i.a.createElement("p",null,"Rating: ".concat(o))))}var C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={movie:[],redirect:!1},a.byebyeMovie=a.byebyeMovie.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;k(t).then((function(t){return e.setState({movie:t})}))}},{key:"byebyeMovie",value:function(){(function(e){var t=N();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),S(t),new Promise((function(e){setTimeout((function(){e({status:"OK"})}),1e3)}))})(this.props.match.params.id).then(this.setState({redirect:!0}))}},{key:"render",value:function(){var e=this.state,t=e.movie,a=e.redirect,n=this.props.match.params.id;return 0===t.length?i.a.createElement(p,null):a?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card"},i.a.createElement(I,{movie:t,id:n}),i.a.createElement("div",{className:"card-action"},i.a.createElement(o.b,{to:"/movies/".concat(n,"/edit/")},"EDITAR"),i.a.createElement(o.b,{to:"/"},"VOLTAR"),i.a.createElement(o.b,{to:{state:{movie:t}},onClick:this.byebyeMovie},"DELETAR CART\xc3O")))))}}]),t}(n.Component);I.defaultTypes={movie:{title:"",subtitle:"",storyline:"",imagePath:"",genre:"",rating:"",id:0}};var _=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={movies:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){setTimeout((function(){var t=N();e(t)}),2e3)})).then((function(t){return e.setState((function(e){return{movies:[].concat(Object(O.a)(e.movies),[t])}}))}))}},{key:"render",value:function(){var e=this.state.movies;return 0===e.length?i.a.createElement(p,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row movie-list"},i.a.createElement("div",null,i.a.createElement(o.b,{className:"add-movie-button",to:"/movies/new/"},"ADICIONAR CART\xc3O")),i.a.createElement("div",{className:"movie-list"},e[0].map((function(e){return i.a.createElement(y,{key:e.title,movie:e})})))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={redirect:!1},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){(function(e){var t=N(),a=t[t.length-1].id+1,n=Object(f.a)({},e,{id:a});return t=[].concat(Object(O.a)(t),[n]),S(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))})(e).then(this.setState({redirect:!0}))}},{key:"render",value:function(){return this.state.redirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement(E,{onSubmit:this.handleSubmit})}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"not-found header"},"P\xe1gina n\xe3o encontrada")}}]),t}(n.Component);a(37);var R=function(){return i.a.createElement(o.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/movies/:id/edit/",component:w}),i.a.createElement(c.b,{path:"/movies/new/",component:P}),i.a.createElement(c.b,{path:"/movies/:id/",component:C}),i.a.createElement(c.b,{path:"/",component:_}),i.a.createElement(c.b,{path:"*",render:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8ac6757d.chunk.js.map