(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{10:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(19),u=t.n(r),o=(t(10),t(9)),i=t(20),s=t(3),j=t(0),h=function(e){return Object(j.jsxs)("form",{onSubmit:e.addPerson,children:[Object(j.jsxs)("div",{children:["name:  ",Object(j.jsx)("input",{value:e.newName,onChange:e.handleName})]}),Object(j.jsxs)("div",{children:["phone:  ",Object(j.jsx)("input",{value:e.newPhone,onChange:e.handlePhone})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){return Object(j.jsxs)("p",{children:["filter shown with ",Object(j.jsx)("input",{type:"text",value:e.newSearch,onChange:function(n){return e.setNewSearch(n.target.value)}})]})},d=function(e){var n=e.persons,t=e.handleDelete;return Object(j.jsx)("ul",{children:n.map((function(e){return Object(j.jsx)("li",{className:"person",children:Object(j.jsxs)("p",{children:[e.name," ",e.phone," ",Object(j.jsx)("button",{onClick:t,value:e.id,children:"delete"})]},e.name)},e.id)}))})},b=t(4),f=t.n(b),O="/api/notes",m=function(){return f.a.get(O).then((function(e){return e.data}))},p=function(e){return f.a.post(O,e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(O,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return f.a.delete("".concat(O,"/").concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),u=Object(s.a)(r,2),b=u[0],f=u[1],O=Object(c.useState)(""),g=Object(s.a)(O,2),w=g[0],S=g[1],N=Object(c.useState)(""),C=Object(s.a)(N,2),P=C[0],y=C[1],k=Object(c.useState)(""),D=Object(s.a)(k,2),F=D[0],L=D[1],T=Object(c.useState)(""),B=Object(s.a)(T,2),E=B[0],I=B[1];Object(c.useEffect)((function(){m().then((function(e){a(e)}))}),[]);var J=function(e){var n=e.message,t=e.error;return t?Object(j.jsx)("div",{className:"error",children:t}):n?Object(j.jsx)("div",{className:"message",children:n}):null};return Object(j.jsxs)("div",{children:[Object(j.jsx)(J,{message:F,error:E}),Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(l,{newSearch:P,setNewSearch:y}),Object(j.jsx)("h2",{children:"add a new"}),Object(j.jsx)(h,{addPerson:function(e){e.preventDefault();var n={name:b,phone:w};if(function(){var e,n=Object(i.a)(t);try{for(n.s();!(e=n.n()).done;)if(e.value.name===b)return!0}catch(c){n.e(c)}finally{n.f()}return!1}()){var c=t.find((function(e){return e.name===b})),r=c.id,u=Object(o.a)(Object(o.a)({},c),{},{phone:w});v(r,u).then((function(e){a(t.map((function(n){return n.id!==r?n:e}))),L("".concat(e.name," phone number was successfully changed!"))})).catch((function(e){I("".concat(c.name," was already removed")),setTimeout((function(){I(null)}),5e3),a(t.filter((function(e){return e.id!==r})))}))}else p(n).then((function(e){a(t.concat(e)),f(""),S(""),L("".concat(e.name," was successfully added!"))}))},handleName:function(e){f(e.target.value)},handlePhone:function(e){S(e.target.value)},newName:b,newPhone:w}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(d,{persons:P.length?t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())})):t,handleDelete:function(e){var n=e.target.value;x(n).then((function(e){a(t.filter((function(e){return e!==n})))}))}})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,u=n.getTTFB;t(e),c(e),a(e),r(e),u(e)}))};u.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),w()}},[[44,1,2]]]);
//# sourceMappingURL=main.4746702e.chunk.js.map