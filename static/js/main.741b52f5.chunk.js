(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i=t(0),s=t.n(i),u=t(9),b=t.n(u),d=(t(23),t(13)),l=t(2),j=t(3),p=j.a.form(r||(r=Object(l.a)(["\n  margin-left: 10px;\n  margin-bottom: 10px;\n  border: solid 1px black;\n  padding: 15px;\n  width: 300px;\n"]))),m=j.a.label(a||(a=Object(l.a)([""]))),O=j.a.input(c||(c=Object(l.a)(["\n  display: flex;\n  margin: 10px 0;\n"]))),f=j.a.button(o||(o=Object(l.a)(["\n  margin-bottom: 15px;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    background-color: #bcb7b7;\n  }\n"]))),x=t(4),h={ADD:"contacts/add",DELETE:"contacts/delete",CHANGE_FILTER:"contacts/changeFilter"},g=t(15),v=t.n(g),C={addContact:function(e,n){return{type:h.ADD,payload:{id:v.a.generate(),name:e,number:n}}},deleteContacts:function(e){return{type:h.DELETE,payload:e}},changeFilter:function(e){return{type:h.CHANGE_FILTER,payload:e}}},y=t(1);var E,A,D,w,L,k,F,T,S=Object(x.b)((function(e){return{contacts:e.contacts.items}}),(function(e){return{onSubmit:function(n,t){return e(C.addContact(n,t))}}}))((function(e){var n=e.contacts,t=e.onSubmit,r=Object(i.useState)(""),a=Object(d.a)(r,2),c=a[0],o=a[1],s=Object(i.useState)(""),u=Object(d.a)(s,2),b=u[0],l=u[1],j=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":o(r);break;case"number":l(r);break;default:return}},x=function(){o(""),l("")};return Object(y.jsxs)(p,{onSubmit:function(e){if(e.preventDefault(),n.find((function(e){return e.name.toLowerCase()===c.toLowerCase()})))return alert("".concat(c," is already in contacts")),void x();t(c,b),x()},children:[Object(y.jsxs)(m,{children:["Name",Object(y.jsx)(O,{type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j})]}),Object(y.jsxs)(m,{children:["Number",Object(y.jsx)(O,{type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j})]}),Object(y.jsx)(f,{type:"submit",children:"Add contacts"})]})})),z=j.a.h2(E||(E=Object(l.a)(["\n  margin-bottom: 10px;\n"]))),R=j.a.button(A||(A=Object(l.a)(["\n  margin-bottom: 15px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    transform: scale(1.3);\n  }\n"]))),N=j.a.ul(D||(D=Object(l.a)(["\n  padding: 0;\n"]))),H=j.a.li(w||(w=Object(l.a)(["\n  display: flex;\n"]))),I=t(12),G=function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))},J=Object(x.b)((function(e){var n=e.contacts,t=n.items,r=n.filter;return{contacts:G(t,r)}}),(function(e){return{onDeleteContacts:function(n){return e(C.deleteContacts(n))}}}))((function(e){var n=e.contacts,t=e.onDeleteContacts;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(z,{children:"Contacts"}),Object(y.jsx)(N,{children:n.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(y.jsxs)(H,{id:n,children:[Object(y.jsx)(I.a,{}),Object(y.jsxs)("span",{children:[r,":"]})," ",Object(y.jsx)("span",{children:a}),Object(y.jsx)(R,{type:"button",onClick:function(){return t(n)},children:Object(y.jsx)(I.b,{})})]},n)}))})]})})),Z=j.a.section(L||(L=Object(l.a)([""]))),_=j.a.h1(k||(k=Object(l.a)(["\n  font-size: 30px;\n  margin: 10px 0;\n"]))),q=function(e){var n=e.titel,t=e.children;return Object(y.jsxs)(Z,{children:[Object(y.jsx)(_,{children:n}),t]})},B=j.a.label(F||(F=Object(l.a)(["\n  font-size: 20px;\n"]))),M=j.a.input(T||(T=Object(l.a)(["\n  display: flex;\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),K=Object(x.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(n){return e(C.changeFilter(n.currentTarget.value))}}}))((function(e){var n=e.value,t=e.onChange;return Object(y.jsxs)(B,{children:["Filter contacts by name"," ",Object(y.jsx)(M,{type:"text",value:n,onChange:t})]})}));function P(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(q,{titel:"Phonebook",children:[Object(y.jsx)(S,{}),Object(y.jsx)(K,{}),Object(y.jsx)(J,{})]})})}var W=t(5),$=t(16),Q=t(17),U=Object(W.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case h.ADD:return[].concat(Object(Q.a)(e),[r]);case h.DELETE:return e.filter((function(e){return e.id!==r}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case h.CHANGE_FILTER:return r;default:return e}}}),V=Object(W.combineReducers)({contacts:U}),X=Object(W.createStore)(V,Object($.composeWithDevTools)());b.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(x.a,{store:X,children:Object(y.jsx)(P,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.741b52f5.chunk.js.map