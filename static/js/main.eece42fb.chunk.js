(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o=t(0),b=t.n(o),s=t(12),d=t.n(s),u=(t(28),t(16)),j=t(3),l=t(4),O=l.a.form(a||(a=Object(j.a)(["\n  margin-left: 10px;\n  margin-bottom: 10px;\n  border: solid 1px black;\n  padding: 15px;\n  width: 300px;\n"]))),m=l.a.label(r||(r=Object(j.a)([""]))),p=l.a.input(c||(c=Object(j.a)(["\n  display: flex;\n  margin: 10px 0;\n"]))),x=l.a.button(i||(i=Object(j.a)(["\n  margin-bottom: 15px;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    background-color: #bcb7b7;\n  }\n"]))),f=t(5),h=t(18),g=t.n(h),v=t(6),y=Object(v.b)("contacts/add",(function(e,n){return{payload:{id:g.a.generate(),name:e,number:n}}})),C=Object(v.b)("contacts/delete"),k=Object(v.b)("contacts/changeFilter"),w=function(e){return e.contacts.items},A=function(e){var n=w(e),t=function(e){return e.contacts.filter}(e).toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},z=t(1);var L,S,F,J,T,Z,q,B,E=function(){var e=Object(o.useState)(""),n=Object(u.a)(e,2),t=n[0],a=n[1],r=Object(o.useState)(""),c=Object(u.a)(r,2),i=c[0],b=c[1],s=Object(f.c)(),d=Object(f.d)(w),j=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":b(r);break;default:return}},l=function(){a(""),b("")};return Object(z.jsxs)(O,{onSubmit:function(e){if(e.preventDefault(),d.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts")),void l();s(y(t,i)),l()},children:[Object(z.jsxs)(m,{children:["Name",Object(z.jsx)(p,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j})]}),Object(z.jsxs)(m,{children:["Number",Object(z.jsx)(p,{type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j})]}),Object(z.jsx)(x,{type:"submit",children:"Add contacts"})]})},M=l.a.h2(L||(L=Object(j.a)(["\n  margin-bottom: 10px;\n"]))),N=l.a.button(S||(S=Object(j.a)(["\n  margin-bottom: 15px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    transform: scale(1.3);\n  }\n"]))),D=l.a.ul(F||(F=Object(j.a)(["\n  padding: 0;\n"]))),H=l.a.li(J||(J=Object(j.a)(["\n  display: flex;\n"]))),I=t(15),K=function(){var e=Object(f.d)(A),n=Object(f.c)();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(M,{children:"Contacts"}),Object(z.jsx)(D,{children:e.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(z.jsxs)(H,{id:t,children:[Object(z.jsx)(I.a,{}),Object(z.jsxs)("span",{children:[a,":"]})," ",Object(z.jsx)("span",{children:r}),Object(z.jsx)(N,{type:"button",onClick:function(){!function(e){n(C(e))}(t)},children:Object(z.jsx)(I.b,{})})]},t)}))})]})},P=l.a.section(T||(T=Object(j.a)([""]))),R=l.a.h1(Z||(Z=Object(j.a)(["\n  font-size: 30px;\n  margin: 10px 0;\n"]))),$=function(e){var n=e.titel,t=e.children;return Object(z.jsxs)(P,{children:[Object(z.jsx)(R,{children:n}),t]})},G=l.a.label(q||(q=Object(j.a)(["\n  font-size: 20px;\n"]))),Q=l.a.input(B||(B=Object(j.a)(["\n  display: flex;\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),U=Object(f.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(n){return e(k(n.currentTarget.value))}}}))((function(e){var n=e.value,t=e.onChange;return Object(z.jsxs)(G,{children:["Filter contacts by name",Object(z.jsx)(Q,{type:"text",value:n,onChange:t})]})}));function V(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)($,{titel:"Phonebook",children:[Object(z.jsx)(E,{}),Object(z.jsx)(U,{}),Object(z.jsx)(K,{})]})})}var W,X=t(8),Y=t(22),_=t(2),ee=Object(v.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(W={},Object(X.a)(W,y,(function(e,n){var t=n.payload;return[].concat(Object(Y.a)(e),[t])})),Object(X.a)(W,C,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),W)),ne=Object(v.c)("",Object(X.a)({},k,(function(e,n){return n.payload}))),te=Object(_.b)({items:ee,filter:ne}),ae=t(19),re=t.n(ae),ce=t(7),ie=t(20),oe={key:"contacts",storage:t.n(ie).a,blacklist:["filter"]},be=Object(v.a)({reducer:{contacts:Object(ce.g)(oe,te)},devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[ce.a,ce.f,ce.b,ce.c,ce.d,ce.e]}}).concat(re.a)}}),se=Object(ce.h)(be),de=t(21);d.a.render(Object(z.jsx)(b.a.StrictMode,{children:Object(z.jsx)(f.a,{store:be,children:Object(z.jsx)(de.a,{loading:Object(z.jsx)("div",{children:"Loading..."}),persistor:se,children:Object(z.jsx)(V,{})})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.eece42fb.chunk.js.map