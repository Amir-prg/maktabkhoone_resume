(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"title":"Hello,I\'m Amir","subtitle":"Full-stack Developer | web designer | programmer","links":{"github":"https://github.com/Amir-prg","linkedin":"https://www.linkedin.com/in/amir-heshmati-bb97021b3/","stackoverflow":"https://stackoverflow.com/story/amir_heshmati","instagram":"https://www.instagram.com/amir_heshmati79/"},"sections":[{"title":"About","items":{"type":"p"}},{"title":"Skills","items":[{"type":"card","content":{"image":"img/reactJS.png","title":"ReactJs"}},{"type":"card","content":{"image":"img/html.png","title":"Html"}},{"type":"card","content":{"image":"/img/css.png","title":"CSS"}},{"type":"card","content":{"image":"/img/sass.png","title":"Sass"}},{"type":"card","content":{"image":"/img/JS.png","title":"Javascript"}},{"type":"card","content":{"image":"/img/jquery.png","title":"Jquery"}},{"type":"card","content":{"image":"/img/php.png","title":"Php"}},{"type":"card","content":{"image":"/img/git.png","title":"Git"}},{"type":"card","content":{"image":"/img/c++.png","title":"C++"}}]}],"icon":{"down":"/img/down.png","colorme":"/img/colorme.png","up":"/img/up.png"}}')},26:function(e,t,a){e.exports=a(52)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(11),r=a.n(i),c=(a(31),a(2)),o=a(3),s=a(4),m=a(5),u=(a(32),a(12)),p=(a(33),a(24)),g=a.n(p),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children;return l.a.createElement("div",{className:"fullpage".concat(this.props.className," || '' "),color:"red"},e,l.a.createElement(g.a,{color:"rgb(17, 126, 153)",snowflakeCount:120}))}}]),a}(n.Component),d=a(1),b=a(25),f=function(e){return l.a.createElement("div",null,l.a.createElement("img",{src:e.icon,style:{minWidth:"30px",display:"flex",flexDirection:"row",transform:"translateY(220px)",alignContent:"center",alignItems:"center",margin:"auto"}}))},v=a(6),y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeColor=function(){n.setState({color:"rgb(17, 126, 153)"===n.state.color?"orange":"rgb(17, 126, 153)"})},n.state={color:"rgb(17, 126, 153)"},n.changeColor=n.changeColor.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return[l.a.createElement("div",{className:"navigation",style:{color:this.state.color}},l.a.createElement("img",{src:d.icon.colorme,alt:"",title:"colorme",onClick:function(){e.changeColor()}}),l.a.createElement("div",{className:"sections",style:{color:this.state.color}},l.a.createElement(v.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:250,duration:1e3,delay:0,className:"About-nav",style:{color:this.state.color}},"About"),l.a.createElement(v.Link,{activeClass:"active",to:"Skills",spy:!0,smooth:!0,offset:1350,duration:1e3,delay:0,className:"Skill-nav",style:{color:this.state.color}},"Skills"),l.a.createElement(v.Element,{name:"about",className:"element"}),l.a.createElement(v.Element,{name:"Skills",className:"element"}))),l.a.createElement(h,{className:"1",style:{color:this.state.color}},l.a.createElement("h1",{className:"title",style:{color:this.state.color}},d.title),l.a.createElement("h3",{className:"subtitle",style:{color:this.state.color}},d.subtitle),l.a.createElement("div",{className:"link"},Object.keys(d.links).map((function(e){return l.a.createElement(b.SocialIcon,{className:"links",url:d.links[e],target:"_blank"})}))),l.a.createElement(v.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:250,duration:400,delay:0},l.a.createElement(f,{icon:d.icon.down,color:this.state.color})),l.a.createElement(v.Element,{name:"about",className:"element"}))]}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return[l.a.createElement(h,{className:"2"},l.a.createElement("h2",{className:"about-title"},d.sections[0].title),l.a.createElement("h4",{className:"about-paragraph"},l.a.createElement("i",null," ","Hi, My name is Seyed Amir Heshmati and i'm 20 years old . I live in Tehran and i'm studing computer engineering . I love programming and web developing ,specially the programmin in back-end part and i want to progress in these feilds. also i like team working because it helps me to improve myself in different aspect such as education,knowledge,social relationship and so on.",l.a.createElement("br",null),'Thank you for visiting my website!"')),l.a.createElement(v.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:250,duration:400,delay:0},l.a.createElement(f,{icon:d.icon.down})),l.a.createElement(v.Element,{name:"skills",className:"element"}))]}}]),a}(n.Component),k=(a(51),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.skill;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image-wrapper"},l.a.createElement("img",{alt:"",src:e.content.image})),l.a.createElement("div",{className:"skill-title-wrapper"},l.a.createElement("h4",null,e.content.title)))}}]),a}(n.Component)),w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h,{className:"3"},l.a.createElement("h1",{className:"skill-title"},d.sections[1].title),l.a.createElement("div",{className:"card-wrapper"},d.sections[1].items.map((function(e){return l.a.createElement(k,{skill:e})}))))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement(E,null),l.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.89a6bf9f.chunk.js.map