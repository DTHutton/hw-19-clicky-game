(this["webpackJsonphw-19-clicky-game"]=this["webpackJsonphw-19-clicky-game"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Eevee","image":"https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"},{"id":2,"name":"Vaporeon","image":"https://cdn.bulbagarden.net/upload/f/fd/134Vaporeon.png"},{"id":3,"name":"Jolteon","image":"https://cdn.bulbagarden.net/upload/b/bb/135Jolteon.png"},{"id":4,"name":"Flareon","image":"https://cdn.bulbagarden.net/upload/d/dd/136Flareon.png"},{"id":5,"name":"Espeon","image":"https://cdn.bulbagarden.net/upload/a/a7/196Espeon.png"},{"id":6,"name":"Umbreon","image":"https://cdn.bulbagarden.net/upload/3/3d/197Umbreon.png"},{"id":7,"name":"Leafeon","image":"https://cdn.bulbagarden.net/upload/f/f5/470Leafeon.png"},{"id":8,"name":"Glaceon","image":"https://cdn.bulbagarden.net/upload/2/23/471Glaceon.png"},{"id":9,"name":"Sylveon","image":"https://cdn.bulbagarden.net/upload/e/e8/700Sylveon.png"}]')},function(e,n,a){e.exports=a(22)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(8),o=a.n(c),l=(a(15),a(1)),i=a(2),s=a(4),u=a(3),m=a(5),d=(a(16),a(17),function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/",className:"brand-logo right"},"Clicky Game"),r.a.createElement("div",{className:"left"},"Score"),r.a.createElement("div",{className:"center"},"Instructions")))}),p=(a(18),function(e){return r.a.createElement("div",{className:"card-container row"},e.children)}),g=a(6),h=(a(19),a(9)),b=function(e){function n(){var e,a;Object(l.a)(this,n);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={pokemon:h,guessedArr:[]},a.handleClick=function(e){if(!a.state.guessedArr.includes(e)){var n=[].concat(Object(g.a)(a.state.guessedArr),[e]),t=Object(g.a)(a.state.pokemon).sort((function(){return Math.random()-.5}));a.setState({pokemon:t,guessedArr:n})}},a}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log("guessedArr",this.state.guessedArr),this.state.pokemon.map((function(n){var a=n.id,t=n.name,c=n.image;return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{alt:t,src:c,id:a,name:t,onClick:function(){return e.handleClick(a)}})))}))}}]),n}(t.Component),f=(a(20),function(e){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("p",{className:"copywrite-text"},"\xa9 Clicky Game by Derek Hutton"),r.a.createElement("a",{className:"repo-link",href:"https://github.com/DTHutton/hw-19-clicky-game"},"GitHub Repo"))))}),v=(a(21),function(e){return r.a.createElement("div",{className:"container"},e.children)}),E=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(d,null),r.a.createElement(p,null,r.a.createElement(b,null)),r.a.createElement(f,null))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2bb7139f.chunk.js.map