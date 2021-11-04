(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{14:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=(n(14),n(9)),l=n(2),s=n(6),u=n.n(s),b=(n(23),n(0));var d=function(e){var t=e.banOnAddingDuplicateContact,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),d=s[0],j=s[1],m=u()(),f=u()(),h=function(){i(""),j("")};return Object(b.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var n={id:u()(),name:r,number:d};t(n),h()},children:[Object(b.jsx)("label",{className:"label",htmlFor:m,children:"Enter name"}),Object(b.jsx)("input",{id:m,type:"text",className:"input",name:"name",value:r,onChange:function(e){i(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(b.jsx)("label",{className:"label",htmlFor:f,children:"Enter number"}),Object(b.jsx)("input",{id:f,type:"tel",className:"input",name:"number",value:d,onChange:function(e){j(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(b.jsx)("button",{type:"submit",className:"contact-button",children:"Add contact"})]})},j=(n(25),function(e){var t=e.handleChangeFilter;return Object(b.jsxs)("div",{className:"filter-container",children:[Object(b.jsx)("label",{className:"label",htmlFor:"filter",children:"Find contacts by name"}),Object(b.jsx)("input",{className:"input",id:"filter",type:"text",name:"filter",onChange:t})]})}),m=(n(26),function(e){var t=e.children;return Object(b.jsx)("ul",{className:"contact-list",children:t})}),f=(n(27),function(e){var t=e.filteredContacts,n=e.deleteContact;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(b.jsxs)("li",{children:[a,": ",c,Object(b.jsx)("button",{type:"button",className:"delete-button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})});n(28);var h=function(){var e,t=Object(a.useState)(null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:[]),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],h=s[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))}),[c]);var O=Object(a.useMemo)((function(){var e=u.toLowerCase();return c.filter((function(t){return t.name.toLowerCase().includes(e)}))}),[u,c]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(d,{banOnAddingDuplicateContact:function(e){var t;c.map((function(e){return e.name})).includes(e.name)?alert("".concat(e.name," is already in contacts")):(t=e,r((function(e){return[].concat(Object(o.a)(e),[t])})))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(j,{handleChangeFilter:function(e){h(e.target.value)}}),Object(b.jsx)(m,{children:Object(b.jsx)(f,{filter:u,filteredContacts:O,deleteContact:function(e){r(c.filter((function(t){return t.id!==e})))}})})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b8bc840d.chunk.js.map